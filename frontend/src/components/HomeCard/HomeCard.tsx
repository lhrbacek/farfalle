import { Container, Divider, Pagination, Stack, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Play, PlayOverview } from '../../types/play';
import LoadError from '../Error/LoadError';
import LoadingCard from '../Loading/LoadingCard';
import PlayItem from './PlayItem';

export function HomeCard() {
  const [activePage, setPage] = useState(1); // TODO: Add paging

  useEffect(() => {
    document.title = "Farfalle | Home"
  }, [])

  const { data, error } = useSWR(`play?future=true`);
  if (error) return <LoadError />;
  if (!data) return <LoadingCard />;
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