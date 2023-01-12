import React from 'react';

import { BiSwim } from 'react-icons/bi';
import { CgFileDocument } from "react-icons/cg"
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconLabel } from '@/components/common';

import { Colors } from '@/styles/colors';

export default {
  title: 'Common/Labels',
  component: IconLabel,
  argTypes: {
   alignItems: {
    type: "string",
    defaultValue: "center",
    description: "Position of text"
   },
   border: {
    type: "boolean",
    defaultValue: false,
    description: "Border",
   },
   color: {
    type: "string",
    defaultValue: "",
    description: "Label text color"
   },
   gap: {
    type: "string",
    defaultValue: "16px",
    description: "Space between icon and label"
   },
   icon: {
    iconType: "React.ReactNode",
    defaultValue: "",
    description: "Icon"
   },
   label: {
    type: "string",
    defaultValue: "",
    description: "Icon label"
   },
  }
} as ComponentMeta<typeof IconLabel>;

const Template: ComponentStory<typeof IconLabel> = (args) => <IconLabel {...args}/>;

export const DefaultIconLabel = Template.bind({});
DefaultIconLabel.args = {
    icon: <BiSwim color={Colors.BLACK} fontSize="24px"/>,
    label: "Swim",
};

export const PrimaryIconLabel = Template.bind({});
PrimaryIconLabel.args = {
    alignItems: "end",
    color: Colors.BLUE,
    gap: "5px",
    icon: <CgFileDocument color={Colors.BLUE} fontSize="24px"/>,
    label: "PDF-Dogwood_Acress_Pet Retread",
}

export const SecondaryIconLabel = Template.bind({});
SecondaryIconLabel.args = {
    border: true,
    icon: <BiSwim color={Colors.BLACK} fontSize="24px"/>,
    label: "Swim"
}
