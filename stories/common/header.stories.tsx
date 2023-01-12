import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "../../src/components/elements/Header";
import { LinkType } from "../../src/types/common.types";

export default {
  title: "Common/Menus",
  component: Header,
  argTypes: {
    headerLinks: {
      defaultValue: [
        {
          title: "About Us",
          href: "#",
        },
        {
          title: "Membership",
          href: "#",
        },
        {
          title: "Network map",
          href: "#",
        },
        {
          title: "Contact us",
          href: "#",
        },
      ] as LinkType[],
      type: Array<"object">
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const _Header = Template.bind({});
_Header.args = {};
