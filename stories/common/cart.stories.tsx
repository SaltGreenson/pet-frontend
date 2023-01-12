import React from 'react';

import { Cart } from '@/components/elements';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Common/ProfileContent',
  component: Cart,
  argTypes: {
    photo: {
      type: 'string',
      defaultValue: 'Persons/littlePerson1.png',
    },
    position: {
      type: 'string',
      defaultValue: 'Veterinarian'
    },
    firstName: {
      type: 'string',
      defaultValue: 'Maria'
    },
    lastName: {
      type: 'string',
      defaultValue: 'Nicolo',
    },
    id: {
      type: 'string',
      defaultValue: '1'
    },
    abbreviatedCredentials: {
      type: 'string',
      defaultValue: 'DVM'
    },
    credentials: {
      defaultValue: 'Doctor of veterinary and medicine',
      type: Array<'string'>
    }
  }
} as ComponentMeta<typeof Cart>;

const Template: ComponentStory<typeof Cart> = (args) => <Cart {...args}/>;

export const _Cart = Template.bind({});
_Cart.args = {};
