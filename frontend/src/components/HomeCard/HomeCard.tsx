import { PerformanceProps } from '../types/performance';
import { Container, Divider, Stack, Text, Title } from '@mantine/core';
import LongPerformanceItem from '../ProgramCard/LongPerformanceItem';

interface ProgramCardProps {
  values: PerformanceProps[]
}


export function HomeCard({values}: ProgramCardProps) {
  return (
    <Container>
      <Title order={1} >Welcome to Farfalle!</Title>
      <Divider my="sm" variant="dotted" />
      <Stack spacing="xs">
        {values.map((a: PerformanceProps) => <LongPerformanceItem {...a}/> )}
      </Stack>
    </Container>
  );
}

export default HomeCard;