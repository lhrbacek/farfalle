import { Button, Container, createStyles, Divider, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import OrderTicketItem from './OrderTicketItem';
import { Trash } from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import { tickets as ticketsData } from '../../data/tickets';
import { StepProps } from './OrderPlacement';

export function CartCard(props: StepProps) {
  const tickets = ticketsData; // TODO: Fetch tickets from global state
  const count = tickets.length;
  const totalPrice = tickets.reduce((sum: number, current: any) => sum + current.price, 0);

  return (
    <Container>
      <Stack spacing="xs">
        {tickets.map((ticket) => <OrderTicketItem ticket={ticket} removable={true}/> )}
      </Stack>
      <Divider  my="xl" label="Summary" labelPosition="center" />
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
          {/*TODO: Delete cart content - update global state*/ }
          <Button color="red" rightIcon={<Trash size={14} />}> 
            Delete
          </Button>
        </Group>
      </Group>

      <Group position="center" mt="xl">
        <Link to="/home">
          <Button variant="default">Home</Button>
        </Link>
        <Button onClick={() => props.nextStep()}>Next step</Button>
      </Group>
    </Container>
  );
}

export default CartCard;
