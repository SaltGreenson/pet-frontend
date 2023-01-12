import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputPhoto } from '@/components/common';

export default {
  title: 'Common/inputs',
  component: InputPhoto,
  argTypes: {
    imageUrl: {
      type: 'string',
      defaultValue: '',
      description: 'Image',
    },
  },
} as ComponentMeta<typeof InputPhoto>;

const Template: ComponentStory<typeof InputPhoto> = (args) => (
  <InputPhoto {...args} />
);

export const Photo = Template.bind({});
Photo.args = {};
