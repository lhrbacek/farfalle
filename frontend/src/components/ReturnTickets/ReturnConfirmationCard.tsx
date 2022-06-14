import { Button, Container, Notification } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Check } from 'tabler-icons-react';

function ReturnTicketsConfirmation() {
  return (
    <Container size={420} my={40}>
      <Notification disallowClose icon={<Check size={18} />} color="teal" title="Success">
        Tickets returned!
      </Notification>


      <Button color='dark' fullWidth component={Link} to='/home'>
        Home
      </Button>
    </Container>
  );
}

export default ReturnTicketsConfirmation;
