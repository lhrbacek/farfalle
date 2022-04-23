import React from 'react';
import './programcard.css';
import { performances } from '../data/performances';
import LongPerformanceItem, { LongPerformanceItemProps } from './LongPerformanceItem';

export function ProgramCard() {
  return (
    <div className="program-card">
        {performances.map((a: LongPerformanceItemProps) => <LongPerformanceItem {...a}/> )}
    </div>
  );
}

export default ProgramCard;
