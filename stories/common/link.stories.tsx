import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomLink } from '@/components/common';

import { Colors } from '@/styles/colors';

export default {
  title: 'Common/Links',
  component: CustomLink,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: 'Forget password?',
    },
    href: {
      type: 'string',
      defaultValue: '#',
      description: 'Links',
    },
    color: {
      type: 'string',
      defaultValue: Colors.LINK_COLOR,
      options: [Colors.LINK_COLOR, Colors.ORANGE, Colors.LABEL_COLOR],
      control: {
        type: 'radio',
      },
    },
    lineHeight: {
      type: 'string',
      defaultValue: '15px',
      options: ['15px', '16px', '21.6px', '23px'],
      control: {
        type: 'radio',
      },
    },
    fontSize: {
      type: 'string',
      defaultValue: '16px',
      options: ['12px', '16px'],
      control: {
        type: 'radio',
      },
    },
    bold: {
      type: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof CustomLink>;

const Template: ComponentStory<typeof CustomLink> = (args) => <CustomLink {...args} />;

export const _A = Template.bind({});
_A.args = {};
