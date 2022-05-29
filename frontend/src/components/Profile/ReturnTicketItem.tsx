import { Checkbox, Button, createStyles, Group, Text } from '@mantine/core';
import React, { useState } from 'react';
import { TicketProps } from '../types/ticket';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: theme.spacing.xs,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
      }`,
  },
}));

interface ReturnTicketItemProps {
  ticket: TicketProps;
  checkedTickets: number[];
  setTickets: Function;
}

export function ReturnTicketItem(props: ReturnTicketItemProps) {
  const [checked, setChecked] = useState(true);
  const { classes } = useStyles();
  const ticket = props.ticket;

  const addTicket = (checked: boolean, checkedTickets: number[], setTickets: Function) => {
    if (checked && !checkedTickets.includes(props.ticket.id)) {
      setTickets([...checkedTickets, props.ticket.id]);
    } else {
      setTickets(checkedTickets.filter(item => item != props.ticket.id));
    }

    console.log(checkedTickets);
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
        <Checkbox onChange={() => {
          setChecked(!checked)
          if (checked === true) {
            props.setTickets([...props.checkedTickets, props.ticket.id]);
          } else {
            props.setTickets(props.checkedTickets.filter(item => item != props.ticket.id));
          }
          console.log({ tickets: props.checkedTickets, checked: checked });
        }
        }
        />
      </Group>
    </div>
  );
}

export default ReturnTicketItem;
