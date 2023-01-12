import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import {
  CustomButton,
  CustomLabel,
  ErrorLabel,
  Img,
  CustomBlock,
} from "@/components/common";
import { IPhotoGallery } from "@/types/vet.types";

import { PhotoContainer, StyledInputFile } from "./InputFile-styles";

interface InputFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
  acceptsPhotos?: boolean;
  error?: string;
  isInPopUp?: boolean;
  label?: string;
  marginContainer?: ".5rem 0 0 0" | "0 0 0 .5rem" | string;
  photoGallery?: Array<IPhotoGallery>;
  register?: UseFormRegisterReturn<string>;
}

const InputFile = ({
  acceptsPhotos,
  error,
  isInPopUp,
  label,
  marginContainer,
  photoGallery,
  register,
  required,
  ...props
}: InputFileProps): JSX.Element => (
  <CustomBlock margin={marginContainer}>
    {label && <CustomLabel required={required}>{label}</CustomLabel>}

    <CustomBlock>
      {photoGallery && (
        <PhotoContainer>
          {photoGallery.map((photo) => (
            <Img
              key={photo.id}
              width="120px"
              height="120px"
              src={photo.url}
              isInPopUp={isInPopUp}
              needDisplay
            />
          ))}
        </PhotoContainer>
      )}

      <CustomBlock
        width="49px"
        maxHeight="15px"
        margin={!acceptsPhotos ? ".5rem 0 0 0" : "0"}
      >
        <StyledInputFile
          type={"file"}
          accept={acceptsPhotos ? "image/png, image/jpeg" : "application/pdf"}
          {...register}
          {...props}
        />

        <CustomButton
          buttonType="text"
          fontSize="16px"
          width="100%"
          height="100%"
        >
          + Add
        </CustomButton>
      </CustomBlock>
    </CustomBlock>

    {error && <ErrorLabel>{error}</ErrorLabel>}
  </CustomBlock>
);

export default InputFile;
