import { Container, Divider, Pagination, Stack, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { plays as data } from '../../data/plays'
import { Play } from '../../types/play';
import PlayItem from './PlayItem';

export function HomeCard() {
  const values = data;  //TODO: Fetch from backend five newest performances
  const [activePage, setPage] = useState(1); // TODO: Add paging

  useEffect(() => {
    document.title = "Farfalle | Home"
  }, [])

  return (
    <Container>
      <Title order={1} >Welcome to Farfalle!</Title>
      <Divider my="sm" />
      <Stack spacing="xs">
        {values.map((value: Play) => <PlayItem key={value.id} {...value} />)}
        <Pagination page={activePage} onChange={setPage} total={2} color="dark" />
      </Stack>
    </Container>
  );
}

export default HomeCard;