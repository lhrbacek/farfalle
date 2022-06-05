import { Container, Stack, Title, Text, Group, Button, Divider } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import useSWR from 'swr';
import { cartState } from '../../state/Atom';
import { cartStateSelector } from '../../state/Selector';
import { PerformanceBooking } from '../../types/performance';
import { Ticket } from '../../types/ticket';
import LoadingCard from '../Loading/LoadingCard';
import SeatsGrid from './SeatsGrid';


const getBookingPhase = (phase: number, seats: Ticket[], bookedSeats: number[], bookSeat: Function,
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
          <Button disabled={bookedSeats.length == 0} color={'dark'} onClick={() => confirmSeats(bookedSeats)} >
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
  const cart = useRecoilValue(cartStateSelector);
  const setCartState = useSetRecoilState(cartState);
  const { id } = useParams();

  useEffect(() => {
    document.title = "Farfalle | Booking"
  }, [])

  const bookSeat = (id: number, seatPrice: number) => {
    if (bookedSeats.includes(id)) {
      setPrice(price - seatPrice);
      setBookedSeats(bookedSeats.filter(item => item !== id));
    } else {
      setPrice(price + seatPrice);
      setBookedSeats([...bookedSeats, id]);
    }
  }

  const confirmSeats = async (bookedSeats: number[]) => {
    /* Insert seats into database */
    if (bookedSeats.length == 0) {
      console.log(bookedSeats.length);
      return;
    }

    // TODO: insert seats into DB and print out error, if occurs => reset array bookedSeats
    // from all tickets leave only confirmed ones
    const confirmedTickets: Ticket[] = performance.tickets.filter(({ id }) => bookedSeats.includes(id));
    // const confirmedTickets = tickets.map(obj => ({ ...obj })).filter(({ id }) => bookedSeats.includes(id));
    const reservedAt = new Date();
    // update reservedAt attribute in DB at each confirmed ticket
    for (let i = 0; i < confirmedTickets.length; i++) {
      await fetch(`http://localhost:4000/tickets/${confirmedTickets[i].id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({
          reservedAt: reservedAt,
        }),
      }).then((response) => { if (!(response.ok)) { console.log("ERROR") } }); // TODO: Better handling of error
    }
    // update reservedAt attribute at each confirmed ticket
    confirmedTickets.map((ticket) => ticket.reservedAt = reservedAt);

    // add booked tickets to cart
    setCartState((tickets) => [...tickets, ...confirmedTickets]);
    console.log({ seats: bookedSeats });
    setBookedSeats([]);
    setBookingPhase(1);
    console.log(cart);
  }

  // GET all info about all tickets of this performance
  const { data, error } = useSWR(`performance/${id}`);
  if (error) return <div>failed to load</div>;
  if (!data) return <LoadingCard />;
  const performance: PerformanceBooking = data;

  let tableStyle = { // separate styles for displaying various venue sizes
    display: `grid`,
    alignItems: `stretch`,
    gridTemplateColumns: `repeat(${performance?.venue.cols} , 2rem)`,
  };

  return (
    <Container>
      <Title>Booking seats for {performance?.play.name}</Title>
      <Text>Venue: {performance?.venue.name}</Text>
      <Text>Date: {performance?.dateTime.toString()}</Text>
      {getBookingPhase(bookingPhase, performance.tickets, bookedSeats, bookSeat, tableStyle, confirmSeats, performance.play.id, price)}
    </Container>
  );
}

export default BookingCard;