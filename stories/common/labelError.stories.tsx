import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ErrorLabel } from '@/components/common';

export default {
  title: 'Common/Labels',
  component: ErrorLabel,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: 'This field must be filled in',
      description: 'labels for description of element',
    },
    display: {
      type: 'string',
      options: ['inline-block', 'none'],
      defaultValue: 'inline-block',
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof ErrorLabel>;

const Template: ComponentStory<typeof ErrorLabel> = (args) => (
  <ErrorLabel {...args} />
);

export const _ErrorLabel = Template.bind({});
_ErrorLabel.args = {};
