import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "./actionTypes";

import { AuthActions, AuthState } from "./types";

const INITIALSTATE: AuthState = {
  pending: false,
  token: "",
  error: null,
};

const reducers = (state = INITIALSTATE, action: AuthActions) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        pending: false,
        token: "",
        error: payload.error,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        pending: false,
        token: payload.token,
        error: null,
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        token: payload.token,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        token: "",
        error: payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;