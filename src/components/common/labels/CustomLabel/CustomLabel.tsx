import React, { ReactNode } from "react";

import {
  LabelDescription,
  LabelDescriptionPropsType,
  SpanRequired,
} from "./CustomLabel-styles";

export interface CustomLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  required?: boolean;
}

const CustomLabel = ({
  children,
  required,
  ...rest
}: CustomLabelProps & LabelDescriptionPropsType): JSX.Element => (
  <LabelDescription {...rest}>
    {children}
    {required && <SpanRequired>*</SpanRequired>}
  </LabelDescription>
);

export default CustomLabel;
