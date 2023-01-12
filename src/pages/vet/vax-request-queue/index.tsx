import React from "react";

import { layoutConfig } from "@/utils/configs";
import { MainLayout } from "@/components/layouts";

const VaxRequestQueue = (): JSX.Element => (
  <MainLayout activeConfig={layoutConfig.vet} activeHrefIndex={1} />
);

export default VaxRequestQueue;
