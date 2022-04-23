import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SeatProps, TicketsCard } from './TicketsCard';

export default {
  title: 'Farfalle/TicketsCard',
  component: TicketsCard,
} as ComponentMeta<typeof TicketsCard>;

const Template: ComponentStory<typeof TicketsCard> = (args) => <TicketsCard {...args}/>;

export const Tickets = Template.bind({});

Tickets.args = {
    name: "The Gamer",
    date: "Oct 23, 2022",
    time: "20:00",
    price: 10,
    seats: [
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
        {row: 1, col: 1, full: false, chosen: false },
    ]
}
