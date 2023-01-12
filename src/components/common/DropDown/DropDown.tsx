import React, { ReactNode, useCallback, useState } from "react";

import { Arrow, FlexBlock, Title } from "@/components/common";
import { Colors } from "@/styles/colors";

import { ChildrenWrap } from "./DropDown-styles";

interface DropDownProps {
  children: ReactNode;
  label: string;
  isClicked?: boolean;
}

const DropDown = ({
  children,
  label,
  isClicked,
}: DropDownProps): JSX.Element => {
  const [clicked, setClicked] = useState<boolean>(isClicked ?? false);

  const onClickHandler = useCallback(
    () => () => {
      setClicked((prev) => !prev);
    },
    []
  );

  return (
    <>
      <FlexBlock align="center">
        <Title type="small" style={{ marginRight: "1rem" }}>
          {label}
        </Title>
        <Arrow
          clicked={clicked}
          onClick={onClickHandler()}
          hasPointerEvents={true}
          color={Colors.LINK_COLOR}
          size="8px"
          isRelative
        />
      </FlexBlock>
      <ChildrenWrap clicked={clicked}>{children}</ChildrenWrap>
    </>
  );
};

export default DropDown;
