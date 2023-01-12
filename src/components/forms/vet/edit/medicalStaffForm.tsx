import React from "react";
import { useForm } from "react-hook-form";
import EditModal from "../../../elements/EditModal";

import CustomButton from "@/components/common/CustomButton";
import DropDown from "@/components/common/DropDown";
import { IVeterinarianStaff } from "@/types/vet.types";
import { MedicalStaffFields } from "../fields";

import { CustomBlock, FlexBlock } from "@/components/common/Block/block-styles";

import { Colors } from "@/styles/colors";

type MedicalStaffFormProps = {
  staff?: IVeterinarianStaff[];
  setIsActivePopUp: (value: boolean) => void;
};

const MedicalStaffForm = ({
  staff,
  setIsActivePopUp,
}: MedicalStaffFormProps): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <EditModal
      onSubmit={handleSubmit((data) => {
        console.log(data);
        setIsActivePopUp(false);
      })}
      title="Edit Profile"
      subTitle="Medical staff"
      setActive={setIsActivePopUp}
    >
      {staff &&
        staff.map((worker) => (
          <CustomBlock key={worker.id} margin="0 0 2rem 0">
            <DropDown label={`${worker.lastName} ${worker.firstName}`}>
              <MedicalStaffFields
                defaultValues={{
                  staff: worker,
                }}
                formValues={{
                  errors,
                  register,
                }}
              />
            </DropDown>
          </CustomBlock>
        ))}

      <FlexBlock margin="3rem 0 0 0" justify="flex-end">
        <CustomBlock width="80px" maxHeight="32px">
          <CustomButton
            buttonType="text"
            border={`1px solid ${Colors.BLUE}`}
            fontSize="16px"
            width="100%"
            height="100%"
          >
            + Add
          </CustomButton>
        </CustomBlock>
      </FlexBlock>
    </EditModal>
  );
};

export default MedicalStaffForm;
