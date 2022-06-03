import { Container, Grid, Image, AspectRatio, Stack, Title, Text, Group, SimpleGrid, Center, Space, ScrollArea } from '@mantine/core';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { playOverviews } from '../../data/plays';
import { PerformanceShort } from '../../types/play';
import PerformanceItem from './PerformanceItem';


export function PlayCard() {
    const { id } = useParams();
    const playInfo = playOverviews.find((play) => play.id.toString() == id); // TODO: fetch data from backend

    useEffect(() => {
        document.title = "Farfalle | Program"
    }, [])

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
