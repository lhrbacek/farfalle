import { Container, Grid, Image, AspectRatio, Stack, Title, Text, Group, SimpleGrid, Center, Space } from '@mantine/core';
import React from 'react';
import { play, performances } from '../../data/performances';
import PerformanceItem, { PerformanceItemProps } from './PerformanceItem';


export function PlayCard() {
  return (
    <Container>
        <Grid grow columns={10} align="flex-start">
            <Grid.Col span={4}>
                <Center>
                    <Image src={play.mainPhoto} alt={play.title} />
                </Center>
            </Grid.Col>
            <Grid.Col span={6}>
                <Title>{play.title}</Title>
                <Text size="lg">{play.header}</Text>
                <Space h="md" />
                <Text>{play.description}</Text>
                <Space h="md" />
                <Text size="sm">Director: {play.director}</Text>
                <Text size="sm">Length: {length} minutes</Text>
                <Text size="sm">Premiere: {play.premiere}</Text>
            </Grid.Col>
            <Grid.Col span={6}>
                <Stack justify="space-between">
                    {performances.map((performance: PerformanceItemProps) => <PerformanceItem {...performance}/> )}
                </Stack>
            </Grid.Col>
        </Grid>
    </Container>
  );
}

export default PlayCard;
