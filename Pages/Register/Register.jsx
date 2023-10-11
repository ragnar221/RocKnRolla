import { Formik } from "formik";
import React from "react";
import LoginInput from "../../src/Components/LoginForm/LoginInput";
import {
  Form,
  LoginContainerStyled,
} from "./RegisterStyle";
import { Link } from "react-router-dom";
import { createUser } from "../../src/axios/axiosUser";
import useRedirect from "../../hooks/useRedirect";
import { registerInitialValues } from "../../src/Formik/InitialValues";
import { registerValidationSchema } from "../../src/Formik/ValidationSchema";
import Submit from "../../src/Components/Submit/Submit";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";

const Register = () => {
  const dispatch = useDispatch();
  useRedirect("/")

  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          const user = await createUser(values.name, values.email, values.password);
          actions.resetForm();
          if (user) {
            dispatch(setCurrentUser({
              ...user.usuario
            }))
          }
        }}
      >
        <Form>
          <LoginInput name="name" type="text" placeholder="Nombre" />
          <LoginInput name="email" type="text" placeholder="Email" />
          <LoginInput name="password" type="password" placeholder="Password" />
          <Submit>Registrarse</Submit>
          <Link to="/Login">
            <Submit style={{ color: "black" }}>Volver al login</Submit>
          </Link>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;