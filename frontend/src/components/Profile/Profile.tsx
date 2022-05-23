import { Container, Grid, Stack, Text, Space, Button, Card } from '@mantine/core';
import PurchasedTicket, { PurchasedTicketProps } from './PurchasedTicket';
import { Trash, Pencil } from 'tabler-icons-react';

export interface ProfileProps {
    name: string,
    surname: string,
    email: string,
    addressName: string,
    street: string,
    number: number,
    zip: number,
    city: string,
    purchasedTickets: PurchasedTicketProps[],
}

export function Profile({name, surname, email, addressName, street, number, zip, city, purchasedTickets}: ProfileProps) {
  return (
    <Container>
        <Grid grow columns={10}>
            <Grid.Col span={4}>
                <Card>
                    <Stack spacing="md">
                        <Text size="md">Name: {name}</Text>
                        <Text size="md">Surname: {surname}</Text>
                        <Text size="md">Email: {email}</Text>
                    </Stack>
                    <Space h="md"/>
                    <Stack spacing="xs">
                        <Text size="md">Address:</Text>
                        <Text size="sm">{addressName}</Text>
                        <Text size="sm">{street} {number}</Text>
                        <Text size="sm">{zip} {city}</Text>
                    </Stack>
                </Card>

            </Grid.Col>
            <Grid.Col span={6}>
                <Stack justify="space-between">
                    <Stack justify="space-between">
                        {purchasedTickets.map((ticket: PurchasedTicketProps) => <PurchasedTicket {...ticket}/> )}
                    </Stack>
                    <Card.Section>
                        <Button  color="red" rightIcon={<Trash size={14} />}>
                            Delete
                        </Button>
                    </Card.Section>
                </Stack>
            </Grid.Col>
        </Grid>
        <Button  color="blue" rightIcon={<Pencil size={14} />}>
            Edit
        </Button>
    </Container>
  );
}

export default Profile;
