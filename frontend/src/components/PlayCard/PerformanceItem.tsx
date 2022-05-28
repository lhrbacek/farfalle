import { Card, Group, Button, Text, createStyles } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Ticket } from 'tabler-icons-react';

export interface PerformanceItemProps {
    date: string,
    time: string,
    venue: string,
    price: number
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

export function PerformanceItem({date, time, venue, price}: PerformanceItemProps) {
  const { classes } = useStyles();
  const idPerformance = 1;

  return (
    <Card shadow="sm" p="sm" className={classes.card}>
      <Group position="apart" className={classes.group}>
        <Group className={classes.innerGroup}>
          <Text size="lg">{date}</Text>
          <Text size="lg">{time}</Text>
          <Text size="sm">{venue}</Text>
        </Group>
        <Link to={`/program/booking/${idPerformance}`}>
          <Button className={classes.button} leftIcon={<Ticket size={16} />}>
            {price}€
          </Button>
        </Link>
      </Group>
    </Card>
  );
}

export default PerformanceItem;
