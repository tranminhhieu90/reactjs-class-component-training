import {
  SET_LOCALE,
  SAVE_TOKEN,
  REMOVE_TOKEN,
  SAVE_USER_INFO,
  REMOVE_USER_INFO,
  GET_USER_INFO,
  RESTORE_TOKEN,
} from './constants';

export const restoreToken = (isRestore) => {
  return {
    type: RESTORE_TOKEN,
    payload: {
      isRestore,
    },
  };
};

export const saveToken = (token) => {
  return {
    type: SAVE_TOKEN,
    payload: {
      token,
    },
  };
};

export const removeToken = () => {
  return {
    type: REMOVE_TOKEN,
  };
};

export const getUserInfo = (token) => {
  return {
    type: GET_USER_INFO,
    payload: {
      token,
    },
  };
};

export const saveUserInfo = (userInfo, token) => {
  return {
    type: SAVE_USER_INFO,
    payload: {
      userInfo,
      token,
    },
  };
};

export const removeUserInfo = () => {
  return {
    type: REMOVE_USER_INFO,
  };
};

export const setLocale = (locale) => {
  return {
    type: SET_LOCALE,
    payload: {
      locale,
    },
  };
};
