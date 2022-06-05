import { Center, Container, Divider, Pagination, Stack, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Play, PlayOverview } from '../../types/play';
import LoadError from '../Error/LoadError';
import LoadingCard from '../Loading/LoadingCard';
import PlayItem from './PlayItem';

export function HomeCard() {
  const [page, setPage] = useState(1);
  const playPerPage = 5;

  useEffect(() => {
    document.title = "Farfalle | Home"
  }, [])

  const { data, error } = useSWR(`play?future=true`);
  if (error) return <LoadError />;
  if (!data) return <LoadingCard />;
  const plays: PlayOverview[] = data

  // pagination
  const pages = Math.ceil(plays.length / playPerPage);
  const indexOfLastPlay = page * playPerPage;
  const indexOfFirstPlay = indexOfLastPlay - playPerPage < 0 ? 0 : indexOfLastPlay - playPerPage;
  const currentPlays = plays.slice(indexOfFirstPlay, indexOfLastPlay);


  return (
    <Container>
      <Title order={1} >Welcome to Farfalle!</Title>
      <Divider my="sm" />
      <Stack spacing="xs">
        {currentPlays.map((play: Play) => <PlayItem key={play.id} {...play} />)}
        <Center>
          <Pagination page={page} onChange={setPage} total={pages} siblings={0} color="dark" />
        </Center>
      </Stack>
    </Container>
  );
}

export default HomeCard;