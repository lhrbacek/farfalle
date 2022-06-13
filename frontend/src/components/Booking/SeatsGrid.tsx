import { Button, Container } from '@mantine/core';
import { reservationTime } from '../../state/reservationTime';
import { Ticket } from '../../types/ticket';
import './bookingcard.css'

interface BookingTicketsProps {
  seats: Ticket[];
  bookedSeats: number[];
  bookSeat: Function;
  tableStyle: any;
  columns: number;
}

/* --- Component for seats --- */
/* @values      data from database
  * @ bookedSeat seats array booked in current session
  * 1. check for current status of the seat - disable if it is already bought 
  * 2. draw button
  *      a. if seat is already booked in current session - unbook the seat and remove from array
  *      b. otherwise book and add to bookedSeats array*/
function SeatsGrid({ seats, bookedSeats, bookSeat, tableStyle, columns }: BookingTicketsProps) {
  return (
    <Container style={tableStyle}>
      {seats.map(seat => {
        const now = Date.now();
        let seatStatus = bookedSeats.includes(seat.id) ? "seat seat__chosen" : "seat seat__free";
        if ((seat.reservedAt && (now - (new Date(seat.reservedAt).getTime())) < reservationTime) || seat.status == "SOLD") { // ticket is reserved no longer than 30 minutes
          seatStatus = "seat seat__full";
        }
        return (
          <Button
            radius="xs"
            className={seatStatus}
            key={seat.id}
            type="button"
            onClick={() => bookSeat(seat.id, seat.price, bookedSeats)}
            disabled={((seat.reservedAt && (now - (new Date(seat.reservedAt).getTime())) < reservationTime) || seat.status == "SOLD")}
          >
            {seat.seat + (seat.row - 1) * columns}
          </Button>
        );
      })}
    </Container>
  );
}

export default SeatsGrid