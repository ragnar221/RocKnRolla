import { createSlice } from "@reduxjs/toolkit";
import { SET_CURRENT_USER, SET_VERIFIED_USER, TOOGLE_MENU_HIDDEN } from "./userActions";

const INITIAL_STATE = {
    currentUser: null,
    hiddenMenu: true,
};

const userSlice = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOOGLE_MENU_HIDDEN:
          return {
            ...state,
            hiddenMenu: !state.hiddenMenu,
          };
        case SET_CURRENT_USER:
          return {
            ...state,
            currentUser: action.payload,
          };
          case SET_VERIFIED_USER: state => {
            if(state.currentUser) {
              state.currentUser.verified = true;
              }
            };
        default:
          return state;
      }
    };
    
    export default userSlice;
