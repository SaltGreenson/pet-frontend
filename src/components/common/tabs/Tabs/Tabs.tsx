import React from "react";

import Tab from "../Tab";

import { TabsStyled } from "./Tabs-styles";

export type TabType = {
  key: string | number;
  title: React.ReactNode;
  content?: React.ReactNode;
};

type handlerSwitchTabType = {
  index: number;
  setActiveTabIndex: (value: number) => void;
  onClick?: () => void;
};

export interface ITabsProps {
  activeTabIndex: number;
  setActiveTabIndex: (value: number) => void;
  activeBackground?: string;
  activeColor?: string;
  activeTab?: number;
  background?: string;
  color?: string;
  gap?: string;
  tabTextPosition?: "start" | "center" | "end";
  justifyContent?:
    | "start"
    | "center"
    | "end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right"
    | "normal"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "safe center"
    | "unsafe center"
    | "inherit";
  onClick?: () => void;
  tabsArray: Array<TabType>;
  width?: string | number;
}

const handlerSwitchTab =
  ({ index, setActiveTabIndex, onClick }: handlerSwitchTabType) =>
  () => {
    onClick && onClick();
    setActiveTabIndex(index);
  };

const Tabs = ({
  activeTabIndex,
  setActiveTabIndex,
  gap,
  justifyContent = "start",
  onClick,
  tabsArray,
  ...tabProps
}: ITabsProps) => (
  <>
    <TabsStyled justifyContent={justifyContent} gap={gap}>
      {tabsArray.map((tab, index) => (
        <Tab
          isActive={activeTabIndex === index}
          key={tab.key}
          onClick={handlerSwitchTab({ index, setActiveTabIndex, onClick })}
          {...tabProps}
        >
          {tab.title}
        </Tab>
      ))}
    </TabsStyled>
    {tabsArray[activeTabIndex].content}
  </>
);

export default Tabs;
