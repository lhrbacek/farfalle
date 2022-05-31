import React from 'react';
import { Button, Container, Group, Stack, Title } from '@mantine/core';
import ConfirmTicketItem from './ConfirmTicketItem';
import { Link } from 'react-router-dom';
import { Ticket } from '../../types/ticket';

interface ConfirmTicketsCardProps {
  allTickets: Ticket[],
  chosenTickets: number[],
  setPhase: Function
}

export function ConfirmTicketsCard({ allTickets, chosenTickets, setPhase }: ConfirmTicketsCardProps) {
  return (
    <Container>
      <Stack spacing="xs">
        <Title>
          Do you really want to return selected tickets?
        </Title>
        {allTickets.filter(({ id }) => (chosenTickets).includes(id)).map((ticket) => <ConfirmTicketItem key={ticket.id} {...ticket} />)}
      </Stack>
      <Group position='center' mt={30}>
        <Button variant='outline' color='dark' component={Link} to='/account'>
          My account
        </Button>
        <Button color='red' onClick={() => setPhase(2)}>
          Return Tickets
        </Button>
      </Group>

    </Container>
  );
}

export default ConfirmTicketsCard;
