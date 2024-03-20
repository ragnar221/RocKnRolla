import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Submit from '../../src/Components/Submit/Submit';
import { WelcomeContainer,WelcomeWrapper, WelcomeForm } from './welcomeStyles';
import { setCurrentUser, toggleMenuHidden } from '../../redux/user/userActions';
import { LinkStyled } from '../../src/Components/UserMenu/UserMenuStyles';


const Welcome = () => {


    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();

    
  return (
    <WelcomeWrapper>
        {currentUser?.verified ? (
            <WelcomeContainer>
                <h1>Bienvenido {`${currentUser.nombre}`}</h1>
                <Link to="/">
                   <Submit>Ir al Home</Submit>
                </Link> 
            </WelcomeContainer>
        ): <WelcomeContainer>
            <h1>¡Ya casi terminas!</h1>
            <h2>ingresa el codigo de validación que te enviamos a tu dirección de email</h2>
               <LinkStyled>
               <Link to="/userValidation">
                 <Submit>Validar tu usuario</Submit>
               </Link>
               </LinkStyled>
        </WelcomeContainer> }
    </WelcomeWrapper>
  )
}
export default Welcome;