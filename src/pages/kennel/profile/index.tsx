import React from "react";

import { MainLayout } from "@/components/layouts";

import layoutConfig from "@/utils/configs/Layout";

const Profile = () => (
  <MainLayout activeConfig={layoutConfig.kennel} activeHrefIndex={0} />
);

export default Profile;
