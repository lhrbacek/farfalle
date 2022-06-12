import { Container, Stack, Text, Button, Card, Paper, Title, Divider, Group, createStyles } from '@mantine/core';
import PurchasedTicket from './PurchasedTicket';
import { user } from '../../data/user'
import { Link } from 'react-router-dom';
import { Database, Pencil, Ticket, Trash } from 'tabler-icons-react';
import { useEffect } from 'react';
import LoadError from '../Error/LoadError';
import LoadingCard from '../Loading/LoadingCard';
import useSWR from 'swr';

// TODO: Make better user type

const useStyles = createStyles((theme) => ({

  group: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  innerGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
}));

function Profile() {
  const { classes } = useStyles();
  useEffect(() => {
    document.title = "Farfalle | Account"
  }, [])

  let userId = localStorage.getItem("userId");
  if (userId === null) return <LoadError /> // no user logged

  const { data, error } = useSWR(`user/${userId}`);
  if (error) return <LoadError />;
  if (!data) return <LoadingCard />;
  console.log(data); // print acquired data

  let isAdmin = false;
  if (data?.role == "ADMIN") {
    isAdmin = true;
  }

  return (
    <Container>
      <Group className={classes.group}>
        <Paper withBorder shadow="md" p={30} radius="md">
          <Stack>
            <Title>{data?.name} {data?.surname}</Title>
            <Text size="md">Email: {data?.email}</Text>
            <Text size="md">Address: TODO</Text>
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
        <Stack className={classes.innerGroup}>
          <Stack>
            {/* {user.orders.map((ticket) => <PurchasedTicket key={ticket.id} {...ticket} />)} */}
            TODO
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
