import UsersActionTypes from "./users.types";
import {
  addNewUser,
  updateUserDetails,
  deleteUser
} from "../../utils/modifier";
import { act } from "@testing-library/react";
const initialState = {
    isFetching: false,
    status: "idle",
    data: [],
    details: {},
    related: [],
    errorMessage: null,
    message: null,
  };
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
     
      case UsersActionTypes.FETCH_USERS_START:
        return {
          ...state,
          isFetching: true,
        };
      case UsersActionTypes.FETCH_USERS_SUCCESS:
        
        return {
          ...state,
          isFetching: false,
          data: action.payload,
        };
      case UsersActionTypes.FETCH_USERS_FAILURE:
        return {
          ...state,
          isFetching: false,
          errorMessage: action.payload,
        };
        case UsersActionTypes.ADD_USER_START:
          return {
            ...state,
            isFetching: true,
          };
        case UsersActionTypes.ADD_USER_SUCCESS:
          return {
            ...state,
            data: addNewUser(state.data.data, action.payload),
            isFetching: false,
          };
        case UsersActionTypes.ADD_USER_FAILURE:
          return {
            ...state,
            isFetching: false,
            errorMessage: action.payload,
          };
          case UsersActionTypes.EDIT_USER_START:
            return {
              ...state,
              isFetching: true,
            };
          case UsersActionTypes.EDIT_USER_SUCCESS:
            return {
              ...state,
              data: updateUserDetails(state.data, action.payload),
              isFetching: false,
            };
          case UsersActionTypes.EDIT_USER_FAILURE:
            return {
              ...state,
              isFetching: false,
              errorMessage: action.payload,
            };
            case UsersActionTypes.DELETE_USER_START:
              return {
                ...state,
                isFetching: true,
              };
            case UsersActionTypes.DELETE_USER_SUCCESS:
              return {
                ...state,
                data: deleteUser(state.data.data, action.payload),
                isFetching: false,
              };
            case UsersActionTypes.DELETE_USER_FAILURE:
              return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
              };
      
      default:
        return state;
    }
  };
  
  export default userReducer;
    