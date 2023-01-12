import React from "react";

import { MainLayout } from "@/components/layouts";
import layoutConfig from "@/utils/configs/Layout";

const BehavioralReporting = () => (
  <MainLayout activeConfig={layoutConfig.kennel} activeHrefIndex={2} />
);

export default BehavioralReporting;
