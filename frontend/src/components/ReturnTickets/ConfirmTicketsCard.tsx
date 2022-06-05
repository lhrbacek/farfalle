import React, { useState } from 'react';
import { Button, Center, Container, Group, Pagination, Stack, Title } from '@mantine/core';
import ConfirmTicketItem from './ConfirmTicketItem';
import { Link } from 'react-router-dom';
import { Ticket } from '../../types/ticket';

interface ConfirmTicketsCardProps {
  allTickets: Ticket[],
  chosenTickets: number[],
  setPhase: Function
}

export function ConfirmTicketsCard({ allTickets, chosenTickets, setPhase }: ConfirmTicketsCardProps) {
  const [page, setPage] = useState(1);
  const ticketsPerPage = 5;
  const allChosenTickets = allTickets.filter(({ id }) => (chosenTickets).includes(id));

  const pages = Math.ceil(allChosenTickets.length / ticketsPerPage);
  const indexOfLastTicket = page * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage < 0 ? 0 : indexOfLastTicket - ticketsPerPage;
  const currentTickets = allChosenTickets.slice(indexOfFirstTicket, indexOfLastTicket);

  return (
    <Container>
      <Stack spacing="xs">
        <Title>
          Do you really want to return selected tickets?
        </Title>
        {currentTickets.map((ticket) => <ConfirmTicketItem key={ticket.id} {...ticket} />)}
        <Center>
          <Pagination page={page} onChange={setPage} total={pages} siblings={0} color="dark" />
        </Center>
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
