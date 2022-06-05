import { ActionIcon, createStyles, Group, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { Ticket } from '../../types/ticket';
import { CircleMinus } from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartStateSelector } from '../../state/Selector';
import { cartState } from '../../state/Atom';
import { format } from 'date-fns';
import { reservationTime } from '../../state/reservationTime';

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
  const [time, setTime] = useState(0);
  const cart = useRecoilValue(cartStateSelector);
  const setCartState = useSetRecoilState(cartState);
  const { classes } = useStyles();

  const reservationDate: Date = ticket.reservedAt == undefined ? new Date() : new Date(ticket.reservedAt);
  var newDateObj = new Date(reservationDate.getTime() + reservationTime);

  useEffect(() => {
    const timer = setInterval(() => {
      const time = (newDateObj.getTime() - new Date().getTime());
      setTime(time < 0 ? 0 : time);
      if (time === 0) {
        const now = new Date();
        setCartState(cart.filter((item) => (item.reservedAt == undefined ? false : (now.getTime() - (new Date(item.reservedAt)).getTime()) < reservationTime)));
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getTimeStamp = () => {
    // print count down for reservation time
    let secondsCount = (time / 1000) % 60;
    secondsCount = secondsCount == 60 ? 0 : secondsCount;
    return Math.floor(time / (1000 * 60)).toFixed(0) + ":" + (secondsCount > 9 ? secondsCount.toFixed(0) : "0" + secondsCount.toFixed(0));
  }

  const unreserveTicket = (ticket: Ticket) => {
    //TODO: unreserve ticket in DB
    const newCart = cart.filter((cartTicket) => cartTicket.id != ticket.id);
    setCartState(newCart);
  }

  const removeButton = (removable: boolean) => {
    if (removable == true) {
      return (
        <ActionIcon variant="hover" onClick={() => unreserveTicket(ticket)}>
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
          <Text>{getTimeStamp()}</Text>
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
