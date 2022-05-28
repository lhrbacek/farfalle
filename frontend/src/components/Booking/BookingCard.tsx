import { Container, Grid, Image, AspectRatio, Stack, Title, Text, Group, SimpleGrid, Center, Space, Button, createStyles } from '@mantine/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { performances as data } from '../../data/performances';
import { SeatProps } from '../types/ticket';
import SeatsGrid from './SeatsGrid';

const getBookingPhase = (phase: number, seats: SeatProps[], bookedSeats: number[], bookSeat: Function,
                         tableStyle: any, confirmSeats: Function, price: number, idPlay: number) => {
  if (phase == 0) {
    return(
      <Stack>
        {/* Display grid with seats, allow booking == adding to bookedSeats array */}
        <SeatsGrid values={seats} bookedSeats={bookedSeats} bookSeat={bookSeat} tableStyle={tableStyle}/>
        <Container>
          <Text>Number of chosen seats: {bookedSeats.length}</Text>
        </Container>
        <Container>
          <Text>Price of chosen seats: {bookedSeats.length * price} €</Text>
        </Container>
        <Container>
          <Button color={'dark'} onClick={() => confirmSeats(bookedSeats)} >
              Confirm booking
          </Button>
        </Container>
      </Stack>
    );
  }
  return(
    <Container>
      <Group position="center" mt="xl">
        <Text weight={700}>Tickets booked succesfuly!</Text>
      </Group>
      <Group position="center" mt="xl">
        <Button variant='default' component={Link} to='/program'>
          Program
        </Button>
        <Button variant='light' color="dark" component={Link} to={`/program/${idPlay}`}>
          Back to play
        </Button>
      </Group>
    </Container>
  )
}

export function BookingCard() {

  let initialArray: number[] = [];
  const [bookedSeats, setBookedSeats] = useState(initialArray);
  const [bookingPhase, setBookingPhase] = useState(0);

  const {id, name, venue, date, time, price, columns, seats} = data[0]; // TODO: fetch from backend
  const idPlay = 1; // TODO: should be part of fetched data, hope so

  let tableStyle = { // separate styles for displaying various venue sizes
      display: `grid`,
      alignItems: `stretch`,
      gridTemplateColumns: `repeat(${columns} , 2rem)`,
  };

  /* --- Seat booking --- */
  const bookSeat = (id: number, bookedSeats: number[]) => {
      if (bookedSeats.includes(id)) {
          setBookedSeats(bookedSeats.filter(item => item !== id));
      } else {
          setBookedSeats([...bookedSeats, id]);
      }
  }

  const confirmSeats = (bookedSeats: number[]) => {
      /* Insert seats into database */
      if (bookedSeats.length == 0)
        return;
      // TODO: insert seats into DB and print out error, if occurs => reset array
      setBookedSeats([]);
      setBookingPhase(1);
  }

  return (
      <Container>
          <Title>Booking seats for {name}</Title>
          <Text>Venue: {venue}</Text>
          <Text>Date: {date}</Text>
          <Text>Time: {time}</Text>

          {getBookingPhase(bookingPhase, seats, bookedSeats, bookSeat, tableStyle, confirmSeats, price, idPlay)}
      </Container>
  );
}

export default BookingCard;
