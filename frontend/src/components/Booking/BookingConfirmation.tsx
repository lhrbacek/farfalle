import { Button, Container, Group, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

function BookingConfirmation() {
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
  );
}

export default BookingConfirmation