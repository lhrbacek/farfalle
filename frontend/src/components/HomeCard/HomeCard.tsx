import { Container, Divider, Pagination, Stack, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { plays as data } from '../../data/plays'
import fetcher from '../../models/fetcher';
import { Play, PlayOverview } from '../../types/play';
import PlayItem from './PlayItem';

export function HomeCard() {
  const [activePage, setPage] = useState(1); // TODO: Add paging

  useEffect(() => {
    document.title = "Farfalle | Home"
  }, [])

  const { data, error } = useSWR(`play?future=true`);
  if (error) return <div>failed to load</div>;
  // TODO spinning wheel
  if (!data) return <div>loading...</div>;
  const performances: PlayOverview[] = data

  return (
    <Container>
      <Title order={1} >Welcome to Farfalle!</Title>
      <Divider my="sm" />
      <Stack spacing="xs">
        {performances.map((play: Play) => <PlayItem key={play.id} {...play} />)}
        <Pagination page={activePage} onChange={setPage} total={2} color="dark" />
      </Stack>
    </Container>
  );
}

export default HomeCard;