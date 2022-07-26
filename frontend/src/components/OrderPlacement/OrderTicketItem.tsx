import { ActionIcon, createStyles, Group, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { Ticket } from '../../types/ticket';
import { CircleMinus } from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { cartStateSelector } from '../../state/CartStateSelector';
import { cartState } from '../../state/CartState';
import { format } from 'date-fns';
import { filterCart, reservationTime } from '../../state/reservationTime';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: theme.spacing.xs,
    borderRadius: theme.radius.md,
    backgroundColor: theme.white,
    border: `1px solid ${theme.colors.gray[3]}`,
    ':hover': {
      backgroundColor: theme.colors.gray[1],
    }
  },

  group: {
    display: 'flex',
    alignItems: 'center',

    [theme.fn.largerThan('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
  },

  innerGroup: {
    alignItems: 'center',
    display: 'flex',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },
}));

interface OrderTicketItemProps {
  ticket: Ticket;
  removable: boolean;
}

export function OrderTicketItem({ ticket, removable }: OrderTicketItemProps) {
  const [time, setTime] = useState(0);
  const [cart, setCartState] = useRecoilState(cartState);
  const { classes } = useStyles();

  const reservationDate: Date = ticket.reservedAt == undefined ? new Date() : new Date(ticket.reservedAt);
  let newDateObj = new Date(reservationDate.getTime() + reservationTime);

  useEffect(() => {
    const timer = setInterval(() => {
      const time = (newDateObj.getTime() - new Date().getTime());
      setTime(time < 0 ? 0 : time);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCartState(filterCart(cart));
    }, 5000);

    return () => {
      clearInterval(timer);
    };

  });

  const getTimeStamp = () => {
    // print count down for reservation time
    let secondsCount = (time / 1000) % 60;
    secondsCount = secondsCount == 60 ? 0 : secondsCount;
    return Math.floor(time / (1000 * 60)).toFixed(0) + ":" + (secondsCount > 9 ? secondsCount.toFixed(0) : "0" + secondsCount.toFixed(0));
  }

  const unreserveTicket = async (ticket: Ticket) => {

    await fetch(`http://localhost:4000/tickets/${ticket.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({
        // unreserve ticket also in DB
        reservedAt: new Date(new Date().getTime() - reservationTime),
      }),
    }).then((response) => {
      if (!(response.ok)) {
        return;
      }
    });
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
      <Group className={classes.group}>
        <Group>
          <Text weight={700} component={Link} to={`/program/booking/${ticket.performance.id}`}>{ticket.performance.play.name}</Text>
        </Group>
        <Group className={classes.innerGroup}>
          <Text>{getTimeStamp()}</Text>
          <Text >{format(new Date(ticket.performance.dateTime), "dd.MM.yyyy, HH:mm")}</Text>
          <Group>
            <Text>Row: {ticket.row}</Text>
            <Text>Seat: {ticket.seat}</Text>
          </Group>
          {removeButton(removable)}
        </Group>
      </Group>
    </div>
  );
}

export default OrderTicketItem;
