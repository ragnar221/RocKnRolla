import { Formik, useFormik } from "formik";
import React from "react";
import LoginInput from "../../src/Components/LoginForm/LoginInput";
import {
  Form,
  LoginContainerStyled,
  LoginPasswordStyled,
  LoginEmailStyled,
} from "./LoginStyle";
import Submit from "../../src/Components/Submit/Submit";
import { Link } from "react-router-dom";
import { loginValidationSchema } from "../../src/Formik/ValidationSchema";
import { loginInitialValues } from "../../src/Formik/InitialValues";
import { setCurrentUser, toggleHiddenMenu } from "../../redux/user/userSlice";
import * as emailValidator from "email-validator"
import { useDispatch } from "react-redux";
import useRedirect from "../../hooks/useRedirect";



export const Login = () => {

  const dispatch = useDispatch();
  useRedirect("/")

  return (
    <LoginContainerStyled>
      <h1>Iniciar sesion</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        validateOnChange={true}
        onSubmit={(values, {resetForm}) => {
            console.log(values, "logging in");
            const userLog = (values.email, values.password)
            resetForm();
            if (userLog) {
              dispatch(setCurrentUser({
                ...userLog.usuario,
                token: userLog.token
              }))
            }
         }}
      >
        {({touched, errors}) => (
        <Form>
          <LoginInput name="email" type="text" placeholder="Email" isError={errors.email && touched.email} />
          <LoginInput name="password" type="password" placeholder="Password" isError={errors.password && touched.password} />
          <Link to="/recuperarpassword">
            <LoginPasswordStyled>
              ¿Olvidaste la contraseña? Reestablecela
            </LoginPasswordStyled>
          </Link>
          <Submit>Ingresar</Submit>
          <Link to="/register">
            <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
          </Link>
        </Form>
        )
      }
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;