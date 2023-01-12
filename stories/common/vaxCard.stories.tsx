import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { VaxCard } from '@/components/elements';

export default {
    title: "Common/VaxCard",
    component: VaxCard,
    argTypes: {
        id: {
            type: "string",
            description: "ID"
        },
        firstAvatarBackground: {
            type: "string",
            description: "URL for first avatar"
        },
        onSend: {
            type: "function",
            description: "Event for send"
        },
        onUpdate: {
            type: "function",
            description: "Event for update"
        },
        ownerName: {
            type: "string",
            description: "Owner name"
        },
        petType: {
            type: "string",
            description: "Type of pet"
        },
        petName: {
            type: "string",
            description: "Pet name"
        },
        profileLink: {
            type: "string",
            description: "Path to profile"
        },
        requestedTime: {
            type: "string",
            description: "Requested time"
        },
        secondAvatarBackground: {
            type: "string",
            description: "URL for second avatar"
        },
        vetPassportLink: {
            type: "string",
            description: "Path to vet passport"
        },
    }
} as ComponentMeta<typeof VaxCard>;

const TemplateHomePage: ComponentStory<typeof VaxCard> = (args) => <VaxCard {...args}/>;

export const PrimaryVaxCard = TemplateHomePage.bind({});
PrimaryVaxCard.args = {
    id: "12345",
    firstAvatarBackground: '../Icons/personIcon.svg',
    petName: "Roxie Stephens",
    petType: "Dog",
    profileLink: "#",
    onUpdate: () => console.log("Update"),
    onSend: () => console.log("Send"),
    ownerName: "Dorian Stephens",
    requestedTime: "9:45 am",
    secondAvatarBackground: '../Icons/animalIcon.svg',
    vetPassportLink: "#",
};
