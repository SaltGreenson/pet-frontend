import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TextBlock from "../../src/components/common/TextBlock/TextBlock";
import { LinkType } from "../../src/types/common.types";

export default {
  title: 'Common/Text',
  component: TextBlock,
  argTypes: {
    links: {
      defaultValue: [
        {
          title: 'Rabies',
          href: '#'
        },
        {
          title: 'Distemper',
          href: '#'
        },
        {
          title: 'Parvovirus',
          href: '#'
        },
        {
          title: 'Bordetella',
          href: '#'
        },
        {
          title: 'Lyme Disesase',
          href: '#'
        },
      ] as Array<LinkType>
    },
    title: {
      type: "string",
      defaultValue: 'Dog Core Vaccinations:'
    },
    titleFontSize: {
      type: 'string',
      defaultValue: '16px'
    },
    text: {
      defaultValue: [
        'Rabies',
        'Distemper',
        'Parvovirus',
        'Bordetella',
        'Lyme Disesase',
      ]
    }
  }
} as ComponentMeta<typeof TextBlock>;

const Template: ComponentStory<typeof TextBlock> = (args) => <TextBlock {...args}/>;

export const _TextBlock = Template.bind({});
_TextBlock.args = {};
