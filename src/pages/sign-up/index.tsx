import React from "react";
import dynamic from "next/dynamic";

import { Preloader } from "@/components/common";

const DynamicLogInContent = dynamic(() => import("../../pagesContent/SignUp"), {
  loading: Preloader,
});

const SignUp = () => <DynamicLogInContent />;

export default SignUp;
