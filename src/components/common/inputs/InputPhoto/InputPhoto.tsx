import React from "react";
import Image from "next/image";
import { UseFormRegisterReturn } from "react-hook-form";

import {
  CircleBlock,
  ErrorLabel,
  Pen,
  RelativeBlock,
} from "@/components/common";

import { Colors } from "@/styles/colors";
import { StyledPhotoInput } from "./InputPhoto-styles";

interface InputPhotoProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  imageUrl?: string;
  register?: UseFormRegisterReturn<string>;
}
// TODO: Error should to depend files.length
const InputPhoto = ({
  error,
  imageUrl,
  register,
  ...props
}: InputPhotoProps): JSX.Element => (
  <RelativeBlock width="5rem" maxHeight="5rem">
    <CircleBlock width="5rem" bgColor={Colors.DARK_GREY}>
      {imageUrl && <Image src={imageUrl} width={100} height={100} alt="" />}

      <CircleBlock
        width={"1.5rem"}
        bgColor={Colors.LIGHT_GREY}
        right={"0"}
        bottom={"0"}
        isAbsolute
      >
        <StyledPhotoInput
          type="file"
          accept="image/png,image/jpeg"
          {...register}
          {...props}
        />
      </CircleBlock>
      <Pen />
    </CircleBlock>
    {error && <ErrorLabel>{error}</ErrorLabel>}
  </RelativeBlock>
);

export default InputPhoto;
