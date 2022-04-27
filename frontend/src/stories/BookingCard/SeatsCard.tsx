import React, { useState } from 'react';
import './bookingcard.css';

export interface SeatProps {
    id: number,
    row: number,
    col: number,
    full: boolean,
    chosen: boolean
}