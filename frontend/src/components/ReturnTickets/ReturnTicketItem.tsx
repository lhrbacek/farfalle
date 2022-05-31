import { Checkbox, createStyles, Group, Text } from '@mantine/core';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ticket } from '../../types/ticket';

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
      <Group position="apart">
        <Group>
          <Text weight={700} component={Link} to={`/program/${ticket.performance.play.id}`}>{ticket.performance.play.name}</Text>
        </Group>
        <Group>
          <Text>{format(ticket.performance.dateTime, "dd.MM.yyyy, HH:mm")}</Text>
          <Text color="gray">Row: {ticket.row}</Text>
          <Text color="gray">Seat: {ticket.seat}</Text>

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
