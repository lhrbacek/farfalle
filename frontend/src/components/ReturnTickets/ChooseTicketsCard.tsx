import { Button, Center, Container, createStyles, Group, Pagination, Stack } from '@mantine/core';
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
  const [page, setPage] = useState(1);
  const ticketsPerPage = 5;

  // TODO: Get bought tickets by user that are in the future

  const pages = Math.ceil(allTickets.length / ticketsPerPage);
  const indexOfLastTicket = page * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage < 0 ? 0 : indexOfLastTicket - ticketsPerPage;
  const currentTickets = allTickets.slice(indexOfFirstTicket, indexOfLastTicket);

  const submitChosenTickets = () => {
    console.log(ticketsToReturn);
    setPhase(1);
  }

  return (
    <Container>
      <Stack spacing="xs">
        {currentTickets.map((ticket) => <ReturnTicketItem key={ticket.id} ticket={ticket} checkedTickets={ticketsToReturn} setTickets={setTickets} />)}
        <Center>
          <Pagination page={page} onChange={setPage} total={pages} siblings={0} color="dark" />
        </Center>
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
