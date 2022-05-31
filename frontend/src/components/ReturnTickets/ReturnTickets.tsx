import React, { useState } from 'react';
import { Container, Text } from '@mantine/core';
import ChooseTicketsCard from './ChooseTicketsCard';
import ConfirmTicketsCard from './ConfirmTicketsCard';
import ReturnTicketsConfirmation from './ReturnConfirmationCard';
import { tickets } from '../../data/tickets';

export function ReturnTickets() {
  // TODO: fetch user tickets
  const [phase, setPhase] = useState(0);
  const [ticketsToReturn, setTickets] = useState([]);

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
