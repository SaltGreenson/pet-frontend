import { Title } from "@/components/common";
import { Cart, PopUp } from "@/components/elements";
import { ProfileOverviewLayout } from "@/components/layouts";

import editModalConfig from "@/pagesContent/Vet/ProfileContent/config";
import { EditModalWindowConfigType } from "@/types/common.types";
import { IKennelDashboard } from "@/types/kennel.types";
import { IVetDashboard } from "@/types/vet.types";
import React, { useCallback, useMemo, useState } from "react";
import {
  MedicalStaffContainer,
  MedicalStaffTitleContainer,
} from "./Profile-styles";

type PropsTypes = {
  dashboard: IVetDashboard;
};

const ProfileContent = ({ dashboard }: PropsTypes): JSX.Element => {
  const [activeEditPopUpIndex, setActiveActiveEditPopUpIndex] =
    useState<number>(0);

  const [isActivePopUp, setIsActivePopUp] = useState<boolean>(false);

  const editPopUpChildren = useMemo<EditModalWindowConfigType[]>(
    () => editModalConfig({ dashboard, setIsActivePopUp }),
    [dashboard]
  );

  const onClickHandler = useCallback(
    (editPopUpIndex: number) => () => {
      setActiveActiveEditPopUpIndex(editPopUpIndex);
      setIsActivePopUp(true);
    },
    []
  );

  return (
    // TODO: need fix
    <ProfileOverviewLayout
      dashboard={dashboard as unknown as IKennelDashboard}
      informationOnClick={onClickHandler(0)}
      licensingStatusOnClick={onClickHandler(1)}
      contentHeader={
        <MedicalStaffTitleContainer>
          {/* TODO Replace value if isEditMode */}
          <Title type={"edit"} onClick={onClickHandler(2)}>
            Medical Staff
          </Title>
        </MedicalStaffTitleContainer>
      }
    >
      <>
        <MedicalStaffContainer>
          {dashboard.VeterinarianStaff.map(
            ({
              id,
              firstName,
              lastName,
              credentials,
              abbreviatedCredentials,
              position,
              photo,
            }) => (
              <Cart
                key={id}
                id={id}
                firstName={firstName}
                lastName={lastName}
                credentials={credentials}
                abbreviatedCredentials={abbreviatedCredentials}
                position={position}
                photo={photo}
              />
            )
          )}
        </MedicalStaffContainer>

        {isActivePopUp && (
          <PopUp setActive={setIsActivePopUp}>
            {editPopUpChildren[activeEditPopUpIndex].form}
          </PopUp>
        )}
      </>
    </ProfileOverviewLayout>
  );
};

export default ProfileContent;
