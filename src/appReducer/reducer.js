import {
  SAVE_TOKEN,
  REMOVE_TOKEN,
  SAVE_USER_INFO,
  REMOVE_USER_INFO,
  SET_LOCALE,
  GET_USER_INFO,
  RESTORE_TOKEN,
  CHANGE_PATIENT_MODE,
} from './constants';

const initialState = {
  token: null,
  userInfo: null,
  isRestore: false,
  locale: 'jp',
  isCheckedPatientMode: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTORE_TOKEN: {
      const { isRestore } = action.payload;
      return {
        ...state,
        isRestore,
      };
    }
    case SAVE_TOKEN: {
      const { token } = action.payload;
      return {
        ...state,
        token,
      };
    }
    case REMOVE_TOKEN: {
      return {
        ...state,
        token: null,
      };
    }
    case GET_USER_INFO: {
      const { token } = action.payload;
      return {
        ...state,
        token,
      };
    }
    case SAVE_USER_INFO: {
      const { userInfo, token } = action.payload;
      return {
        ...state,
        userInfo,
        token,
      };
    }
    case REMOVE_USER_INFO: {
      return {
        ...state,
        userInfo: null,
      };
    }
    case SET_LOCALE: {
      const { locale } = action.payload;
      return {
        ...state,
        locale,
      };
    }
    case CHANGE_PATIENT_MODE: {
      const { isCheckedPatientMode } = action.payload;
      return {
        ...state,
        isCheckedPatientMode,
      };
    }
    default:
      return state;
  }
};

export default appReducer;