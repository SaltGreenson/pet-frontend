import styled from "styled-components";

import { Colors } from "@/styles/colors";

export const StyledDropDownMenu = styled.nav<{ clicked: boolean }>`
  z-index: 100;
  display: ${({ clicked }) => (clicked ? "block" : "none")};
  position: absolute;
  right: 0.5rem;
  user-select: none;

  & > ul {
    min-width: 200px;
    margin-top: 1rem;
    animation: 1s normal appear;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
    background-color: ${Colors.WHITE};
    overflow: hidden;
    hyphens: auto;
  }

  ul > li {
    display: flex;
    align-items: center;
    min-height: 56px;
    cursor: pointer;
  }

  ul > li:hover {
    background-color: ${Colors.GREY};
  }

  li > a {
    display: block;
    padding-left: 1rem;
    width: 100%;
  }

  @keyframes appear {
    from {
      max-height: 0;
    }

    to {
      max-height: 500px;
    }
  }
`;
