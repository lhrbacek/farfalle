import { ActionIcon, Button, createStyles, Group, Text } from '@mantine/core';
import React from 'react';
import { Ticket } from '../../types/ticket';
import { CircleMinus } from 'tabler-icons-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: theme.spacing.xs,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]}`,
    ':hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
    }
  },
}));

interface OrderTicketItemProps {
  ticket: Ticket;
  removable: boolean;
}

export function OrderTicketItem({ ticket, removable }: OrderTicketItemProps) {
  const { classes } = useStyles();

  const removeButton = (removable: boolean) => {
    if (removable == true) {
      return (
        <ActionIcon variant="hover"><CircleMinus size="md" color="red" /></ActionIcon>
      );
    }
    return (<></>);
  }

  return (
    <div className={classes.wrapper}>
      <Group position="apart">
        <Group>
          <Text weight={700} component={Link} to={`/program/${ticket.performance.play.id}`}>{ticket.performance.play.name}</Text>
        </Group>
        <Group>
          <Text >{format(ticket.performance.dateTime, "dd.MM.yyyy, HH:mm")}</Text>
          <Text color="gray">Row: {ticket.row}</Text>
          <Text color="gray">Seat: {ticket.seat}</Text>
          {removeButton(removable)}
        </Group>
      </Group>
    </div>
  );
}

export default OrderTicketItem;
