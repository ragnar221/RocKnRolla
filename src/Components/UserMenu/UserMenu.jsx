import { AnimatePresence } from "framer-motion";
import {
  ModalContainerStyled,
  UsernameStyled,
  LinkStyled,
  UserImageStyled,
} from "./UserMenuStyles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { setCurrentUser, toggleHiddenMenu } from "../../../redux/user/userSlice";
import {
  CloseButtonContainerStyled,
  CloseButtonStyled,
} from "../cartMenu/cartMenuStyle";
import { BiLogIn } from "react-icons/bi";
import Login from "../../../Pages/Login/Login";
import { Link } from "react-router-dom";
import Submit from "../Submit/Submit";


const UserMenu = () => {
  const { currentUser, hiddenMenu } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key="cart-user"
        >
          <UsernameStyled>{`Hola ${currentUser.email}`}</UsernameStyled>
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
              dispatch(toggleHiddenMenu())
             }
            }
          >
            Cerrar Sesion
          </span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default UserMenu;