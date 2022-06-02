import { Title, Paper, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

function AccountCreatedCard() {

  return (
    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <Title align="center">
        Account successfuly created!
      </Title>
      <Button variant='outline' color='dark' fullWidth component={Link} to='/signin'>
        Sign In
      </Button>
    </Paper>
  );
}

export default AccountCreatedCard;
