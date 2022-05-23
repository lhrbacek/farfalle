import { Button, Group, Title, Text, createStyles, Card } from '@mantine/core';
import React from 'react';
import { PerformanceProps } from '../types/performance';
import {
  Ticket
} from 'tabler-icons-react';

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

  button: {
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

export function LongPerformanceItem({name, date, time, venue, price}: PerformanceProps) {
  const { classes } = useStyles();

  return (
    <Card shadow="sm" p="lg" className={classes.card}>
      <Group position="apart" className={classes.group}>
        <Group className={classes.innerGroup}>
          <Title order={1} >{name}</Title>
          <Text size="sm">{date}</Text>
          <Text size="sm">{time}</Text>
          <Text size="lg">{venue}</Text>
        </Group>
        <Group spacing={0}>
          <Button variant="default" className={classes.button}>
            About play
          </Button>
          <Button className={classes.button} leftIcon={<Ticket size={16} />}>
            {price}€
          </Button>
        </Group>
      </Group>
    </Card>
  );
}

export default LongPerformanceItem;
