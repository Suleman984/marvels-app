import React from 'react';
import { Meta } from '@storybook/react';
import { ItemDisplay } from './ItemDisplay'; // Adjust the import path

export default {
  component: ItemDisplay,
  title: 'Components/ItemDisplay', // Adjust the category and title
} as Meta;

const Template = (args) => <ItemDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://example.com/image.jpg', // Provide a valid image source
  title: 'Sample Title',
  description: 'Sample Description',
};
