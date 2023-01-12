import styled from "styled-components";

import { Colors } from "@/styles/colors";

export const Container = styled.div`
  display: inline-flex;
  gap: 16px;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const RadioBox = styled.div`
  height: 1.125rem;
  width: 1.125rem;
  background: ${Colors.LINE_COLOR};
  border: 1px solid ${Colors.LINE_COLOR};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 0.4rem;
  padding: 2px;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background: ${Colors.INPUT_FONT_COLOR};
    border-radius: 50%;
    transform: scale(0);
  }
`;

export const Input = styled.input`
  display: none;
  &:checked + ${RadioBox} {
      &::after {
        transform: scale(1);
      }
`;
