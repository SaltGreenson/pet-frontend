import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomLabel } from '@/components/common';

export default {
  title: 'Common/Labels',
  component: CustomLabel,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: 'First name',
      description: 'labels for description of element',
    },
    required: {
      type: 'boolean',
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof CustomLabel>;

const Template: ComponentStory<typeof CustomLabel> = (args) => (
  <CustomLabel {...args} />
);

export const _Label = Template.bind({});
_Label.args = {};
