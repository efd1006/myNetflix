import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import { validationSchema } from "../action/validationSchema";
import { signUpSubmit } from "../action/signUpSubmit";
import SignUpInputs from "../components/SignUpComponents/SignUpInputs";
import SignInRedirect from "../components/SignUpComponents/SignInRedirect";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;
interface FormValuesInterface {
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignUpView: React.FC = (props: any) => {
  const initialValues: FormValuesInterface = {
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  return (
    <Wrapper>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={initialValues}
        onSubmit={signUpSubmit}
        validationSchema={validationSchema}>
        {(props: { errors: string }) => <SignUpInputs {...props} />}
      </Formik>
      <SignInRedirect />
    </Wrapper>
  );
};
export default SignUpView;
