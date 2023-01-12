import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputFile } from '@/components/common';

export default {
  title: 'Common/inputs',
  component: InputFile,
  argTypes: {
    label: {
      type: 'string',
      defaultValue: 'First name',
      description: 'labels of the top of input',
    },
    required: {
      type: 'boolean',
      defaultValue: true,
      description: 'Describes the required or not fields',
    },
    placeholder: {
      type: 'string',
      defaultValue: 'e. g. Alex',
      description: 'Placeholder',
    },
    error: {
      type: 'string',
      defaultValue: 'First name must be filled',
    },
    width: {
      type: 'string',
      defaultValue: '12rem',
      description: 'Size of the input',
      options: ['5rem', '12rem', '21.4rem', '100%'],
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof InputFile>;

const Template: ComponentStory<typeof InputFile> = (args) => (
  <InputFile {...args} />
);

export const File = Template.bind({});
File.args = {};
