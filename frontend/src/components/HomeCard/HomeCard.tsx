import { PerformanceProps } from '../types/performance';
import { Container, Divider, Stack, Text, Title } from '@mantine/core';
import LongPerformanceItem from '../ProgramCard/LongPerformanceItem';
import { plays as data } from '../../data/performances'
import PlayItem from './PlayItem';
import { PlayProps } from '../types/play';

export function HomeCard() {
  const values = data;  //TODO: Fetch from backend five newest performances

  return (
    <Container>
      <Title order={1} >Welcome to Farfalle!</Title>
      <Divider my="sm" variant="dotted" />
      <Stack spacing="xs">
        {values.map((value: PlayProps) => <PlayItem {... value}/> )}
      </Stack>
    </Container>
  );
}

export default HomeCard;