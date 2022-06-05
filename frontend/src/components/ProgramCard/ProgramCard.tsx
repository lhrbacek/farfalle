import React, { useEffect, useState } from 'react';
import { Performance } from '../../types/performance';
import { Center, Container, Pagination, Stack } from '@mantine/core';
import LongPerformanceItem from './LongPerformanceItem';
import useSWR from 'swr';
import LoadingCard from '../Loading/LoadingCard';
import LoadError from '../Error/LoadError';

export function ProgramCard() {
  const [page, setPage] = useState(1);
  const performancePerPage = 5;

  useEffect(() => {
    document.title = "Farfalle | Program"
  }, [])

  const { data, error } = useSWR(`performance?future=true`);

  if (error) return <LoadError />;
  if (!data) return <LoadingCard />;

  const performances: Performance[] = data

  //pagination
  const pages = Math.ceil(performances.length / performancePerPage);
  const indexOfLastPlay = page * performancePerPage;
  const indexOfFirstPlay = indexOfLastPlay - performancePerPage < 0 ? 0 : indexOfLastPlay - performancePerPage;
  const currentPerformances = performances.slice(indexOfFirstPlay, indexOfLastPlay);


  return (
    <Container>
      <Stack spacing="xs">
        {currentPerformances.map((performance: Performance) => <LongPerformanceItem key={performance.id} {...performance} />)}
        <Center>
          <Pagination page={page} onChange={setPage} total={pages} siblings={0} color="dark" />
        </Center>
      </Stack>
    </Container>
  );
}

export default ProgramCard;
