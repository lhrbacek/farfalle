import { useSetState } from '@mantine/hooks';
import { setUncaughtExceptionCaptureCallback } from 'process';
import React, { useState } from 'react';
import './ticketscard.css';

export interface SeatProps {
    row: number,
    col: number,
    full: boolean,
    chosen: boolean
}

export interface TicketsCardProps {
    name: string,
    date: string,
    time: string,
    price: number,
    seats: SeatProps[]
}

export function TicketsCard({name, date, time, price, seats}: TicketsCardProps) {
    const [count, setCount] = useState(0);
    const currentPrice = count * price;

    const Seats = (props: SeatProps[]) => {
        return (
            <div className="seat-table">
                {props.map(seat => {
                    const seatStatus = seat.chosen ? "seat-chosen" : "seat-free";
                    return (
                        <button className={seatStatus} type="button" onClick={() => (setCount(count + 1))} disabled={seat.full}>
                            .
                        </button>
                   );
                })}
            </div>
          );
    }

    return (
        <div className="tickets-card">
            <h1>Booking seats for {name}</h1>
            <div className="tickets-card-date">{date}</div>
            <div className="tickets-card-time">{time}</div>
            {Seats(seats)}
            <div className="seats-count">
                <span>Number of chosen seats:</span>
                <span>{count}</span>
            </div>
            <div className="seats-price">
                <span>Number of chosen seats:</span>
                <span>{currentPrice} €</span>
            </div>
        </div>
    );
}

export default TicketsCard;