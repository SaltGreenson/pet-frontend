import styled from "styled-components";

export type TabsTypes = {
  isVertical?: boolean;
  gap?: string;
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
};

export const TabsStyled = styled.div<TabsTypes>`
  display: flex;
  gap: ${({ gap }) => gap};
  justify-content: ${({ justifyContent }) => justifyContent};
  width: 100%;
`;
