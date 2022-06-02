import { Button, Container, Divider, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import OrderTicketItem from './OrderTicketItem';
import { Trash } from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import { tickets as ticketsData } from '../../data/tickets';
import { StepProps } from './OrderPlacement';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartState } from '../../state/Atom';
import { cartStateSelector } from '../../state/Selector';

export function CartCard(props: StepProps) {
  const cart = useRecoilValue(cartStateSelector);
  const setCartState = useSetRecoilState(cartState);
  const count = cart.length;
  const totalPrice = cart.reduce((sum: number, current: any) => sum + current.price, 0);

  return (
    <Container>
      <Stack spacing="xs">
        {cart.map((ticket) => <OrderTicketItem key={ticket.id} ticket={ticket} removable={true} />)}
      </Stack>
      <Divider my="xl" label="Summary" labelPosition="center" />
      <Group position="apart">
        <Text>Number of seats:</Text>
        <Text>{count}</Text>
      </Group>
      <Group position="apart">
        <Text weight={700}>Total price:</Text>
        <Text weight={700}>{totalPrice}€</Text>
      </Group>
      <Group position="center">
        <Group>
          {/*TODO: Delete cart content - update global state*/}
          <Button disabled={count == 0} hidden={count == 0} color="red" rightIcon={<Trash size={14} />} onClick={() => setCartState([])}>
            Delete
          </Button>
        </Group>
      </Group>

      <Group position="center" mt="xl">
        <Button variant="default" component={Link} to='/home'>Home</Button>
        <Button disabled={count == 0} onClick={() => props.nextStep()} color='dark'>Next step</Button>
      </Group>
    </Container>
  );
}

export default CartCard;
