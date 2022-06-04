import { Button, Container } from '@mantine/core';
import { TicketBooking } from '../../types/ticket';
import './bookingcard.css'

/* --- Component for seats --- */
/* @values      data from database
  * @ bookedSeat seats array booked in current session
  * 1. check for current status of the seat - disable if it is already bought 
  * 2. draw button
  *      a. if seat is already booked in current session - unbook the seat and remove from array
  *      b. otherwise book and add to bookedSeats array*/
function SeatsGrid(props: { values: TicketBooking[], bookedSeats: number[], bookSeat: Function, tableStyle: any }) {
  return (
    <Container style={props.tableStyle}>
      {props.values.map(seat => {
        let seatStatus = props.bookedSeats.includes(seat.id) ? "seat seat__chosen" : "seat seat__free";
        if ((seat.reservedAt && (Date.now() - (new Date(seat.reservedAt).getTime())) < 1800000) || seat.status == "SOLD") { // ticket is reserved no longer than 30 minutes
          seatStatus = "seat seat__full";
        }
        return (
          <Button
            radius="xs"
            className={seatStatus}
            key={seat.id}
            type="button"
            onClick={() => props.bookSeat(seat.id, seat.price, props.bookedSeats)}
            disabled={((seat.reservedAt && (Date.now() - (new Date(seat.reservedAt).getTime())) < 1800000) || seat.status == "SOLD")}
          >
            {seat.price}€
          </Button>
        );
      })}
    </Container>
  );
}

export default SeatsGrid