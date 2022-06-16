import { Button, Container, Divider, Group, Stack, Text, Notification, Center, Pagination } from '@mantine/core';
import React, { useState } from 'react';
import OrderTicketItem from './OrderTicketItem';
import { UserInfo } from './OrderPlacement';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartStateSelector } from '../../state/CartStateSelector';
import { cartState } from '../../state/CartState';
import { X } from 'tabler-icons-react';
import { filterCart, reservationTime } from '../../state/reservationTime';

interface SummaryProps {
  prevPhase: Function;
  nextPhase: Function;
  emptyCart: boolean;
  setEmptyCart: Function;
  userInfo: UserInfo;
  setFatalError: Function;
}

export function SummaryCard({ prevPhase, nextPhase, emptyCart, setEmptyCart, userInfo, setFatalError }: SummaryProps) {
  const [page, setPage] = useState(1);
  const cart = useRecoilValue(cartStateSelector);
  const setCartState = useSetRecoilState(cartState);
  const count = cart.length;
  const totalPrice = cart.reduce((sum: number, current: any) => sum + current.price, 0);
  const ticketsPerPage = 5;

  const pages = Math.ceil(cart.length / ticketsPerPage);
  const indexOfLastTicket = page * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage < 0 ? 0 : indexOfLastTicket - ticketsPerPage;
  const currentTickets = cart.slice(indexOfFirstTicket, indexOfLastTicket);

  const confirmOrder = async () => {
    setEmptyCart(false);
    const confirmedTickets = filterCart(cart);
    if (confirmedTickets.length == 0) {
      setEmptyCart(true);
      return;
    }

    const confirmedTicketsIds: Number[] = confirmedTickets.map((ticket) => ticket.id);

    // create order in database
    await fetch(`http://localhost:4000/order`, {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({
        email: userInfo.email,
        tickets: confirmedTicketsIds,
        adress: 0, // TODO
        // user?: ?,
      }),
    }).then((response) => {
      if (!(response.ok)) {
        setFatalError(true);
        return;
      }
    });

    // Update database with currently confirmed tickets
    for (let i = 0; i < confirmedTickets.length; i++) {
      await fetch(`http://localhost:4000/tickets/${confirmedTickets[i].id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({
          status: "SOLD",
          reservedAt: confirmedTickets[i].reservedAt,
        }),
      }).then((response) => {
        if (!(response.ok)) {
          setFatalError(true);
          return;
        }
      });
    }

    setCartState([]);
    nextPhase();
  }

  return (
    <Container>
      <Divider my="xl" label="Tickets Summary" labelPosition="center" />
      <Stack spacing="xs">
        {currentTickets.map((ticket) => <OrderTicketItem key={ticket.id} ticket={ticket} removable={false} />)}
        <Center>
          <Pagination page={page} onChange={setPage} total={pages} siblings={0} color="dark" />
        </Center>
      </Stack>
      <Group position="apart">
        <Text>Number of seats:</Text>
        <Text>{count}</Text>
      </Group>
      <Group position="apart">
        <Text weight={700}>Total price:</Text>
        <Text weight={700}>{totalPrice}€</Text>
      </Group>

      <Divider my="xl" label="Personal Information" labelPosition="center" />
      <Text>{userInfo.name} {userInfo.surname}</Text>
      <Text>{userInfo.email}</Text>
      <Text>{userInfo.street}, {userInfo.streetNo}</Text>
      <Text>{userInfo.city}, {userInfo.zip}</Text>

      <Group position="center">
        {emptyCart == true ?
          <Notification icon={<X size={18} />} color="red" disallowClose title='Something went wrong'>
            Your cart is empty.
          </Notification> : <></>
        }
      </Group>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={() => prevPhase()}>Back</Button>
        <Button onClick={() => confirmOrder()} color='dark'>Confirm</Button>
      </Group>
    </Container>
  );
}

export default SummaryCard;
