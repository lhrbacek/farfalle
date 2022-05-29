import { Title, Paper, Button, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

function SignedInCard() {

  return (
    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <Title align="center">
        Signed in successfuly!
      </Title>

      <Text color="dimmed" size="sm" align="center" mt="xl">
        Explore our program
      </Text>
      <Button variant='outline' color='dark' fullWidth component={Link} to='/program'>
        Program
      </Button>
    </Paper>
  );
}

export default SignedInCard;
