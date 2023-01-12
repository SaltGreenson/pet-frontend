import React from "react";

import { Paragraph } from "@/components/common";
import { VaxRequestContent } from "./VaxRequestTabContent";

export const vaxCardArrayConfig = [
  {
    id: "12345",
    firstAvatarBackground: "../Icons/personIcon.svg",
    petName: "Roxie Stephens",
    petType: "Cat",
    profileLink: "#",
    ownerName: "Dorian Stephens",
    requestedTime: "9:45 am",
    secondAvatarBackground: "../Icons/animalIcon.svg",
    vetPassportLink: "#",
  },
  {
    id: "12346",
    firstAvatarBackground: "../Icons/personIcon.svg",
    petName: "Roxie Stephens",
    petType: "Dog",
    profileLink: "#",
    ownerName: "Dorian Stephens",
    requestedTime: "9:45 am",
    secondAvatarBackground: "../Icons/animalIcon.svg",
    vetPassportLink: "#",
  },
];

export const tabsArrayConfig = [
  {
    key: "today",
    title: <Paragraph bold={true}>Today</Paragraph>,
    content: <VaxRequestContent vaxCardArray={vaxCardArrayConfig} />,
  },
  {
    key: "week",
    title: <Paragraph bold={true}>Week</Paragraph>,
    content: <VaxRequestContent vaxCardArray={vaxCardArrayConfig} />,
  },
  {
    key: "month",
    title: <Paragraph bold={true}>Month</Paragraph>,
    content: <VaxRequestContent vaxCardArray={vaxCardArrayConfig} />,
  },
  {
    key: "year",
    title: <Paragraph bold={true}>Year</Paragraph>,
    content: <VaxRequestContent vaxCardArray={vaxCardArrayConfig} />,
  },
];
