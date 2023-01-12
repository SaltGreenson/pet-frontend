import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OverviewHeadContent } from '@/components/elements';

export default {
  title: 'Common/ProfileContent',
  component: OverviewHeadContent,
  argTypes: {
    isUpToDate: {
      type: 'boolean',
      defaultValue: false,
    },
    licenseDownloadLink: {
      type: 'string',
      defaultValue: '#',
    },
    informationTitle: {
      type: 'string',
      defaultValue: 'Highway Veterinary Hospital',
    },
    profilePhoto: {
      type: 'string',
      defaultValue: 'Buildings/hospital.png',
    },
    websiteLink: {
      type: 'string',
      defaultValue: 'allydvm.com',
    },
    address: {
      type: 'string',
      defaultValue: '2604 Crain Hwy, Bowie, MD 20716',
    },
    phoneNumber: {
      type: 'string',
      defaultValue: '+1 (808) 216-60-21',
    },
    certified: {
      type: 'string',
      defaultValue: 'Certified by the State of Maryland',
    },
    email: {
      type: 'string',
      defaultValue: 'allydvm@gmail.com'
    }
  }
} as ComponentMeta<typeof OverviewHeadContent>;

const Template: ComponentStory<typeof OverviewHeadContent> = (args) => <OverviewHeadContent { ...args }/>;

export const _Head = Template.bind({});
_Head.args = {};
