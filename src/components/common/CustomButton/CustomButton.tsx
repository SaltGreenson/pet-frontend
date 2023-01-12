import React, { PropsWithChildren } from "react";

import {
  OutLineButtonStyled,
  PrimaryButtonStyled,
  TextButtonStyled,
} from "./CustomButton-styles";

export interface CustomButtonProps {
  buttonType: "primary" | "outline" | "text";
  children: React.ReactNode;
  background?: string;
  border?: string;
  disabled?: boolean;
  color?: string;
  fontSize?: string;
  height?: "100%";
  type?: "submit" | "button" | "reset";
  width?: string | number;
  onClick?: ((event?: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
}

const CustomButton = ({
  children,
  buttonType = "primary",
  type = "button",
  ...buttonProps
}: PropsWithChildren<CustomButtonProps>) => (
  <>
    {buttonType === "primary" && (
      <PrimaryButtonStyled buttonType={buttonType} {...buttonProps} type={type}>
        {children}
      </PrimaryButtonStyled>
    )}
    {buttonType === "outline" && (
      <OutLineButtonStyled buttonType={buttonType} {...buttonProps} type={type}>
        {children}
      </OutLineButtonStyled>
    )}
    {buttonType === "text" && (
      <TextButtonStyled buttonType={buttonType} {...buttonProps} type={type}>
        {children}
      </TextButtonStyled>
    )}
  </>
);

export default CustomButton;
