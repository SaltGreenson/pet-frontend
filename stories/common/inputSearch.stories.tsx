import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputSearch } from '@/components/common';

export default {
  title: 'Common/inputs',
  component: InputSearch,
} as ComponentMeta<typeof InputSearch>;

const Template: ComponentStory<typeof InputSearch> = () => <InputSearch />;

export const Search = Template.bind({});
Search.args = {};
