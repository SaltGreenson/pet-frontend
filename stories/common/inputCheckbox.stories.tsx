import React from 'react';

import { Checkbox } from '@/components/common';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Common/inputs',
  component: Checkbox,
  argTypes: {
    label: {
      type: 'string',
      defaultValue: 'Remember me',
    },
    required: {
      type: 'boolean',
      defaultValue: true,
      description: 'Describes the required or not fields',
    },
    error: {
      type: 'string',
      defaultValue: 'First name must be filled',
    },
    width: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const _Checkbox = Template.bind({});
_Checkbox.args = {};
