import styled from "styled-components";

import { CartBlock } from "@/components/common";
import { Colors } from "@/styles/colors";

type PropsType = {
  clicked: boolean;
};

export const StyledCredentialsDropDown = styled.ul<PropsType>`
  position: absolute;
  bottom: -151px;
  height: 196px;
  width: 265px;
  overflow-y: hidden;
  list-style: none;
  transition: 0.5s ease-in-out;
  background-color: ${Colors.DARK_ORANGE};

  &:hover {
    bottom: 0;
  }

  & > li {
    display: grid;
    justify-content: center;
  }

  & > li > P {
    width: 245px;
    padding: 1rem 0;
    text-align: center;
    hyphens: auto;
  }
`;

export const CartContainer = styled(CartBlock)<PropsType>`
  position: relative;
  transition: 300ms;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }
`;

export const ViewCredentialsWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 10px;
  width: 100%;
  cursor: pointer;
  background-color: ${Colors.WHITE};
`;
