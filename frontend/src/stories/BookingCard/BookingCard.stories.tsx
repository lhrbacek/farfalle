import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BookingCard } from './BookingCard';

export default {
  title: 'Farfalle/BookingCard',
  component: BookingCard,
} as ComponentMeta<typeof BookingCard>;

const Template: ComponentStory<typeof BookingCard> = (args) => <BookingCard {...args}/>;

export const Booking = Template.bind({});

Booking.args = {
    name: "The Gamer",
    venue: "Small Venue",
    date: "Oct 23, 2022",
    time: "20:00",
    price: 10,
    columns: 3,
    seats: [
        {id: 1, row: 1, col: 1, status: 0},
        {id: 2, row: 1, col: 1, status: 0},
        {id: 3, row: 1, col: 1, status: 0},
        {id: 4, row: 1, col: 1, status: 0},
        {id: 5, row: 1, col: 1, status: 2},
        {id: 6, row: 1, col: 1, status: 2},
        {id: 7, row: 1, col: 1, status: 2},
        {id: 8, row: 1, col: 1, status: 0},
        {id: 9, row: 1, col: 1, status: 0},
        {id: 10, row: 1, col: 1, status: 0},
        {id: 11, row: 1, col: 1, status: 0},
        {id: 12, row: 1, col: 1, status: 1},
        {id: 13, row: 1, col: 1, status: 1},
        {id: 14, row: 1, col: 1, status: 0},
        {id: 15, row: 1, col: 1, status: 0},
        {id: 16, row: 1, col: 1, status: 0},
        {id: 17, row: 1, col: 1, status: 0},
        {id: 18, row: 1, col: 1, status: 1},
        {id: 19, row: 1, col: 1, status: 1},
        {id: 20, row: 1, col: 1, status: 0},
    ]
}
