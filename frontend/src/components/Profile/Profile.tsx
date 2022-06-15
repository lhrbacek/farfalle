import { Container, Stack, Text, Button, Card, Paper, Title, Divider, Group, createStyles, Center, Pagination } from '@mantine/core';
import PurchasedTicket from './PurchasedTicket';
import { Link } from 'react-router-dom';
import { Database, Pencil, Ticket, Trash } from 'tabler-icons-react';
import { useEffect, useState } from 'react';
import LoadError from '../Error/LoadError';
import LoadingCard from '../Loading/LoadingCard';
import useSWR from 'swr';
import { useRecoilValue } from 'recoil';
import { userIdState } from '../../state/UserIdState';
import { UserProfile } from '../../types/user'

// TODO: Make better user type

const useStyles = createStyles((theme) => ({

  group: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },

  stack: {
    margin: '50',
  }

}));

interface TicketProps {
  id: number,
  price: number;
  row: number;
  seat: number;
  performance: {
    dateTime: Date;
    play: {
      name: string;
    };
  };
}

function Profile() {
  const userId = useRecoilValue(userIdState);
  const { classes } = useStyles();
  const [page, setPage] = useState(1);
  const performancePerPage = 5;

  useEffect(() => {
    document.title = "Farfalle | Account"
  }, [])

  if (userId === null) return <LoadError /> // no user logged

  const { data, error } = useSWR(`user/${userId}`);
  if (error) return <LoadError />;
  if (!data) return <LoadingCard />;
  console.log(data); // print acquired data
  const user: UserProfile = data;

  let isAdmin = false;
  if (user?.role == "ADMIN") {
    isAdmin = true;
  }

  //pagination
  const tickets: TicketProps[] = [];
  user.orders.map((order) => order.tickets.map((ticket) => tickets.push(ticket)));
  const pages = Math.ceil(tickets.length / performancePerPage);
  const indexOfLastPlay = page * performancePerPage;
  const indexOfFirstPlay = indexOfLastPlay - performancePerPage < 0 ? 0 : indexOfLastPlay - performancePerPage;
  const currentTickets = tickets.slice(indexOfFirstPlay, indexOfLastPlay);

  return (
    <Container>
      <Paper withBorder shadow="md" p={30} radius="md">
        <Group className={classes.group}>
          <Stack>
            <Title>{user.name} {user.surname}</Title>
            <Text size="md">Email: {user.email}</Text>
            <Text size="md">Address: {user.address.city}, {user.address.street}, {user.address.number}, {user.address.zip}</Text>
          </Stack>
          <Stack>
            <div hidden={!isAdmin}>
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
            <Button color="dark" rightIcon={<Ticket size={14} />} component={Link} to='tickets'>
              Manage tickets
            </Button>
          </Stack>
        </Group>
      </Paper>

      <Stack spacing="xs" className={classes.stack}>
        {currentTickets.map((ticket) => <PurchasedTicket key={ticket.id} {...ticket} />)}
      </Stack>
      <Center>
        <Pagination page={page} onChange={setPage} total={pages} siblings={0} color="dark" />
      </Center>

    </Container >
  );
}

export default Profile;
