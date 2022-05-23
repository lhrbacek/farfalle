import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import OrderCard from '../components/OrderCard/CartCard';
import { tickets } from '../data/tickets';

export default {
  title: 'Farfalle/OrderCard',
  component: OrderCard,
} as ComponentMeta<typeof OrderCard>;

const Template: ComponentStory<typeof OrderCard> = (args) => <OrderCard {...args}/>;

export const Cart = Template.bind({});
Cart.args = {
  tickets: tickets
};
