import { Button, Container, createStyles, Divider, Group, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { tickets } from '../../data/tickets';
import ReturnTicketItem from './ReturnTicketItem';

export function ManageTickets() {
  const [ticketsToReturn, setTickets] = useState([]);

  const returnTickets = (tickets: number[]) => {
    // TODO: set tickets in DB as free
    console.log(tickets);
  }

  return (
    <Container>
      <Stack spacing="xs">
        {tickets.map((ticket) => <ReturnTicketItem key={ticket.id} ticket={ticket} checkedTickets={ticketsToReturn} setTickets={setTickets} />)}
      </Stack>

      <Group position="center" mt="xl">
        <Button variant="default" component={Link} to='/account'>
          My account
        </Button>
        <Button color='red' onClick={() => returnTickets(ticketsToReturn)}>Return tickets</Button>
      </Group>
    </Container>
  );
}

export default ManageTickets;
