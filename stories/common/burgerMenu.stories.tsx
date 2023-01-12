import React from "react";

import { BurgerMenu } from "@/components/common";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LinkType } from "@/types/common.types";

export default {
  title: "Common/Menus",
  component: BurgerMenu,
  argTypes: {
    links: {
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
          title: "ContactFields us",
          href: "#",
        },
      ] as Array<LinkType>,
      type: Array<"object">
    },
  },
} as ComponentMeta<typeof BurgerMenu>;

const Template: ComponentStory<typeof BurgerMenu> = (args) => (
  <BurgerMenu {...args} />
);

export const Burger = Template.bind({});
Burger.args = {};
