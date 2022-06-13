import { Group, Text, createStyles } from '@mantine/core';
import { format } from 'date-fns';
import React from 'react';
import { Ticket } from '../../types/ticket';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: theme.spacing.xs,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
      }`,
  },
}));

export function PurchasedTicket(ticket: Ticket) {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Group position="apart">
        <Group>
          <Text weight={700}>{ticket.performance.play.name}</Text>
          <Text >{format(new Date(ticket.performance.dateTime), "dd.MM.yyyy, HH:mm")}</Text>
        </Group>
        <Group>
          <Text color="gray">Row: {ticket.row}</Text>
          <Text color="gray">Seat: {ticket.seat}</Text>
        </Group>
      </Group>
    </div>
  );
}

export default PurchasedTicket;
