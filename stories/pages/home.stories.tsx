import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Home from '@/pages/index';

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const _Home = Template.bind({});
_Home.args = {};
