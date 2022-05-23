import { Button, Container, createStyles, Divider, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import { TicketProps } from '../types/ticket';
import OrderTicketItem from './OrderTicketItem';
import { ChevronRight, Trash, Home } from 'tabler-icons-react';

interface CartCardProps {
  tickets: TicketProps[]
}


const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
}));

export function CartCard({tickets}: CartCardProps) {
  const { classes } = useStyles();
  // will be state that can be changed
  const count = tickets.length;
  const totalPrice = tickets.reduce((sum, current) => sum + current.price, 0);

  return (
    <Container className='wrapper'>
      <Stack spacing="xs">
        {tickets.map((ticket: TicketProps) => <OrderTicketItem {...ticket}/> )}
      </Stack>
      <Divider  my="xl" label="Summary" labelPosition="center" />
      <Group position="apart">
        <Text>Number of seats:</Text>
        <Text>{count}</Text>
      </Group>
      <Group position="apart">
        <Text weight={700}>Total price:</Text>
        <Text weight={700}>{totalPrice}€</Text>
      </Group>
      <Group position="apart">
        <Group>
          <Button  color="gray" rightIcon={<Home size={14} />}>
            Home
          </Button>
          <Button  color="red" rightIcon={<Trash size={14} />}>
            Delete
          </Button>
        </Group>
        <Button rightIcon={<ChevronRight size={14} />}>
          Next
        </Button>
      </Group>
    </Container>
  );
}

export default CartCard;
