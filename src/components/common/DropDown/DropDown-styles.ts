import styled from "styled-components";

type PropsType = {
  clicked: boolean;
};

export const ChildrenWrap = styled.div<PropsType>`
  display: ${({ clicked }) => (clicked ? "block" : "none")};
  padding: 2rem 0;
}
`;
