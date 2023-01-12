import React from 'react';

import { CustomInput } from '@/components/common';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Common/inputs',
  component: CustomInput,
  argTypes: {
    label: {
      type: 'string',
      defaultValue: '\'First name',
      description: 'labels of the top of input',
    },
    required: {
      type: 'boolean',
      defaultValue: true,
      description: 'Describes the required or not fields'
    },
    placeholder: {
      type: 'string',
      defaultValue: 'e. g. Alex',
      description: 'Placeholder'
    },
    error: {
      type: 'string',
      defaultValue: 'First name must be filled'
    },
    width: {
      type: 'string',
      defaultValue: '12rem',
      description: 'Size of the input',
      options: ['5rem', '12rem', '21.4rem', '100%'],
      control: {
        type: 'radio',
      },
    }
  }
} as ComponentMeta<typeof CustomInput>;

const Template: ComponentStory<typeof CustomInput> = (args) => <CustomInput { ...args }/>;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'e. g. Alex',
  error: 'The First name must be filled in',
  required: true,
  label: 'First name'
};
