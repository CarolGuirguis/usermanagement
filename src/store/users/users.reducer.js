import UsersActionTypes from "./users.types";
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
  
      
      default:
        return state;
    }
  };
  
  export default userReducer;
    