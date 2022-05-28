import { Button, Group, Title, Text, createStyles, Card } from '@mantine/core';
import { PerformanceProps } from '../types/performance';
import {
  Ticket
} from 'tabler-icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.red[2],
    ':hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.red[1],
    }
  },

  group: {
    alignItems: 'center',
  },

  innerGroup: {
    alignItems: 'baseline',
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

export function LongPerformanceItem({name, date, time, venue, price}: PerformanceProps) {
  const { classes } = useStyles();
  const idPlay = 1; //TODO: id of the performance --> goes to play page
  const idPerformance = 1; //TODO: id of the performance --> goes to booking page

  return (
    <Card shadow="sm" p="lg" className={classes.card}>
      <Group position="apart" className={classes.group}>
        <Group className={classes.innerGroup}>
          <Title order={2} >{name}</Title>
          <Text size="sm">{date}</Text>
          <Text size="sm">{time}</Text>
          <Text size="lg">{venue}</Text>
        </Group>
        <Group spacing={0}>
          <Link to={`${idPlay}`}>
            <Button variant="default" className={classes.buttonAbout}>
              About play
            </Button>
          </Link>

          <Link to={`booking/${idPerformance}`}>
            <Button className={classes.buttonTicket} leftIcon={<Ticket size={16} />}>
              {price}€
            </Button>
          </Link>
        </Group>
      </Group>
    </Card>
  );
}

export default LongPerformanceItem;
