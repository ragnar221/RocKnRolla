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

import { useDispatch } from "react-redux";
import useRedirect from "../../hooks/useRedirect";
import { loginUser } from "../../src/axios/axiosUser";



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
        onSubmit={ async (values) => {
          console.log(values, "logging in");
            const user = await loginUser (values.email, values.password);
            if (user) {
              dispatch(setCurrentUser({
                ...user.usuario,
                token: user.token
              }))
            }
         }}
      >
        {({touched, errors}) => (
        <Form>
          <LoginInput name="email" type="email" placeholder="Email" isError={errors.email && touched.email} />
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