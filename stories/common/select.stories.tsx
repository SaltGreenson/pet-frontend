import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Select } from "@/components/common";

export default {
  title: "Common/Selects",
  component: Select,
  argTypes: {
    elements: {
      defaultValue: [
        {
          label: "California",
          value: "California",
        },
        {
          label: "Doctor of Veterinary Medicine",
          value: "Doctor of Veterinary Medicine",
        },
      ],
      description: "The elements that will be displayed in the selection field",
      type: Array<"object">
    },
    label: {
      type: "string",
      description: "Label",
      defaultValue: "State",
    },
    error: {
      type: "string",
      description: "The text that will be displayed if an error has occurred",
      defaultValue: "This field must be filled in",
    },
    required: {
      type: "boolean",
      defaultValue: true,
      description: "Describes the required or not fields",
    },
    name: {
      type: "string",
      defaultValue: "select",
      description: "Name of the select",
    },
    dimension: {
      type: "string",
      defaultValue: "small",
      options: ["small", "large"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {};
