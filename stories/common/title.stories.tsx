import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Title } from "@/components/common";

export default {
  title: "Common/Titles",
  component: Title,
  argTypes: {
    children: {
      type: "string",
      defaultValue: "Veterinarian Account",
      description: "Title",
    },
    fontSize: {
      type: "string",
      defaultValue: "20px",
    },
    type: {
      type: "string",
      defaultValue: "large",
      options: ["small", "medium", "large", "edit", "thin"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const _Title = Template.bind({});
_Title.args = {};
