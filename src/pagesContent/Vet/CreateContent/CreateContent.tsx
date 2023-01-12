import React from "react";
import { useForm } from "react-hook-form";

import {
  ContactFields,
  LicensingStatusFields,
  MedicalStaffFields,
  PersonalFields,
} from "@/components/forms";
import { CustomButton, DropDown } from "@/components/common";

import { Colors } from "@/styles/colors";

import {
  ContentWrapper,
  EditProfileContainer,
  SubmitBtnWrap,
} from "./Create-styles";
import { FlexBlock } from "@/components/common/";
import { CustomBlock } from "@/components/common/Block";

type PropsTypes = {
  isChangesPersonal?: boolean;
  isChangesContacts?: boolean;
  isChangesLicensingStatus?: boolean;
  isChangesMedicalStaff?: boolean;
};

const CreateContent = ({
  isChangesPersonal,
  isChangesContacts,
  isChangesLicensingStatus,
  isChangesMedicalStaff,
}: PropsTypes): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <EditProfileContainer>
        <ContentWrapper>
          <CustomBlock id={"personal"}>
            <DropDown label={"Personal"} isClicked={isChangesPersonal}>
              <PersonalFields formValues={{ errors, register }} />
            </DropDown>
          </CustomBlock>

          <CustomBlock margin={"3rem 0 0 0"} id={"contacts"}>
            <DropDown label={"Contacts"} isClicked={isChangesContacts}>
              <ContactFields formValues={{ errors, register, control }} />
            </DropDown>
          </CustomBlock>

          <CustomBlock margin={"3rem 0 0 0"} id={"licensingStatus"}>
            <DropDown
              label={"Licensing status"}
              isClicked={isChangesLicensingStatus}
            >
              <LicensingStatusFields formValues={{ errors, register }} />
            </DropDown>
          </CustomBlock>

          <CustomBlock margin={"3rem 0 0 0"} id={"medicalStaff"}>
            <DropDown label={"Medical Staff"} isClicked={isChangesMedicalStaff}>
              <MedicalStaffFields
                formValues={{
                  errors,
                  register,
                }}
              />
              <FlexBlock margin={"3rem 0 0 0"} justify={"flex-end"}>
                <CustomBlock width={"80px"} maxHeight={"32px"}>
                  <CustomButton
                    buttonType={"text"}
                    border={`1px solid ${Colors.BLUE}`}
                    fontSize={"16px"}
                    width={"100%"}
                    height={"100%"}
                  >
                    + Add
                  </CustomButton>
                </CustomBlock>
              </FlexBlock>
            </DropDown>
          </CustomBlock>

          <SubmitBtnWrap>
            <CustomButton buttonType={"outline"}>Save</CustomButton>
          </SubmitBtnWrap>
        </ContentWrapper>
      </EditProfileContainer>
    </form>
  );
};

export default CreateContent;
