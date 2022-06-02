import { Container, Divider, Text, Title } from '@mantine/core';
import { useEffect } from 'react';

function AboutCard() {

  useEffect(() => {
    document.title = "Farfalle | About"
  }, [])

  return (
    <Container>
      <Title order={2}>About Farfalle</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Sed ac dolor sit amet purus malesuada congue. Sed convallis magna eu sem.
        Aliquam erat volutpat. In convallis. Praesent dapibus.
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tempor.
        In sem justo, commodo ut, suscipit at, pharetra vitae, orci.
        Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.
        Sed convallis magna eu sem. Nullam rhoncus aliquam metus. Aliquam erat volutpat.
        Integer in sapien. Integer malesuada. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat.
      </Text>
      <Divider my="sm" variant="dotted" />
      <Title order={3}>Contact</Title>
      <Text>
        37 Sulphur Springs Court
      </Text>
      <Text>
        Norwood, MA 02062
      </Text>

    </Container>
  )
}

export default AboutCard