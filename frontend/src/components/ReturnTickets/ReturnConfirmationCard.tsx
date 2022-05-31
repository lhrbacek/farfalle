import { Button, Container } from '@mantine/core';
import { Link } from 'react-router-dom';
import SuccessNotification from '../Notification/SuccessNotification';

function ReturnTicketsConfirmation() {
  return (
    <Container size={420} my={40}>
      <SuccessNotification {... "Tickets returned!"} />

      <Button color='dark' fullWidth component={Link} to='/home'>
        Home
      </Button>
    </Container>
  );
}

export default ReturnTicketsConfirmation;
