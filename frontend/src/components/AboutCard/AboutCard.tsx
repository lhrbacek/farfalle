import { Accordion, Container, Divider, Stack, Text, Title } from '@mantine/core';
import { useEffect } from 'react';

function AboutCard() {

  useEffect(() => {
    document.title = "Farfalle | About"
  }, [])

  return (
    <Container>
      <Title order={2}>About Farfalle</Title>
      <Text>
        Our application was developed to provide users with a convenient way to purchase tickets for theater performances.
        We hope we can help you achieve a theatrical experience in every situation!
      </Text>

      <Divider my="sm" />

      <Title order={3}>Contact</Title>
      <Text>
        37 Sulphur Springs Court
      </Text>
      <Text>
        Norwood, MA 02062
      </Text>

      <Divider my="sm" />

      <Stack>
        <Title order={3}>FAQ</Title>
        <Accordion>
          <Accordion.Item label="Seat is not available.">
            The ticket can be purchased by another user, at this time it will not be possible for you to purchase the ticket.
          </Accordion.Item>

          <Accordion.Item label="My ticket has disappeared from the cart.">
            You only have the ticket booked for 30 minutes, after which time the ticket will disappear from the cart.
          </Accordion.Item>

          <Accordion.Item label="I want to return the purchased ticket.">
            Only registered users can return purchased tickets.
          </Accordion.Item>
        </Accordion>
      </Stack>
    </Container>
  )
}

export default AboutCard