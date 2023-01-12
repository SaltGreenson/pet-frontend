import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Paragraph } from '@/components/common';

import { Colors } from '@/styles/colors';

export default {
  title: 'Common/Paragraphs',
  component: Paragraph,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: 'Profile overview',
      description: 'labels for description of element',
    },
    color: {
      type: 'string',
      defaultValue: Colors.LINK_COLOR,
      options: [Colors.ORANGE, Colors.TITLE_COLOR, Colors.LABEL_COLOR],
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
      defaultValue: '12px',
      options: ['12px', '16px'],
      control: {
        type: 'radio',
      },
    },
    bold: {
      type: 'boolean',
      defaultValue: false
    },
    margin: {
      type: 'string',
      defaultValue: '5px',
      options: ['0', '5px'],
      control: {
        type: 'radio',
      },
    },
    isOutlined: {
      type: 'boolean',
      defaultValue: 'false'
    },
    outlinedBgColor: {
      type: 'string',
      defaultValue: Colors.LIGHT_GREEN,
      options: [Colors.LIGHT_GREEN, Colors.LIGHT_ORANGE, Colors.LIGHT_RED],
      control: {
        type: 'radio'
      }
    },
    outlinedFontColor: {
      type: 'string',
      defaultValue: Colors.GREEN,
      options: [Colors.GREEN, Colors.ORANGE, Colors.RED],
      control: {
        type: 'radio'
      }
    }
  }
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph { ...args }/>;

export const _Paragraph = Template.bind({});
_Paragraph.args = {};
