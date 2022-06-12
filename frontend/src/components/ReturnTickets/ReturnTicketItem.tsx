import { Checkbox, createStyles, Group, Text } from '@mantine/core';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ticket } from '../../types/ticket';

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
    justifyContent: 'space-between',

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
  }
}));

interface ReturnTicketItemProps {
  ticket: Ticket;
  checkedTickets: number[];
  setTickets: Function;
}

export function ReturnTicketItem({ ticket, checkedTickets, setTickets }: ReturnTicketItemProps) {
  const [checked, setChecked] = useState(true);
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Group className={classes.group}>
        <Group>
          <Text weight={700} component={Link} to={`/program/${ticket.performance.play.id}`}>{ticket.performance.play.name}</Text>
        </Group>
        <Group className={classes.innerGroup}>
          <Text>{format(new Date(ticket.performance.dateTime), "dd.MM.yyyy, HH:mm")}</Text>
          <Group>
            <Text color="gray">Row: {ticket.row}</Text>
            <Text color="gray">Seat: {ticket.seat}</Text>
          </Group>

          <Checkbox
            color="red"
            onClick={() => {
              setChecked(!checked)
              if (checked === true) {
                setTickets([...checkedTickets, ticket.id]);
              } else {
                setTickets(checkedTickets.filter(item => item != ticket.id));
              }
              console.log({ tickets: checkedTickets, checked: checked });
            }
            }
          />
        </Group>
      </Group>
    </div>
  );
}

export default ReturnTicketItem;
