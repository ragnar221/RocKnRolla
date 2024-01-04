import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Submit from '../../src/Components/Submit/Submit';
import { WelcomeContainer,WelcomeWrapper, WelcomeForm } from './welcomeStyles';

const Welcome = () => {
    const { currentUser } = useSelector(state => state.user);
    Navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Bienvenido');

    
  return (
    <WelcomeWrapper>
        {currentUser?.verified ? (
            <WelcomeContainer>
                <h1>Bienvenido {`${currentUser.name}`}</h1>
                <Submit onClick={Navigate="/Home"} >Ir al Home</Submit>
            </WelcomeContainer>
        ): <WelcomeContainer>
            <h1>Valida tu cuenta</h1>
        </WelcomeContainer> }
    </WelcomeWrapper>
  )
}
export default Welcome;