import styled from "styled-components";

import { Colors } from "@/styles/colors";

export const StyledSearchInput = styled.input`
  position: relative;
  width: 30px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  border-radius: 50px;
  font-family: inherit;
  font-size: 15px;
  cursor: pointer;
  overflow: hidden;
  background-color: transparent;
  background: no-repeat center/22px url(/Icons/searchIcon.svg);
  background-position: 45% 55%;
  transition: width 500ms, background-position 500ms, padding-left 100ms;
  outline: none;

  &:focus {
    width: 200px;
    padding-left: 35px;
    cursor: text;
    color: ${Colors.INPUT_FONT_COLOR};
    outline: 2px solid ${Colors.GREY};
    background-position: 7px 50%;
  }
`;
