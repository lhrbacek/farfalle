import { Container, Paper, Text, Notification, Button } from '@mantine/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Trash } from 'tabler-icons-react';

function DeleteAccount() {
  const [phase, setPhase] = useState(0);

  const SignInPhase = (phase: number) => {
    if (phase == 0) {
      return (
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Text size='md' align="center" mt="xl" p={10}>
            Do you really want to delete your account?
          </Text>
          <Text color="dimmed" size="sm" align="center" p={10}>
            You will not be able to manage your bought tickets.
          </Text>

          <Button color='dark' fullWidth component={Link} to='/account'>
            Back to my account
          </Button>
          <Button variant='outline' fullWidth color="red" rightIcon={<Trash size={14} />} onClick={() => setPhase(1)}>
            Delete account
          </Button>
        </Paper>
      );
    }
    return (
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Notification disallowClose icon={<Check size={18} />} color="teal" title="Success">
          Account deleted!
        </Notification>


        <Button color='dark' fullWidth component={Link} to='/home'>
          Home
        </Button>
      </Paper>
    );
  }

  return (
    <Container size={420} my={40}>
      {SignInPhase(phase)}
    </Container>
  );
}

export default DeleteAccount;
