import { ActionIcon, createStyles, Group, Text } from '@mantine/core';
import React from 'react';
import { Ticket } from '../../types/ticket';
import { CircleMinus } from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartStateSelector } from '../../state/Selector';
import { cartState } from '../../state/Atom';
import { format } from 'date-fns';

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
  const cart = useRecoilValue(cartStateSelector);
  const setCartState = useSetRecoilState(cartState);
  const { classes } = useStyles();

  const removeButton = (removable: boolean) => {
    if (removable == true) {
      return (
        <ActionIcon variant="hover" onClick={() => setCartState(cart.filter(item => item.id !== ticket.id))}>
          <CircleMinus color="red" />
        </ActionIcon >
      );
    }
  }

  return (
    <div className={classes.wrapper}>
      <Group position="apart">
        <Group>
          <Text weight={700} component={Link} to={`/program/${ticket.performance.play.id}`}>{ticket.performance.play.name}</Text>
        </Group>
        <Group>
          <Text>{ticket.id}</Text>
          <Text >{format(new Date(ticket.performance.dateTime), "dd.MM.yyyy, HH:mm")}</Text>
          <Text color="gray">Row: {ticket.row}</Text>
          <Text color="gray">Seat: {ticket.seat}</Text>
          {removeButton(removable)}
        </Group>
      </Group>
    </div>
  );
}

export default OrderTicketItem;
