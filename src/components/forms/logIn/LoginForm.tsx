import React from "react";
import { useForm } from "react-hook-form";

import {
  Checkbox,
  CustomBlock,
  CustomButton,
  CustomInput,
  CustomLink,
  FlexBlock,
} from "@/components/common";

import { emailRegExp } from "@/utils/helpers/emailRegExp.helpers";

import { Colors } from "@/styles/colors";

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <CustomBlock>
        <CustomInput
          label="Email or username"
          type="text"
          placeholder="Enter email or username"
          marginContainer="3rem 0 0 0"
          register={register("email", {
            required: {
              value: true,
              message: "Enter the email",
            },
            pattern: {
              value: emailRegExp,
              message: "Invalid email address",
            },
          })}
          error={errors.email && String(errors.email.message)}
        />

        <CustomInput
          label="Password"
          type="password"
          placeholder="Enter password"
          marginContainer="1.5rem 0 0 0"
          register={register("password", {
            required: {
              value: true,
              message: "Enter the password",
            },
          })}
          error={errors.password && String(errors.password.message)}
        />
        <FlexBlock justify="space-between" align="center" margin="1.5rem 0 0 0">
          <Checkbox label="Remember me" />

          <CustomLink href="#" color={Colors.LABEL_COLOR} bold>
            Forget password?
          </CustomLink>
        </FlexBlock>
        <FlexBlock align="center" justify="center" margin="3rem 0 0 0">
          <CustomButton buttonType="outline" width="100%" type="submit">
            Log In
          </CustomButton>
        </FlexBlock>
      </CustomBlock>
    </form>
  );
};

export default LoginForm;
