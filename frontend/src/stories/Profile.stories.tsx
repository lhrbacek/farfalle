import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Profile from '../components/Profile/Profile';


export default {
  title: 'Farfalle/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args}/>;

export const User = Template.bind({});
User.args = {
  name: "Fabiola",
  surname: "Méndez",
  email: "fabmen@testmail.es",
  addressName: "Fabiola Méndez",
  street: "Colonia de San Conrado",
  number: 20,
  zip: 18008,
  city: "Granada",
  purchasedTickets: [
    { play: "The Gamer", date: "Jun 03, 2022", time: "20:00", venue: "SmallVenue", row: 1, seat: 5 },
    { play: "Carmen", date: "Jun 19, 2022", time: "18:30", venue: "BigVenue", row: 8, seat: 15 },
    { play: "Pigmalion", date: "Jul 24, 2022", time: "20:00", venue: "SmallVenue", row: 3, seat: 6 },
  ]
};
