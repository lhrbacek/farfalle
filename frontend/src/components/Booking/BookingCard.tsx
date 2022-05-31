import { Container, Stack, Title, Text, Group, Button, Divider } from '@mantine/core';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { performancesBooking } from '../../data/performances';
import { TicketBooking } from '../../types/ticket';
import SeatsGrid from './SeatsGrid';


const getBookingPhase = (phase: number, seats: TicketBooking[], bookedSeats: number[], bookSeat: Function,
  tableStyle: any, confirmSeats: Function, idPlay: number, price: number) => {
  if (phase == 0) {
    return (
      <Stack>
        {/* Display grid with seats, allow booking == adding to bookedSeats array */}
        <Divider size="xl" label="Stage" labelPosition="center" />
        <SeatsGrid values={seats} bookedSeats={bookedSeats} bookSeat={bookSeat} tableStyle={tableStyle} />
        <Container>
          <Text>Number of chosen seats: {bookedSeats.length}</Text>
        </Container>
        <Container>
          <Text>Price of chosen seats: {price} €</Text>
        </Container>
        <Container>
          <Button color={'dark'} onClick={() => confirmSeats(bookedSeats)} >
            Confirm booking
          </Button>
        </Container>
      </Stack>
    );
  }
  return (
    <Container>
      <Group position="center" mt="xl">
        <Text weight={700}>Tickets booked succesfuly!</Text>
      </Group>
      <Group position="center" mt="xl">
        <Button variant='default' component={Link} to='/program'>
          Program
        </Button>
        <Button variant='light' color="dark" component={Link} to={`/cart`}>
          Cart
        </Button>
      </Group>
    </Container>
  )
}

export function BookingCard() {
  let initialArray: number[] = [];
  const [bookedSeats, setBookedSeats] = useState(initialArray);
  const [price, setPrice] = useState(0);
  const [bookingPhase, setBookingPhase] = useState(0);
  const { id } = useParams();

  const performance = performancesBooking.find((value) => value.id.toString() == id); // TODO: fetch from backend

  let tableStyle = { // separate styles for displaying various venue sizes
    display: `grid`,
    alignItems: `stretch`,
    gridTemplateColumns: `repeat(${performance?.venue.cols} , 2rem)`,
  };

  const bookSeat = (id: number, seatPrice: number) => {
    if (bookedSeats.includes(id)) {
      setPrice(price - seatPrice);
      setBookedSeats(bookedSeats.filter(item => item !== id));
    } else {
      setPrice(price + seatPrice);
      setBookedSeats([...bookedSeats, id]);
    }
  }

  const confirmSeats = (bookedSeats: number[]) => {
    /* Insert seats into database */
    if (bookedSeats.length == 0) {
      console.log(bookedSeats.length);
      return;
    }
    // TODO: insert seats into DB and print out error, if occurs => reset array
    // bookedSeats.map((id) => setCart((tickets) => [...tickets, id]))
    setBookedSeats([]);
    setBookingPhase(1);
    console.log(bookedSeats)
  }

  return (
    <Container>
      <Title>Booking seats for {performance?.play.name}</Title>
      <Text>Venue: {performance?.venue.name}</Text>
      <Text>Date: {performance?.dateTime.toString()}</Text>
      {/* TODO: get rid of undefined condiitions */}
      {getBookingPhase(bookingPhase, performance == undefined ? [] : performance.tickets, bookedSeats, bookSeat, tableStyle, confirmSeats, performance == undefined ? 1 : performance.play.id, price)}
    </Container>
  );
}

export default BookingCard;
