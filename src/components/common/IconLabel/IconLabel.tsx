import React from "react";

import { FlexContainer, IconLabelContainer } from "./iconLabel-styles";
import Paragraph from "../Paragraph";

interface IIconLabel {
  icon: React.ReactNode;
  label: string;
  alignItems?: string;
  border?: boolean;
  color?: string;
  gap?: string;
}

const IconLabel = ({ border, color, icon, label, ...props }: IIconLabel) => (
  <IconLabelContainer border={border}>
    <FlexContainer {...props}>
      {icon}
      <Paragraph color={color}>{label}</Paragraph>
    </FlexContainer>
  </IconLabelContainer>
);

export default IconLabel;
