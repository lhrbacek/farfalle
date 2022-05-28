import { Button, Center, Container, createStyles, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

export function ConfirmationCard(email: string) {

  return (
    <Stack justify={"center"}>
      <Text weight={700}>Your order has been confirmed</Text>
      <Text>Thank you for choosing Farfalle!</Text>
      <Link to="/home">
        <Button variant="default">Home</Button>
      </Link>
    </Stack>
  );
}

export default ConfirmationCard;
