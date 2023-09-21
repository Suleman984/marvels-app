import React from 'react';
import { Meta, Story } from '@storybook/react';
import MovieDisplay from './MovieDisplay';
import { movieImages } from '../News';

export default {
  component: MovieDisplay,
  title: 'Movie Display',
} as Meta;
const Template: Story = (args) => <MovieDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgsource: movieImages, // Pass your movieImages array here
};
