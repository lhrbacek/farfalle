import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProgramCard } from './ProgramCard';

export default {
  title: 'Farfalle/ProgramCard',
  component: ProgramCard,
} as ComponentMeta<typeof ProgramCard>;

const Template: ComponentStory<typeof ProgramCard> = () => <ProgramCard />;

export const Program = Template.bind({});
