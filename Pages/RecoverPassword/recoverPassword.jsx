import React from 'react';
import { RecoverContainer, Form } from './recoverPasswordStyles';
import LoginInput from '../../src/Components/LoginForm/LoginInput';
import { Formik} from 'formik';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import useRedirect from '../../hooks/useRedirect';

const RecoverPassword = () => {

     const dispatch = useDispatch();
     useRedirect("/")

  return (
    <RecoverContainer>
        <h2>introduce el codigo que te acabamos de enviar a tu direccion de email junto a tu nueva contraseña</h2>
        <Formik
          onSubmit={async(values) =>{
            const user = await recoverPassword( values.code, values.password )
          } }
        >
         <Form>   
            <LoginInput name="code" type="text" placeholder="codigo de recuperacion" />
            <LoginInput name="password" type="password" placeholder="contraseña" />
          </Form>
        </Formik>
    </RecoverContainer>
  )
}

export default RecoverPassword;