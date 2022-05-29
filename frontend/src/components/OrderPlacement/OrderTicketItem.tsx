import { ActionIcon, Button, createStyles, Group, Text } from '@mantine/core';
import React from 'react';
import { TicketProps } from '../types/ticket';
import { CircleMinus } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: theme.spacing.xs,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
      }`,
  },
}));

interface OrderTicketItemProps {
  ticket: TicketProps;
  removable: boolean;
}

export function OrderTicketItem(props: OrderTicketItemProps) {
  const { classes } = useStyles();
  const ticket = props.ticket;

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
          <Text weight={700}>{ticket.name}</Text>
          <Text >{ticket.time}, {ticket.date}</Text>
        </Group>
        <Group>
          <Text color="gray">Row: {ticket.row}</Text>
          <Text color="gray">Seat: {ticket.col}</Text>
        </Group>
        <Group>
          {removeButton(props.removable)}
        </Group>
      </Group>
    </div>
  );
}

export default OrderTicketItem;
