import { Container, Stack, Text, Button, Card, Paper, Title, Divider, Group } from '@mantine/core';
import PurchasedTicket from './PurchasedTicket';
import { user } from '../../data/user'
import { Link } from 'react-router-dom';
import { Database, Pencil, Ticket, Trash } from 'tabler-icons-react';
import { useEffect } from 'react';
import LoadError from '../Error/LoadError';
import LoadingCard from '../Loading/LoadingCard';
import useSWR from 'swr';

function Profile() {
  useEffect(() => {
    document.title = "Farfalle | Account"
  }, [])

  // FETCH, send GET Request on API_URL/user/5 (base url can be found in src/models/fetcher)
  const { data, error } = useSWR(`user/5`);
  if (error) return <LoadError />;
  if (!data) return <LoadingCard />;
  console.log(data); // print acquired data, thats all

  return (
    <Container>
      <Group position={'center'} align={'start'}>
        <Paper withBorder shadow="md" p={30} radius="md">
          <Stack>
            <Title>{user.name} {user.surname}</Title>
            <Text size="md">Email: {user.email}</Text>
            <Text size="md">Address: {user.address}</Text>
            <Divider />
            <div hidden={!user.admin}>
              <Button color="gray" fullWidth rightIcon={<Database size={14} />} component={Link} to='admin'>
                Admin page
              </Button>
            </div>
            <Button color="gray" fullWidth rightIcon={<Pencil size={14} />} component={Link} to='edit'>
              Edit account
            </Button>
            <Button variant='outline' fullWidth color="red" rightIcon={<Trash size={14} />} component={Link} to='delete'>
              Delete account
            </Button>
          </Stack>
        </Paper>
        <Stack justify="space-between">
          <Stack justify="space-between">
            {user.orders.map((ticket) => <PurchasedTicket key={ticket.id} {...ticket} />)}
          </Stack>
          <Card.Section>
            <Button color="dark" rightIcon={<Ticket size={14} />} component={Link} to='tickets'>
              Manage tickets
            </Button>
          </Card.Section>
        </Stack>
      </Group>
    </Container>
  );
}

export default Profile;
