import UsersActionTypes from "./users.types.js";
import usersService from "./users.service";
export const fetchUsersStart = () => ({
    type: UsersActionTypes.FETCH_USERS_START,
  });
  
  export const fetchUsersSuccess = (users) => ({
    type: UsersActionTypes.FETCH_USERS_SUCCESS,
    payload: users,
  });
  
  export const fetchUsersFailure = (errorMessage) => ({
    type: UsersActionTypes.FETCH_USERS_FAILURE,
    payload: errorMessage,
  });
  export const fetchUsers = () => async (dispatch) => {
    dispatch(fetchUsersStart());
  
    try {
      const response = await usersService.fetchUsers();
      console.log(response.data);
      console.log("here");
      dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
      console.log(error.message);
      dispatch(fetchUsersFailure(error.message));
    }
  };