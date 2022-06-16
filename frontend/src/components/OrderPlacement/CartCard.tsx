import { Button, Container, Divider, Group, Stack, Text, Notification, Center, Pagination } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import OrderTicketItem from './OrderTicketItem';
import { Trash, X } from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { cartState } from '../../state/CartState';
import { cartStateSelector } from '../../state/CartStateSelector';
import { filterCart, reservationTime } from '../../state/reservationTime';

export interface CartCardProps {
  prevPhase: Function;
  nextPhase: Function;
  emptyCart: boolean;
  setEmptyCart: Function;
  setFatalError: Function;
}

export function CartCard({ nextPhase, emptyCart, setEmptyCart, setFatalError }: CartCardProps) {
  const [page, setPage] = useState(1);
  const [cart, setCartState] = useRecoilState(cartState);
  const count = cart.length;
  const totalPrice = cart.reduce((sum: number, current: any) => sum + current.price, 0);
  const ticketsPerPage = 5;

  const pages = Math.ceil(cart.length / ticketsPerPage);
  const indexOfLastTicket = page * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage < 0 ? 0 : indexOfLastTicket - ticketsPerPage;
  const currentTickets = cart.slice(indexOfFirstTicket, indexOfLastTicket);

  const deleteCartContent = async () => {
    for (let i = 0; i < cart.length; i++) {
      await fetch(`http://localhost:4000/tickets/${cart[i].id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({
          reservedAt: new Date(new Date().getTime() - reservationTime),
        }),
      }).then((response) => {
        if (!(response.ok)) {
          setFatalError(true);
          return;
        }
      });
    }

    setCartState([]);
  }

  const nextStep = () => {
    setEmptyCart(false);
    const currentTickets = filterCart(cart);
    if (currentTickets.length == 0) {
      setEmptyCart(true);
      return;
    }
    setCartState(currentTickets);
    nextPhase();
  }

  return (
    <Container>
      <Stack spacing="xs">
        {currentTickets.map((ticket) => <OrderTicketItem key={ticket.id} ticket={ticket} removable={true} />)}
        <Center>
          <Pagination page={page} onChange={setPage} total={pages} siblings={0} color="dark" />
        </Center>
      </Stack>
      <Divider my="xl" label="Summary" labelPosition="center" />
      <Group position="apart">
        <Text>Number of seats:</Text>
        <Text>{count}</Text>
      </Group>
      <Group position="apart">
        <Text weight={700}>Total price:</Text>
        <Text weight={700}>{totalPrice}€</Text>
      </Group>
      <Group position="center">
        <Group>
          <Button disabled={count == 0} hidden={count == 0} color="red" rightIcon={<Trash size={14} />} onClick={() => deleteCartContent()}>
            Delete
          </Button>
        </Group>
      </Group>

      <Group position="center">
        {emptyCart == true ?
          <Notification icon={<X size={18} />} color="red" disallowClose title='Something went wrong'>
            Your cart is empty.
          </Notification> : <></>
        }
      </Group>

      <Group position="center" mt="xl">
        <Button variant="default" component={Link} to='/'>Home</Button>
        <Button disabled={count == 0} onClick={() => nextStep()} color='dark'>Next step</Button>
      </Group>
    </Container>
  );
}

export default CartCard;
