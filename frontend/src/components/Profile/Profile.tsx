import { Container, Grid, Stack, Text, Space, Button, Card, Paper, Title, Divider } from '@mantine/core';
import PurchasedTicket from './PurchasedTicket';
import { Trash, Pencil, Ticket } from 'tabler-icons-react';
import { user } from '../../data/user'
import { Link } from 'react-router-dom';

export function Profile() {
    //TODO: fetch data about user from backend
    return (
        <Container>
            <Grid>
                <Paper withBorder shadow="md" p={30} radius="md">
                    <Stack>
                        <Title>{user.name} {user.surname}</Title>
                        <Text size="md">Email: {user.email}</Text>
                        <Text size="md">Address: {user.address}</Text>
                        <Divider />
                        <Button color="gray" rightIcon={<Pencil size={14} />} component={Link} to='edit'>
                            Edit account
                        </Button>
                        <Button variant='outline' color="red" rightIcon={<Trash size={14} />} component={Link} to='delete'>
                            Delete account
                        </Button>
                    </Stack>

                </Paper>
                <Grid.Col span={6}>
                    <Stack justify="space-between">
                        <Stack justify="space-between">
                            {user.orders.map((ticket) => <PurchasedTicket {...ticket} />)}
                        </Stack>
                        <Card.Section>
                            <Button color="dark" rightIcon={<Ticket size={14} />} component={Link} to='tickets'>
                                Manage tickets
                            </Button>
                        </Card.Section>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Container>
    );
}

export default Profile;
