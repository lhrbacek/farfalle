import { Button, Container, createStyles, Divider, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import OrderTicketItem from './OrderTicketItem';
import { tickets } from '../../data/tickets'; // TODO: Fetch tickets from global state
import { StepProps, UserInfo } from './OrderPlacement';

interface SummaryProps {
  prevStep: Function;
  nextStep: Function;
  userInfo: UserInfo;
}

export function SummaryCard(props: SummaryProps) {
  const count = tickets.length;
  const totalPrice = tickets.reduce((sum: number, current: any) => sum + current.price, 0);

  const confirmOrder = () => {
    // TODO: Update DBˇ
    // TODO: Clear cart
    props.nextStep();
  }

  return (
    <Container>
      <Divider my="xl" label="Tickets Summary" labelPosition="center" />
      <Stack spacing="xs">
        {tickets.map((ticket) => <OrderTicketItem ticket={ticket} removable={false} />)}
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
