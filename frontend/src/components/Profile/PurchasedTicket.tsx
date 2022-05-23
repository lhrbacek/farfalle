import { Card, Group, Text, createStyles } from '@mantine/core';
import React from 'react';
import { Ticket } from 'tabler-icons-react';

export interface PurchasedTicketProps {
    play: string,
    date: string,
    time: string,
    venue: string,
    row: number,
    seat: number,
}

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.red[2],
    ':hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.red[1],
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

export function PurchasedTicket({play, date, time, venue}: PurchasedTicketProps) {
  const { classes } = useStyles();

  return (
    <Card shadow="sm" p="sm" className={classes.card}>
      <Group position="apart" className={classes.group}>
        <Group className={classes.innerGroup}>
        <Text size="lg">{play}</Text>
          <Text size="md">{date}</Text>
          <Text size="md">{time}</Text>
          <Text size="sm">{venue}</Text>
        </Group>
      </Group>
    </Card>
  );
}

export default PurchasedTicket;
