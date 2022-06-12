import { Container, Grid, Image, AspectRatio, Stack, Title, Text, Group, SimpleGrid, Center, Space, ScrollArea, Pagination, createStyles } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { PlayOverview, PerformanceShort } from '../../types/play';
import LoadError from '../Error/LoadError';
import LoadingCard from '../Loading/LoadingCard';
import PerformanceItem from './PerformanceItem';


const useStyles = createStyles((theme) => ({

  group: {
    display: 'flex',
    alignItems: 'center',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
  },

  innerGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

}));

export function PlayCard() {
  const { classes } = useStyles();
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const performancePerPage = 5;

  useEffect(() => {
    document.title = "Farfalle | Program"
  }, [])

  const { data, error } = useSWR(`play/${id}`);
  if (error) return <LoadError />;
  if (!data) return <LoadingCard />;
  const playInfo: PlayOverview = data;

  const pages = Math.ceil(playInfo.performances.length / performancePerPage);

  const indexOfLastPlay = page * performancePerPage;
  const indexOfFirstPlay = indexOfLastPlay - performancePerPage < 0 ? 0 : indexOfLastPlay - performancePerPage;
  const currentPerformances = playInfo.performances.slice(indexOfFirstPlay, indexOfLastPlay);

  return (
    <Container>
      <Grid grow className={classes.group}>
        <Grid.Col span={4}>
          <Center>
            <Image src={playInfo.imageURL} alt={playInfo?.name} />
          </Center>
        </Grid.Col>
        <Grid.Col span={6} className={classes.innerGroup}>
          <Title>{playInfo.name}</Title>
          <Space h="md" />
          <ScrollArea style={{ height: 100 }}>
            <Text>{playInfo.description}</Text>
          </ScrollArea>
          <Space h="md" />
          <Text size="sm">Director: {playInfo?.director}</Text>
          <Text size="sm">Length: {playInfo?.lengthMinutes} minutes</Text>
        </Grid.Col>
        <Grid.Col>
          <Stack>
            <Title order={3}>Available performances</Title>
            {currentPerformances.map((performance: PerformanceShort) => <PerformanceItem key={performance.id} {...performance} />)}
            <Center>
              <Pagination page={page} onChange={setPage} total={pages} siblings={0} color="dark" />
            </Center>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default PlayCard;
