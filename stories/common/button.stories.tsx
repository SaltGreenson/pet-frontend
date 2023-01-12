import React from 'react';

import { CustomButton } from '@/components/common';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Common/CustomButton',
  component: CustomButton,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: '',
      description: 'CustomButton title',
    },
    buttonType: {
      buttonType: 'primary' || 'outline' || 'text',
      defaultValue: 'primary',
      description: 'CustomButton type',
    },
    color: {
      type: 'string' || 'number',
      defaultValue: '',
      description: 'CustomButton title color',
    },
    background: {
      type: 'string',
      defaultValue: '',
      description: 'CustomButton background color',
    },
    width: {
      widthType: '100%',
      description: 'CustomButton width',
    },
    height: {
      heightType: '100%',
      description: 'CustomButton height',
    },
    border: {
      type: 'string',
      defaultValue: '',
      description: 'CustomButton border',
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
      description: 'Is disabled button',
    },
    onClick: {
      type: 'function' || undefined,
      defaultValue: undefined,
      description: 'onClick function',
    },
  },
} as ComponentMeta<typeof CustomButton>;

const TemplateHomePage: ComponentStory<typeof CustomButton> = (args) => (
  <CustomButton {...args} />
);

export const PrimaryButton = TemplateHomePage.bind({});
PrimaryButton.args = {
  children: 'Primary',
  onClick: () => console.log('PRIMARY'),
};

export const OutlineButton = TemplateHomePage.bind({});
OutlineButton.args = {
  children: 'Outline',
  buttonType: 'outline',
  disabled: true,
  onClick: undefined,
};

export const TextButton = TemplateHomePage.bind({});
TextButton.args = {
  children: 'Text',
  buttonType: 'text',
};

export const DefaultButton = TemplateHomePage.bind({});
DefaultButton.args = {
  children: 'Create your account',
};
