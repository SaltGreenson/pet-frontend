import styled, { css } from "styled-components";

import { Colors } from "@/styles/colors";

type DescriptionContainerType = {
  width?: string;
  needBorder?: boolean;
};

export const HeadContainer = styled.div`
  display: flex;
  gap: 25px;
  margin: 0 2rem;
  border-bottom: 1px solid ${Colors.LINE_COLOR};

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 1rem;
    justify-content: space-between;
    gap: unset;
  }
`;

export const ImageContainer = styled.div`
  display: inline-block;
  width: 372px;
  height: 252px;
  margin: 2rem 0 2rem 0;
  overflow: hidden;
  background-color: ${Colors.DARK_GREY};

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    margin-bottom: 0;
  }
`;

export const DescriptionContainer = styled.div<DescriptionContainerType>`
  min-width: ${({ width = "285px" }) => width};
  width: ${({ width = "285px" }) => width};
  min-height: 252px;
  max-height: 252px;
  margin-top: 2rem;
  overflow: hidden;

  ${({ needBorder }) =>
    needBorder &&
    css`
      padding-left: 25px;
      border-left: 1px solid ${Colors.LINE_COLOR};

      @media (max-width: 1024px) {
        padding-left: unset;
        border-left: unset;
      }
    `};

  @media (max-width: 768px) {
    min-width: unset;
    width: 100%;
    margin: 2rem 0 0 0;
  }

  @media (max-width: 1024px) {
    margin-bottom: 0;
    min-height: unset;
  }
`;
