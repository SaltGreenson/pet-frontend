import React from "react";

import { CustomButton, CustomInput } from "@/components/common";
import { useForm } from "react-hook-form";

import { SignUpForm } from "./SignUpForm-styles";

const SignUpOwnerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <SignUpForm onSubmit={handleSubmit((data) => console.log(data))}>
      <CustomInput
        label="First name"
        type="text"
        placeholder="e. g. Alexandra"
        register={register("name", {
          required: {
            value: true,
            message: "Enter first name",
          },
        })}
        error={errors.name && String(errors.email?.message)}
      />
      <CustomInput
        label="Last name"
        type="text"
        placeholder="e. g. Alexandra"
        register={register("name", {
          required: {
            value: true,
            message: "Enter last name",
          },
        })}
        error={errors.name && String(errors.email?.message)}
      />
      <CustomInput
        label="Email address"
        type="text"
        placeholder="e. g. alexandra@gmail.com"
        register={register("email", {
          required: {
            value: true,
            message: "Enter the email",
          },
        })}
        error={errors.email && String(errors.email.message)}
      />
      <CustomInput
        label="Password"
        type="password"
        register={register("password", {
          required: {
            value: true,
            message: "Enter the password",
          },
        })}
        error={errors.password && String(errors.password.message)}
      />
      <CustomButton buttonType="outline" width="100%" type="submit">
        Create account
      </CustomButton>
    </SignUpForm>
  );
};

export default SignUpOwnerForm;
