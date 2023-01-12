import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Radio } from '@/components/common';

export default {
  title: 'Common/Radio',
  component: Radio,
  argTypes: {
    radioArray: {
      radioArrayType: [{
        title: "string",
        defaultChecked: "boolean",
      }],
      description: "Array of radio buttons"
    },
      onChange: {
        type: "function",
        description: "onChange function"
      }
    }
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args}/>;

export const _Radio = Template.bind({});
_Radio.args = {
  radioArray: [{ title: "Cat" }, { title: "Dog", defaultChecked: true }, { title: "Capybara" }],
  onChange: (e) => console.log(e),
};
