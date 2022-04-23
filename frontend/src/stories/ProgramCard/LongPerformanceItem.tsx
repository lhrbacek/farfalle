import React from 'react';
import './programcard.css';

export interface LongPerformanceItemProps {
    name: string,
    date: string,
    time: string,
    venue: string,
    price: number
}

export function LongPerformanceItem({name, date, time, venue, price}: LongPerformanceItemProps) {
  return (
    <div className='long-performance'>
        <div className='long-performance-name long-performance-info'>{name}</div>
        <div className='long-performance-date long-performance-info'>{date}</div>
        <div className='long-performance-time long-performance-info'>{time}</div>
        <div className='long-performance-venue long-performance-info'>{venue}</div>
        <button className="ticket-button" type="button">More information</button>
        <button className="ticket-button" type="button">
            {price}
        </button>
    </div>
  );
}

export default LongPerformanceItem;
