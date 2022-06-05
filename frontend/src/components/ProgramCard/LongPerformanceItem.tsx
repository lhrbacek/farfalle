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

  buttonAbout: {
    borderRadius: 0,
    borderTopLeftRadius: theme.radius.sm,
    borderBottomLeftRadius: theme.radius.sm,
    backgroundColor: 'white'
  },

  buttonTicket: {
    borderRadius: 0,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    backgroundColor: theme.colors.dark[5]
  }
}));

export function LongPerformanceItem(performance: Performance) {
  const { classes } = useStyles();

  return (
    <Card shadow="sm" p="lg" className={classes.card}>
      <Group position="apart">
        <Title order={2} >{performance.play.name}</Title>
        <Group>
          <Text size="sm">{performance.venue.name}</Text>
          <Text size="lg">{format(new Date(performance.dateTime), "dd.MM.yyyy, HH:mm")}</Text>
          <Group spacing={0}>
            <Button variant="default" className={classes.buttonAbout} component={Link} to={`/program/${performance.play.id}`}>
              About play
            </Button>

            <Button className={classes.buttonTicket} leftIcon={<Ticket size={16} />} component={Link} to={`/program/booking/${performance.id}`}>
              Tickets
            </Button>
          </Group>
        </Group>
      </Group>
    </Card>
  );
}

export default LongPerformanceItem;
