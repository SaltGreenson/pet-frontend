import React from "react";

import { FlexBlock, Paragraph } from "@/components/common";
import { Colors } from "@/styles/colors";

import { TextContainer } from "./LabelValue-styles";

interface LabelValueProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  isValueUrl?: boolean;
  isBoldLabel?: boolean;
  isBoldValue?: boolean;
  label: string;
  marginContainer?: string;
  titleColor?: Colors;
  value: string;
  valueColor?: Colors;
  variant?: "small" | "medium" | "large";
}

const LabelValue = ({
  label,
  titleColor = Colors.LIGHT_BLACK,
  isValueUrl,
  isBoldLabel,
  isBoldValue,
  marginContainer,
  value,
  valueColor = Colors.TITLE_COLOR,
  variant,
}: LabelValueProps): JSX.Element => (
  <FlexBlock justify="space-between" margin={marginContainer}>
    <Paragraph
      color={titleColor}
      variant={variant ?? "medium"}
      bold={isBoldLabel}
    >
      {label}
    </Paragraph>

    <TextContainer>
      <Paragraph
        color={valueColor}
        variant={variant ?? "medium"}
        bold={isBoldValue}
      >
        {isValueUrl ? (
          <a href={value} target="_blank" rel="noreferrer">
            {value}
          </a>
        ) : (
          value
        )}
      </Paragraph>
    </TextContainer>
  </FlexBlock>
);
export default LabelValue;
