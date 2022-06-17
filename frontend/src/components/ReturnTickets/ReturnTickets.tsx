import React, { useState } from 'react';
import { Container } from '@mantine/core';
import ChooseTicketsCard from './ChooseTicketsCard';
import ConfirmTicketsCard from './ConfirmTicketsCard';
import ReturnTicketsConfirmation from './ReturnConfirmationCard';
// import { tickets } from '../../data/tickets';
import { userIdState } from '../../state/UserIdState';
import { useRecoilValue } from 'recoil';
import LoadError from '../Error/LoadError';
import LoadingCard from '../Loading/LoadingCard';
import useSWR from 'swr';
import { UserProfile } from '../../types/user';

export interface TicketProps {
  id: number,
  price: number;
  row: number;
  seat: number;
  performance: {
    dateTime: Date;
    play: {
      name: string;
    };
  };
}

export function ReturnTickets() {
  // TODO: fetch user tickets
  const userId = useRecoilValue(userIdState);
  const [phase, setPhase] = useState(0);
  const [ticketsToReturn, setTickets] = useState([]);

  const { data, error } = useSWR(`user/${userId}`);
  if (error) return <LoadError />;
  if (!data) return <LoadingCard />;
  // console.log(data); // print acquired data
  const user: UserProfile = data;

  const tickets: TicketProps[] = [];
  user.orders.map((order) => order.tickets.map((ticket) => tickets.push(ticket)));



  const returnPhase = (phase: number) => {
    switch (phase) {
      case 0:
        return (
          <ChooseTicketsCard allTickets={tickets} ticketsToReturn={ticketsToReturn} setTickets={setTickets} setPhase={setPhase} />
        );
      case 1:
        return (
          <ConfirmTicketsCard allTickets={tickets} chosenTickets={ticketsToReturn} setPhase={setPhase} />
        );
      case 2:
        return (
          <ReturnTicketsConfirmation />
        )
    }
  }

  return (
    <Container>
      {returnPhase(phase)}
    </Container>
  );
}

export default ReturnTickets;
