import { Button, Center, Container, Group, Text } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

export function ConfirmationCard() {

  return (
    <Container>
      <Center>
        <Text weight={700}>Your order has been confirmed</Text>
      </Center>
      <Group position="center" mt="xl">
        <Button variant="default" color='dark' component={Link} to='/'>Home</Button>
      </Group>
    </Container>
  );
}

export default ConfirmationCard;
