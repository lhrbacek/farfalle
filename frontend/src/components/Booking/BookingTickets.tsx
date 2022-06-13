import { Button, Center, Container, createStyles, Divider, MediaQuery, ScrollArea, Stack, Text } from '@mantine/core';
import { Ticket } from '../../types/ticket';
import SeatsGrid from './SeatsGrid';

const useStyles = createStyles((theme) => ({
  screenScrolling: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  screenNoScrolling: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  }

}));

interface BookingTicketsProps {
  seats: Ticket[];
  bookedSeats: number[];
  bookSeat: Function;
  tableStyle: any;
  confirmSeats: Function;
  totalPrice: number;
  columns: number;
}

function BookingTickets({ seats, bookedSeats, bookSeat, tableStyle, confirmSeats, totalPrice, columns }: BookingTicketsProps) {
  const { classes } = useStyles();

  return (
    <Stack>
      {/* Display grid with seats, allow booking == adding to bookedSeats array */}
      <Divider size="xl" label="Stage" labelPosition="center" />

      <ScrollArea className={classes.screenScrolling}>
        <SeatsGrid seats={seats} bookedSeats={bookedSeats} bookSeat={bookSeat} tableStyle={tableStyle} columns={columns} />
      </ScrollArea>
      <Center className={classes.screenNoScrolling}>
        <SeatsGrid seats={seats} bookedSeats={bookedSeats} bookSeat={bookSeat} tableStyle={tableStyle} columns={columns} />
      </Center>

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