import { Button, Container, Divider, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import OrderTicketItem from './OrderTicketItem';
import { UserInfo } from './OrderPlacement';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartStateSelector } from '../../state/Selector';
import { cartState } from '../../state/Atom';

interface SummaryProps {
  prevStep: Function;
  nextStep: Function;
  userInfo: UserInfo;
}

export function SummaryCard(props: SummaryProps) {
  const cart = useRecoilValue(cartStateSelector);
  const setCartState = useSetRecoilState(cartState);
  const count = cart.length;
  const totalPrice = cart.reduce((sum: number, current: any) => sum + current.price, 0);

  const confirmOrder = () => {
    // TODO: Update DBˇ
    setCartState([])
    props.nextStep();
  }

  return (
    <Container>
      <Divider my="xl" label="Tickets Summary" labelPosition="center" />
      <Stack spacing="xs">
        {cart.map((ticket) => <OrderTicketItem key={ticket.id} ticket={ticket} removable={false} />)}
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
      <Text>{props.userInfo.name} {props.userInfo.surname}</Text>
      <Text>{props.userInfo.email}</Text>
      <Text>{props.userInfo.phone}</Text>
      <Text>{props.userInfo.street}, {props.userInfo.streetNo}</Text>
      <Text>{props.userInfo.city}, {props.userInfo.zip}</Text>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={() => props.prevStep()}>Back</Button>
        <Button onClick={() => confirmOrder()} color='dark'>Confirm</Button>
      </Group>
    </Container>
  );
}

export default SummaryCard;
