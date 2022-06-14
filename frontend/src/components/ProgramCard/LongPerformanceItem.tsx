import { Button, Group, Title, Text, createStyles, Card } from '@mantine/core';
import { Performance } from '../../types/performance';
import {
  Ticket
} from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.red[2],
    ':hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.red[3],
    }
  },

  group: {
    display: 'flex',
    alignItems: 'center',

    [theme.fn.largerThan('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  innerGroup: {
    alignItems: 'baseline',
    display: 'flex',

    [theme.fn.smallerThan('md')]: {
      alignItems: 'center',
    },

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  buttonAbout: {
    borderRadius: 0,
    borderTopLeftRadius: theme.radius.sm,
    borderBottomLeftRadius: theme.radius.sm,
  },

  buttonTicket: {
    borderRadius: 0,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
  }
}));

export function LongPerformanceItem(performance: Performance) {
  const { classes } = useStyles();

  return (
    <Card shadow="sm" p="lg" className={classes.card}>
      <Group className={classes.group}>
        <Title order={2} >{performance.play.name}</Title>
        <Group className={classes.innerGroup}>
          <Text size="sm">{performance.venue.name}</Text>
          <Text size="lg">{format(new Date(performance.dateTime), "dd.MM.yyyy, HH:mm")}</Text>
          <Group spacing={0}>
            <Button variant="default" className={classes.buttonAbout} component={Link} to={`/program/${performance.play.id}`}>
              About play
            </Button>

            <Button variant='filled' color="dark" className={classes.buttonTicket} leftIcon={<Ticket size={16} />} component={Link} to={`/program/booking/${performance.id}`}>
              Tickets
            </Button>
          </Group>
        </Group>
      </Group>
    </Card>
  );
}

export default LongPerformanceItem;
