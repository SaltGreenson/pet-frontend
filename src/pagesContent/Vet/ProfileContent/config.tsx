import React from "react";

import {
  LicensingStatusForm,
  MedicalStaffForm,
  PersonalForm,
} from "@/components/forms";

import { IVetDashboard } from "@/types/vet.types";
import { EditModalWindowConfigType } from "@/types/common.types";

type ConfigProps = {
  dashboard: IVetDashboard;
  setIsActivePopUp: (value: boolean) => void;
};

const editModalConfig = ({
  dashboard,
  setIsActivePopUp,
}: ConfigProps): EditModalWindowConfigType[] => [
  {
    form: (
      <PersonalForm dashboard={dashboard} setIsActivePopUp={setIsActivePopUp} />
    ),
  },
  {
    form: (
      <LicensingStatusForm
        documents={dashboard.LegalDocuments}
        setIsActivePopUp={setIsActivePopUp}
      />
    ),
  },
  {
    form: (
      <MedicalStaffForm
        staff={dashboard.VeterinarianStaff}
        setIsActivePopUp={setIsActivePopUp}
      />
    ),
  },
];

export default editModalConfig;
