import React, {useEffect} from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../../src/Components/LoginForm/LoginInput';
import Submit from '../../src/Components/Submit/Submit';
import { ValidationContainer,Form } from './userValidationStyles';
import { useDispatch, useSelector } from 'react-redux';
import { UserValidationSchema } from '../../src/Formik/ValidationSchema';
import { setCurrentUser, setVerifiedUser } from '../../redux/user/userActions';
import { UserValidationInitialValues } from '../../src/Formik/InitialValues';
import { verifyUser } from '../../src/axios/axiosUser';


const UserValidation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);

    useEffect(() => {
        const handleVerification = async()=> {
            try{
                if(currentUser) {
                    if(currentUser.verified) {
                        navigate('/Welcome');
                        return;
                    }
                }
                handleVerification();
            }catch(error){
                console.log("Error al intentar validar el usuario");
            }
        };
        handleVerification();
    }, [currentUser, navigate]);

  return (
    <ValidationContainer>
        <h1>Valida tu cuenta</h1>
        <Formik
        initialValues={UserValidationInitialValues}
        validationSchema={UserValidationSchema}
        onSubmit={async values => {
            try {
                await verifyUser(currentUser.email, values.code);
                dispatch(setVerifiedUser());
                navigate("/");
            } catch(error){
                console.log("Error durante la validación", error);
            }
        }}
        >
          <Form>
            <LoginInput name="code" type="text" placeholder="Codigo de validación" />
            <Submit>Completar Validación</Submit>
          </Form>
        </Formik>
    </ValidationContainer>
  );
};

export default UserValidation;