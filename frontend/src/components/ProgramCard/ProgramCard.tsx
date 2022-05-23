import React from 'react';
import { PerformanceProps } from '../types/performance';
import { Container, Stack } from '@mantine/core';
import LongPerformanceItem from './LongPerformanceItem';

interface ProgramCardProps {
  values: PerformanceProps[]
}


export function ProgramCard({values}: ProgramCardProps) {
  return (
    <Container>
      <Stack spacing="xs">
        {values.map((a: PerformanceProps) => <LongPerformanceItem {...a}/> )}
      </Stack>
    </Container>
  );
}

export default ProgramCard;
