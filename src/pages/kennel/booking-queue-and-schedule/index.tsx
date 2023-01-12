import React from "react";

import { MainLayout } from "@/components/layouts";
import { layoutConfig } from "@/utils/configs";

const BookingQueue = () => (
  <MainLayout activeConfig={layoutConfig.kennel} activeHrefIndex={1} />
);

export default BookingQueue;
