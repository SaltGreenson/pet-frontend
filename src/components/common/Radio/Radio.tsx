import React from "react";

import { Paragraph } from "@/components/common";

import { Colors } from "@/styles/colors";
import { Container, Input, Label, RadioBox } from "./radio-styles";

interface IRadioProps {
  radioArray: Array<RadioArray>;
  onChange: React.FormEventHandler<HTMLDivElement> | undefined;
}

type RadioArray = {
  defaultChecked?: boolean;
  title: string;
};

const Radio = ({ radioArray, onChange }: IRadioProps) => (
  <Container onChange={onChange}>
    {radioArray.map((radio, index) => (
      <Label id={radio.title} key={index}>
        <Input
          defaultChecked={radio.defaultChecked}
          id={radio.title}
          name="location"
          type="radio"
          value={radio.title}
        />
        <RadioBox />
        <Paragraph bold={true} color={Colors.TITLE_COLOR} fontSize="16px">
          {radio.title}
        </Paragraph>
      </Label>
    ))}
  </Container>
);

export default Radio;
