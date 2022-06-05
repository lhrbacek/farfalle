import { Container, Grid, Image, AspectRatio, Stack, Title, Text, Group, SimpleGrid, Center, Space, ScrollArea } from '@mantine/core';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { PlayOverview, PerformanceShort } from '../../types/play';
import LoadingCard from '../Loading/LoadingCard';
import PerformanceItem from './PerformanceItem';


export function PlayCard() {
  const { id } = useParams();

  useEffect(() => {
    document.title = "Farfalle | Program"
  }, [])

  const { data, error } = useSWR(`play/${id}`);
  if (error) return <div>failed to load</div>;
  if (!data) return <LoadingCard />;
  const playInfo: PlayOverview = data;

  return (
    <Container>
      <Grid grow columns={10} align="flex-start">
        <Grid.Col span={4}>
          <Center>
            <Image src={playInfo?.imageURL} alt={playInfo?.name} />
          </Center>
        </Grid.Col>
        <Grid.Col span={6}>
          <Title>{playInfo?.name}</Title>
          <Space h="md" />
          <ScrollArea style={{ height: 100 }}>
            <Text>{playInfo?.description}</Text>
          </ScrollArea>
          <Space h="md" />
          <Text size="sm">Director: {playInfo?.director}</Text>
          <Text size="sm">Length: {playInfo?.lengthMinutes} minutes</Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <Stack justify="space-between">
            {playInfo?.performances.map((performance: PerformanceShort) => <PerformanceItem key={performance.id} {...performance} />)}
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default PlayCard;
