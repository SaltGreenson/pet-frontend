import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Logo } from '@/components/common';

export default {
  title: 'Logo/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => <Logo />;

export const _Logo = Template.bind({});
_Logo.args = {};
