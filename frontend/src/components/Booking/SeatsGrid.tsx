import { ActionIcon, Container, createStyles } from '@mantine/core';
import { reservationTime } from '../../state/reservationTime';
import { Ticket } from '../../types/ticket';
import './bookingcard.css'

const useStyles = createStyles((theme) => ({
  seatFree: {
    backgroundColor: theme.colors.green[4],
  },

  seatChosen: {
    backgroundColor: theme.colors.red[5],
  },

}));

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
  const { classes } = useStyles();

  return (
    <Container style={tableStyle}>
      {seats.map(seat => {
        const now = Date.now();
        const isFull = (seat.reservedAt && (now - (new Date(seat.reservedAt).getTime())) < reservationTime) || seat.status == "SOLD";
        const isChosen = bookedSeats.includes(seat.id);

        return (
          <ActionIcon
            radius="xs"
            className={isChosen ? classes.seatChosen : classes.seatFree}
            key={seat.id}
            type="button"
            onClick={() => bookSeat(seat.id, seat.price, bookedSeats)}
            disabled={isFull}
          >
            {seat.seat + (seat.row - 1) * columns}
          </ActionIcon >
        );
      })}
    </Container>
  );
}

export default SeatsGrid
