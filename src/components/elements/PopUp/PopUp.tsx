import React, { ReactNode, useCallback, useEffect } from "react";

import { StyledPopUp, StyledPopUpContent } from "./PopUp-styles";

type PropsTypes = {
  children: ReactNode;
  isInPopUp?: boolean;
  setActive: (value: boolean) => void;
};

const PopUp = ({
  children,
  isInPopUp = false,
  setActive,
}: PropsTypes): JSX.Element => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const handleOnClick = useCallback(() => {
    if (!isInPopUp) document.body.style.overflow = "auto";
    setActive(false);
  }, [isInPopUp, setActive]);

  return (
    <StyledPopUp onClick={handleOnClick}>
      <StyledPopUpContent onClick={(e) => e.stopPropagation()}>
        {children}
      </StyledPopUpContent>
    </StyledPopUp>
  );
};

export default PopUp;
