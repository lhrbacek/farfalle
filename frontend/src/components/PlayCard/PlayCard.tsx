import { Container, Grid, Image, AspectRatio, Stack, Title, Text, Group, SimpleGrid, Center, Space } from '@mantine/core';
import React from 'react';
// import { AspectRatio, Stack } from 'tabler-icons-react';
import { performances } from '../../data/performances';
import PerformanceItem, { PerformanceItemProps } from './PerformanceItem';

export interface PlayCardProps {
    title: string,
    header: string,
    director: string,
    premiere: string,
    length: string,
    mainPhoto: string,
    description: string
}

export function PlayCard({title, header, director, premiere, length, mainPhoto, description}: PlayCardProps) {
  return (
    <Container>
        <Grid grow columns={10} align="flex-start">
            <Grid.Col span={4}>
                <Center>
                    <Image src={mainPhoto} alt={title} />
                </Center>
            </Grid.Col>
            <Grid.Col span={6}>
                <Title>{title}</Title>
                <Text size="lg">{header}</Text>
                <Space h="md" />
                <Text>{description}</Text>
                <Space h="md" />
                <Group position="apart">
                    <Text size="sm">Director: {director}</Text>
                    <Text size="sm">Length: {length} minutes</Text>
                    <Text size="sm">Premiere: {premiere}</Text>
                </Group>
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
