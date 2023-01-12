import React from "react";

import { TabStyled } from "./Tab-styles";

export interface ITabsProps {
  activeBackground?: string;
  background?: string;
  children?: React.ReactNode;
  isActive?: boolean;
  height?: string | number;
  tabTextPosition?: "start" | "center" | "end";
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Tab = ({ children, onClick, ...tabProps }: ITabsProps) => (
  <TabStyled onClick={onClick} {...tabProps}>
    {children}
  </TabStyled>
);

export default Tab;
