import styled from "styled-components";

import { Colors } from "@/styles/colors";

export type TabTypes = {
  height?: string | number;
  background?: string;
  activeBackground?: string;
  color?: string;
  tabTextPosition?: "start" | "center" | "end";
  activeColor?: string;
  isActive?: boolean;
  width?: string | number;
};

export const TabStyled = styled.div<TabTypes>`
  display: flex;
  align-items: center;
  justify-content: ${({ tabTextPosition = "center" }) => tabTextPosition};
  text-align: ${({ tabTextPosition = "center" }) => tabTextPosition};
  background: ${({
    isActive,
    background = "none",
    activeBackground = Colors.SKY,
  }) => (isActive ? activeBackground : background)};
  color: ${({
    isActive,
    color = Colors.TITLE_COLOR,
    activeColor = Colors.TITLE_COLOR,
  }) => (isActive ? activeColor : color)};
  height: ${({ height = "46px" }) => height};
  width: ${({ width = "100%" }) => width};
  padding: 0 10px;
  cursor: pointer;
`;
