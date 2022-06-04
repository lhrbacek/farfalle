import { Card, Group, Button, Text, createStyles } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { PerformanceShort } from '../../types/play';
import { format } from 'date-fns'
import { Ticket } from 'tabler-icons-react';


const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.red[2],
    ':hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.red[3],
    },
  },

  group: {
    alignItems: 'center',
  },

  innerGroup: {
    alignItems: 'baseline',
  },

  button: {
    margin: 0,
    borderRadius: 0,

    '&:not(:first-of-type)': {
      borderLeftWidth: 0,
    },

    '&:first-of-type': {
      borderTopLeftRadius: theme.radius.sm,
      borderBottomLeftRadius: theme.radius.sm,
    },

    '&:last-of-type': {
      borderTopRightRadius: theme.radius.sm,
      borderBottomRightRadius: theme.radius.sm,
      backgroundColor: theme.colors.dark[5]
    },
  },
}));

export function PerformanceItem(performance: PerformanceShort) {
  const { classes } = useStyles();

  return (
    <Card shadow="sm" p="sm" className={classes.card}>
      <Group position="apart" className={classes.group}>
        <Group className={classes.innerGroup}>
          <Text size="lg">{format(new Date(performance.dateTime), "dd.MM.yyyy, HH:mm")}</Text>
          <Text size="md">{performance.venue.name}</Text>
        </Group>
        <Button className={classes.button} leftIcon={<Ticket size={16} />} component={Link} to={`/program/booking/${performance.id}`}>
          Tickets
        </Button>
      </Group>
    </Card>
  );
}

export default PerformanceItem;
