import styled, { css } from "styled-components";

import { Colors } from "@/styles/colors";

type PropsType = {
  checked: boolean;
};

export const MenuCloser = styled.div<PropsType>`
  z-index: 100;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;

  ${({ checked }) =>
    checked &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

export const BurgerBtnContainer = styled.div`
  display: flex;
  height: 30px;
`;

export const MenuBtn = styled.label`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 30px;
  cursor: pointer;

  & > span {
    display: block;
    width: 30px;
    height: 4px;
    background-color: ${Colors.LINK_COLOR};
    transition-duration: 0.25s;
  }
`;

export const MenuBox = styled.ul<PropsType>`
  z-index: 100;
  width: 250px;
  height: 100%;
  top: 0;
  left: -100%;
  position: fixed;
  visibility: hidden;
  padding: 20px 0;
  margin: 0;
  list-style: none;
  background-color: ${Colors.WHITE};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
  transition-duration: 0.25s;

  ${({ checked }) =>
    checked &&
    css`
      visibility: visible;
      left: 0;
    `}
`;

export const MenuItem = styled.li`
  display: block;
  width: 100%;
  transition-duration: 0.25s;

  &:hover {
    background-color: ${Colors.LIGHT_GREY};
  }

  & > a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 20px;
  }
`;

export const MenuToggle = styled.input`
  z-index: 100;
  opacity: 0;
  position: absolute;
  width: 40px;
  height: 40px;
`;
