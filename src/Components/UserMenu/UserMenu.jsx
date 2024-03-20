import { AnimatePresence } from "framer-motion";
import {
  ModalContainerStyled,
  UsernameStyled,
  LinkStyled,
  UserImageStyled,
} from "./UserMenuStyles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, toggleMenuHidden } from "../../../redux/user/userActions";
import {
  CloseButtonContainerStyled,
  CloseButtonStyled,
} from "../cartMenu/cartMenuStyle";
import { BiLogIn } from "react-icons/bi";
import Login from "../../../Pages/Login/Login";
import { Link, useNavigate } from "react-router-dom";
import Submit from "../Submit/Submit";
import { ModalOverlayStyled } from "../cartMenu/cartMenuStyle";
import useRedirect from "../../../hooks/useRedirect";


const UserMenu = () => {

   const HiddenMenu = useSelector (state => state.UserMenu)
   const nav = useNavigate();

  const { currentUser, hiddenMenu } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
    

    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key="cart-user"
        >
          <UsernameStyled>{`Hola ${currentUser.nombre}`}</UsernameStyled>
                <Link to="/userValidation">
                   <Submit>valida tu cuenta</Submit>
                </Link>
           
          <LinkStyled to="/misordenes">
            <h5
              style={{
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "normal",
              }}
            >
              Mis ordenes
            </h5>
          </LinkStyled>
          <span
            
            onClick={() =>{
              dispatch(setCurrentUser(null))
              dispatch(toggleMenuHidden())
              nav("/")
             }
            }
          >
            Cerrar Sesion
          </span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
    </>
  );
};

export default UserMenu;