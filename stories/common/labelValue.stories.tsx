import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LabelValue } from "@/components/common";

export default {
  title: "Common/Labels",
  component: LabelValue,
  argTypes: {
    value: {
      type: "string",
      defaultValue: "Home",
    },
    label: {
      type: "string",
      defaultValue: "Page",
    },
    isValueUrl: {
      type: "boolean",
      defaultValue: false,
    },
    isBoldLabel: {
      type: "boolean",
      defaultValue: true,
    },
    isBoldValue: {
      type: "boolean",
      defaultValue: true,
    },
    marginContainer: {
      type: "string",
      defaultValue: "0",
    },
    titleColor: {
      type: "string",
    },
    valueColor: {
      type: "string",
    },
    variant: {
      type: "string",
      defaultValue: "small",
      options: ["small", "medium", "large"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof LabelValue>;

const Template: ComponentStory<typeof LabelValue> = (args) => <LabelValue {...args} />;

export const _LabelValue = Template.bind({});
_LabelValue.args = {};
