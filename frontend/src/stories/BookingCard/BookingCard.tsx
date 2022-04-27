import React, { useState } from 'react';
import './bookingcard.css';

export interface SeatProps {
    id: number,
    row: number,
    col: number,
    status: number,
        // 0 --> free
        // 1 --> booked (maybe by someone else)
        // 2 --> full
}

export interface BookingCardProps {
    name: string,
    venue: string,
    date: string,
    time: string,
    price: number,
    columns: number,
    seats: SeatProps[]
}

export function BookingCard({name, venue, date, time, price, columns, seats}: BookingCardProps) {
    let initialArray: number[] = [];
    const [bookedSeats, setBookedSeats] = useState(initialArray);
    const [confirmedSeats, setConfirmedSeats] = useState(0);
    let tableStyle = {
        display: `grid`,
        alignItems: `stretch`,
        gridTemplateColumns: `repeat(${columns} , 2rem)`,
    };

    /* --- Seat booking --- */
    const bookSeat = (id: number, bookedSeats: number[]) => {
        if (bookedSeats.includes(id)) {
            setBookedSeats(bookedSeats.filter(item => item !== id));
        } else {
            setBookedSeats([...bookedSeats, id]);
        }
    }

    /* --- Component for seats --- */
    /* @values      data from database
     * @ bookedSeat seats array booked in current session
     * 1. check for current status of the seat - disable if it is already bought 
     * 2. draw button
     *      a. if seat is already booked in current session - unbook the seat and remove from array
     *      b. otherwise book and add to bookedSeats array*/

    const Seats = (props: {values: SeatProps[], bookedSeats: number[]}) => {
        return (
            <div className="seat-table" style={tableStyle}>
                {props.values.map(seat => {
                    let seatStatus = props.bookedSeats.includes(seat.id) ? "seat seat__chosen" : "seat seat__free";
                    if (seat.status !== 0) {
                        seatStatus = "seat seat__full"
                    }
                    return (
                        <button className={seatStatus} key={seat.id} type="button" onClick={() => bookSeat(seat.id, bookedSeats)} disabled={seat.status !== 0}>
                            {seat.id}
                        </button>
                   );
                })}
            </div>
          );
    }

    const confirmSeats = (bookedSeats: number[]) => {
        /* Insert seats into database */
        setConfirmedSeats(bookedSeats.length);
        setBookedSeats([]);
    }

    const printConfirmation = (numberOfSeats: number, seatPrice: number) => {
        if (confirmedSeats > 0) {
            return (
                <div className="confirmation">
                    You successfully booked {confirmedSeats} seats for {numberOfSeats * seatPrice} €.
                </div>
            );
        }
        return (
            <div className="confirmation">
                No confirmed seats yet.
            </div>
        );
    }

    return (
        <div className="booking-card">
            <h1>Booking seats for {name}</h1>
            <div className="booking-card-venue">{venue}</div>
            <div className="booking-card-date">{date}</div>
            <div className="booking-card-time">{time}</div>
            {/* Add seats from current booking session into array */}
            <Seats values={seats} bookedSeats={bookedSeats}/>
            <div className="seats-count">
                <span>Number of chosen seats:</span>
                <span>{bookedSeats.length}</span>
            </div>
            <div className="seats-price">
                <span>Price of chosen seats:</span>
                <span>{bookedSeats.length * price} €</span>
            </div>
            <div className="seats-summary">
                <button className="seats-summary__confirm" type="button" onClick={() => confirmSeats(bookedSeats)} >
                    Confirm booking
                </button>
                {printConfirmation(confirmedSeats, price)}
            </div>
        </div>
    );
}

export default BookingCard;