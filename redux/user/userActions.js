export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const TOOGLE_MENU_HIDDEN = "TOGGLE_MENU_HIDDEN";
export const SET_VERIFIED_USER = "SET_VERIFIED_USER";

export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    payload: user,
});

export const toggleMenuHidden = () => ({
    type: TOOGLE_MENU_HIDDEN,
});

export const setVerifiedUser = () => ({
    type: SET_VERIFIED_USER,
    //payload: user,
});