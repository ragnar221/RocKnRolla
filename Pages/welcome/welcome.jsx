import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Submit from '../../src/Components/Submit/Submit';
import { WelcomeContainer,WelcomeWrapper, WelcomeForm } from './welcomeStyles';

const Welcome = () => {
    const { currentUser } = useSelector(state => state.user);

    
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
            <h1>Valida tu cuenta</h1>
            <Link to="/userValidation" >
               <Submit>ir a validacion de cuenta</Submit>
            </Link>  
        </WelcomeContainer> }
    </WelcomeWrapper>
  )
}
export default Welcome;