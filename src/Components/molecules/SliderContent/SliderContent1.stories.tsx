import React from 'react';
import { Meta } from '@storybook/react';
import SliderContent1 from './SliderContent1'; // Update the path to your component
export default {
  title: 'SliderContent1',
  component: SliderContent1,
} as Meta;

const Template = (args) => <SliderContent1 {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundImageSrc: 'your-image-source.jpg',
  src:'./Assets/Comics/c6.jpg',
  title: 'Your Title',
  description: 'Your Description',
  buttonText: 'Your Button',
  onButtonClick: () => alert('Button clicked'),
};
