import { ActionIcon, Button, createStyles, Group, Text } from '@mantine/core';
import React from 'react';
import { TicketProps } from '../types/ticket';
import { CircleMinus } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: theme.spacing.xs,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,
  },
}));

export function OrderTicketItem(ticket: TicketProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Group position="apart">
        <Group>
          <Text weight={700}>{ticket.name}</Text>
          <Text >{ticket.time}, {ticket.date}</Text>
        </Group>
        <Group>
          <Text color="gray">Row: {ticket.row}</Text>
          <Text color="gray">Seat: {ticket.col}</Text>
        </Group>
        <Group>
          <ActionIcon variant="hover"><CircleMinus size="md" color="red" /></ActionIcon>
        </Group>
      </Group>
    </div>
  );
}

export default OrderTicketItem;