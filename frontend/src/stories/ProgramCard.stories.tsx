import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProgramCard } from '../components/ProgramCard/ProgramCard';
import { performances } from '../data/performances';
import { PerformanceProps } from '../components/types/performance';

export default {
  title: 'Farfalle/ProgramCard',
  component: ProgramCard,
} as ComponentMeta<typeof ProgramCard>;

const Template: ComponentStory<typeof ProgramCard> = (args) => <ProgramCard {...args}/>;

export const Program = Template.bind({});
Program.args = {values: performances};
