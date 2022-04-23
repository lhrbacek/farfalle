import React from 'react';
import './playcard.css';

export interface PerformanceItemProps {
    date: string,
    time: string,
    venue: string,
    price: number
}

export function PerformanceItem({date, time, venue, price}: PerformanceItemProps) {
  return (
    <div className='performance'>
        <div className='performance-date performance-info'>{date}</div>
        <div className='performance-time performance-info'>{time}</div>
        <div className='performance-venue performance-info'>{venue}</div>
        <button className="ticket-button" type="button">
            {/* <img className="ticket-icon" src="https://img.icons8.com/ios/250/000000/banknotes.png" /> */}
            {price}
        </button>
    </div>
  );
}

export default PerformanceItem;
