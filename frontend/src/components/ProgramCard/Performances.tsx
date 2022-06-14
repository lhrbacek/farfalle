import React, { useState } from 'react';
import { Performance } from '../../types/performance';
import { Center, Pagination, Stack } from '@mantine/core';
import LongPerformanceItem from './LongPerformanceItem';

interface PerformancesProps {
  performances: Performance[]
}

export function Performances({ performances }: PerformancesProps) {
  const [page, setPage] = useState(1);
  const performancePerPage = 5;

  //pagination
  const pages = Math.ceil(performances.length / performancePerPage);
  const indexOfLastPlay = page * performancePerPage;
  const indexOfFirstPlay = indexOfLastPlay - performancePerPage < 0 ? 0 : indexOfLastPlay - performancePerPage;
  const currentPerformances = performances.slice(indexOfFirstPlay, indexOfLastPlay);

  return (
    <Stack spacing="xs">
      {currentPerformances.map((performance: Performance) => <LongPerformanceItem key={performance.id} {...performance} />)}
      <Center>
        <Pagination page={page} onChange={setPage} total={pages} siblings={0} color="dark" />
      </Center>
    </Stack>
  );
}

export default Performances;