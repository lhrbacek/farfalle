import React, { useEffect } from 'react';
import { Performance } from '../../types/performance';
import { Container, Stack } from '@mantine/core';
import LongPerformanceItem from './LongPerformanceItem';
import { performances as data } from '../../data/performances'

export function ProgramCard() {
  const values = data;  //TODO: Fetch from backend five newest performances

  useEffect(() => {
    document.title = "Farfalle | Program"
  }, [])

  return (
    <Container>
      <Stack spacing="xs">
        {values.map((value: Performance) => <LongPerformanceItem key={value.id} {...value} />)}
      </Stack>
    </Container>
  );
}

export default ProgramCard;
