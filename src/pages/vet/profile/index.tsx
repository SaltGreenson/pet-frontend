import React from "react";

import layoutConfig from "../../../utils/configs/Layout";
import { MainLayout } from "@/components/layouts";

const Profile = (): JSX.Element => (
  <MainLayout activeConfig={layoutConfig.vet} activeHrefIndex={0} />
);

export default Profile;
