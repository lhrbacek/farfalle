import { Button, Container, Group, Stack } from '@mantine/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ticket } from '../../types/ticket';

import ReturnTicketItem from './ReturnTicketItem';

interface ChooseTicketsCardProps {
  allTickets: Ticket[]
  ticketsToReturn: number[],
  setTickets: Function,
  setPhase: Function,
}

export function ChooseTicketsCard({ allTickets, ticketsToReturn, setTickets, setPhase }: ChooseTicketsCardProps) {
  // TODO: Get bought tickets by user that are in the future

  const submitChosenTickets = () => {
    console.log(ticketsToReturn);
    setPhase(1);
  }

  return (
    <Container>
      <Stack spacing="xs">
        {allTickets.map((ticket) => <ReturnTicketItem key={ticket.id} ticket={ticket} checkedTickets={ticketsToReturn} setTickets={setTickets} />)}
      </Stack>

      <Group position="center" mt="xl">
        <Button variant="default" component={Link} to='/account'>
          My account
        </Button>
        <Button disabled={ticketsToReturn.length == 0} color='red' onClick={() => submitChosenTickets()}>Return tickets</Button>
      </Group>
    </Container>
  );
}

export default ChooseTicketsCard;