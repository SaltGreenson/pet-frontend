import React, { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tabs } from '@/components/elements';

import { Colors } from '@/styles/colors';

export default {
  title: 'Common/Tabs',
  component: Tabs,
  argTypes: {
    activeBackground: {
      type: 'string',
      defaultValue: Colors.SKY,
      description: 'Active tab background'
    },
    activeColor: {
      type: 'string',
      defaultValue: Colors.TITLE_COLOR,
      description: 'Active tab text color'
    },
    activeTabIndex: {
      type: "number",
      description: "Need to create state, that will control active tab index from"
    },
    setActiveTabIndex: {
      type: "function",
      description: "setState",
    },
    background: {
      type: 'string',
      defaultValue: 'none',
      description: 'Tab background'
    },
    color: {
      type: 'string',
      defaultValue: Colors.TITLE_COLOR,
      description: 'Tab text color'
    },
    gap: {
      type: 'string',
      defaultValue: '0',
      description: 'Space between tabs'
    },
    justifyContent: {
      justifyContentType: 'start' || 'center' || 'end' || 'flex-start' || 'flex-end' || 'left' || 'right' || 'normal' || 'space-between' || 'space-around' || 'space-evenly' || 'stretch' || 'safe center' || 'unsafe center' || 'inherit',
      defaultValue: '',
      description: 'Justify content of tabs'
    },
    onClick: {
      type: 'function',
      defaultValue: undefined,
      description: 'onClick event'
    },
    tabTextPosition: {
      tabTextPositionType: 'start' || 'center' || 'end',
      defaultValue: 'center',
      description: 'Position of text in tab'
    },
    tabsArray: {
      tabsArrayType: [{
        content: 'React.ReactNode',
        key: 'string' || 'number',
        title: 'string'
      }],
      description: 'Array of tabs'
    }
  }
} as ComponentMeta<typeof Tabs>;

const TemplateHomePage: ComponentStory<typeof Tabs> = (args) => { 
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0)
  return (
    <Tabs { ...args } activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex}/>
  );
}
export const DefaultTabs = TemplateHomePage.bind({});
DefaultTabs.args = {
  tabsArray: [{ key: '1', title: 'Hello' }, { key: '2', title: 'Hello 2' }, { key: '3', title: 'Hello 3' }],
  onClick: () => console.log('1'),
};
