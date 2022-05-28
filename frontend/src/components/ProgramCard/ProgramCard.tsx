import React from 'react';
import { PerformanceProps } from '../types/performance';
import { Container, Stack } from '@mantine/core';
import LongPerformanceItem from './LongPerformanceItem';
import { performances as data } from '../../data/performances'

export function ProgramCard() {
  const values = data;  //TODO: Fetch from backend five newest performances

  return (
    <Container>
      <Stack spacing="xs">
        {values.map((a: PerformanceProps) => <LongPerformanceItem {...a}/> )}
      </Stack>
    </Container>
  );
}

export default ProgramCard;
