import { Button, Container, Divider, Group, Stack, Text, Notification } from '@mantine/core';
import React, { useState } from 'react';
import OrderTicketItem from './OrderTicketItem';
import { Trash, X } from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartState } from '../../state/Atom';
import { cartStateSelector } from '../../state/Selector';
import { reservationTime } from '../../state/reservationTime';

export interface CartCardProps {
  prevPhase: Function;
  nextPhase: Function;
  emptyCart: boolean;
  setEmptyCart: Function;
}

export function CartCard({ nextPhase, emptyCart, setEmptyCart }: CartCardProps) {

  const cart = useRecoilValue(cartStateSelector);
  const setCartState = useSetRecoilState(cartState);
  const count = cart.length;
  const totalPrice = cart.reduce((sum: number, current: any) => sum + current.price, 0);

  const deleteCartContent = () => {
    // TODO: update DB with ticket.reservedAt = undefined
    // on error only clear cart
    setCartState([]);
  }

  const nextStep = () => {
    setEmptyCart(false);
    const currentTickets = cart.filter((item) => (item.reservedAt == undefined ? false : (new Date().getTime() - (new Date(item.reservedAt)).getTime()) < reservationTime));
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
        {cart.map((ticket) => <OrderTicketItem key={ticket.id} ticket={ticket} removable={true} />)}
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
        <Button variant="default" component={Link} to='/home'>Home</Button>
        <Button disabled={count == 0} onClick={() => nextStep()} color='dark'>Next step</Button>
      </Group>
    </Container>
  );
}

export default CartCard;
