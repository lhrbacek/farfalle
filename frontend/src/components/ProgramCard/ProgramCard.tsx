import React, { useEffect } from 'react';
import { Performance } from '../../types/performance';
import { Container, Stack } from '@mantine/core';
import LongPerformanceItem from './LongPerformanceItem';
import useSWR from 'swr';
import LoadingCard from '../Loading/LoadingCard';

export function ProgramCard() {

  useEffect(() => {
    document.title = "Farfalle | Program"
  }, [])

  const { data, error } = useSWR(`performance?future=true`);

  if (error) return <div>failed to load</div>;
  if (!data) return <LoadingCard />;

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