import React, { useEffect } from 'react';
import { Performance } from '../../types/performance';
import { Container, Stack } from '@mantine/core';
import LongPerformanceItem from './LongPerformanceItem';
import { performances as data } from '../../data/performances'
import useSWR from 'swr';
import fetcher from '../../models/fetcher';

export function ProgramCard() {
  // const values = data;  //TODO: Fetch from backend five newest performances

  useEffect(() => {
    document.title = "Farfalle | Program"
  }, [])

  const { data, error } = useSWR(`performance?future=true`, fetcher);

  if (error) return <div>failed to load</div>;
  // TODO spinning wheel
  if (!data) return <div>loading...</div>;

  const performances: Performance[] = data

  return (
    <Container>
      <Stack spacing="xs">
        {performances.map((performance: Performance) => <LongPerformanceItem key={performance.id} {...performance} />)}
      </Stack>
    </Container>
  );
}

export default ProgramCard;
