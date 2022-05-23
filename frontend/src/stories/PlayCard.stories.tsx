import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PlayCard } from '../components/PlayCard/PlayCard';

export default {
  title: 'Farfalle/PlayCard',
  component: PlayCard,
} as ComponentMeta<typeof PlayCard>;

const Template: ComponentStory<typeof PlayCard> = (args) => <PlayCard {...args}/>;

export const TheGamer = Template.bind({});
TheGamer.args = {
  title: "The Gamer",
  header: "Based on Fyodor Mikhailovich Dostoyevsky",
  director: "Michal Hába",
  premiere: "Oct 23, 2018",
  length: "130",
  mainPhoto: "https://cdn.muni.cz/media/3130854/hrac-42-z-128.jpg?mode=crop&slimmage=true&center=0.5,0.5&rnd=131977254310000000",
  description: "Is this still Dostoyevsky? Is this still theatre? This is a production by the controversial director Michal Hába based on Dostoyevsky’s novella. Russian ecstasy, European provocation. And what came first – the chicken or the egg?"
};
