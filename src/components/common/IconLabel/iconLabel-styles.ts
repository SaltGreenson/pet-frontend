import styled from "styled-components";

type IconLabelFlexContainer = {
  alignItems?: string;
  gap?: string;
};

type IconLabelContainerType = {
  border?: boolean;
};

export const IconLabelContainer = styled.div<IconLabelContainerType>`
  display: inline-block;
  padding: 8px 16px;
  border: ${({ border }) => (border ? "1px solid black" : "none")};
  border-radius: 24px;
`;

export const FlexContainer = styled.div<IconLabelFlexContainer>`
  display: flex;
  align-items: ${({ alignItems = "center" }) => alignItems};
  gap: ${({ gap = "16px" }) => gap};
`;
