import { Button, Container, Divider, Stack, Text } from '@mantine/core';
import { Ticket } from '../../types/ticket';
import SeatsGrid from './SeatsGrid';

interface BookingTicketsProps {
  seats: Ticket[];
  bookedSeats: number[];
  bookSeat: Function;
  tableStyle: any;
  confirmSeats: Function;
  totalPrice: number;
}

function BookingTickets({ seats, bookedSeats, bookSeat, tableStyle, confirmSeats, totalPrice }: BookingTicketsProps) {
  return (
    <Stack>
      {/* Display grid with seats, allow booking == adding to bookedSeats array */}
      <Divider size="xl" label="Stage" labelPosition="center" />
      <SeatsGrid values={seats} bookedSeats={bookedSeats} bookSeat={bookSeat} tableStyle={tableStyle} />
      <Container>
        <Text>
          Number of chosen seats: {bookedSeats.length}</Text>
      </Container>
      <Container>
        <Text>Price of chosen seats: {totalPrice} €</Text>
      </Container>
      <Container>
        <Button disabled={bookedSeats.length == 0} color={'dark'} onClick={() => confirmSeats(bookedSeats)} >
          Confirm booking
        </Button>
      </Container>
    </Stack>
  );
}

export default BookingTickets