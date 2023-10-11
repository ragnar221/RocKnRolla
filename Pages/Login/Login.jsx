import { Formik } from "formik";
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
import useRedirect from "../../hooks/useRedirect";
import { loginUser } from "../../src/axios/axiosUser";
import { setCurrentUser } from "../../redux/user/userSlice";


const Login = () => {
  useRedirect("/");
  return (
    <LoginContainerStyled>
      <h1>Iniciar sesion</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
            const user = await loginUser(values.email, values.password)
           if (user) {
            dispatch(setCurrentUser({
              ...user.usuario,
              token: user.token
            }))
           }
         }}
      >
        <Form>
          <LoginInput name="email" type="text" placeholder="Email" />
          <LoginInput name="password" type="password" placeholder="Password" />
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
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;