import {
  GET_ACCOUNT_SUCCESS,
  APP_READY,
  SET_LOADING,
  SET_SNACKBAR,
  CLEAR_SNACKBAR,
  SWITCH_AUTH_ERROR,
} from "../actions/app";


const initialState = {
  user: null,
  appReady: false,
  loading: false,
  snackbar: {message: '', open: false},
  pwdrstStatusResult: null,
  pwdrstRequestResult: null,
  emlcnfStatusResult: null,
  squaredCorners: false,
  withBoxShadow: false,
  topNavigation: false,
  sidebar: {
    show: false,
    collapse: true
  },
};


export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.data
      };
    case GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        user: action.data
      };
    case APP_READY:
      return {...state, appReady: true};
    case SET_SNACKBAR:
      return {
        ...state,
        snackbar: {message: action.message, open: true}
      };
    case SWITCH_AUTH_ERROR:
      return {...state, authError: action.data};
    case CLEAR_SNACKBAR:
      return {
        ...state,
        snackbar: {message: '', open: false}
      };
    default:
      return state;
  }
}
