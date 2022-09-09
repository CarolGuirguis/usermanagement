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
  export const addUserStart = (payload) => ({
    type: UsersActionTypes.ADD_USER_START,
    payload,
  });
  
  export const addUserSuccess = (post) => ({
    type: UsersActionTypes.ADD_USER_SUCCESS,
    payload: post,
  });
  
  export const addUserFailure = (errorMessage) => ({
    type: UsersActionTypes.ADD_USER_FAILURE,
    payload: errorMessage,
  });
  export const editUserStart = (payload) => ({
    type: UsersActionTypes.EDIT_USER_START,
    payload,
  });
  
  export const editUserSuccess = (post) => ({
    type: UsersActionTypes.EDIT_USER_SUCCESS,
    payload: post,
  });
  
  export const editUserFailure = (errorMessage) => ({
    type: UsersActionTypes.EDIT_USER_FAILURE,
    payload: errorMessage,
  });
  export const deleteUserStart = (payload) => ({
    type: UsersActionTypes.DELETE_USER_START,
    payload,
  });
  
  export const deleteUserSuccess = (id) => ({
    type: UsersActionTypes.DELETE_USER_SUCCESS,
    payload: id,
  });
  
  export const deleteUserFailure = (errorMessage) => ({
    type: UsersActionTypes.DELETE_USER_FAILURE,
    payload: errorMessage,
  });
  export const fetchUsers = () => async (dispatch) => {
    dispatch(fetchUsersStart());

    try {
      const response = await usersService.fetchUsers();
      console.log(response.data);
      
      dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
      
      dispatch(fetchUsersFailure(error.message));
    }
  };

  export const addUser = (payload) => async (dispatch) => {
    dispatch(addUserStart(payload));

    try {
      const response = await usersService.addUser(payload);
      console.log(response.data);
      
      dispatch(addUserSuccess(response.data));
      dispatch(fetchUsers());
    } catch (error) {
      console.log(error.message);
      dispatch(addUserFailure(error.message));
    }
  };

  export const editUser = (id,field,value) => async (dispatch) => {
    dispatch(editUserStart());

    try {
      console.log()
      const response = await usersService.editUser(id,field,value);
      
      console.log(response.data);
      
      dispatch(editUserSuccess(response.data));
      dispatch(fetchUsers());
    } catch (error) {
      
      dispatch(editUserFailure(error.message));
    }
  };
  export const deleteUser = (id) => (dispatch) => {
    dispatch(deleteUserStart());
    usersService.deleteUser(id)
      .then((response) => {
        console.log(response)
        dispatch(deleteUserSuccess(id));
        dispatch(fetchUsers());
      })
      .catch((error) => dispatch(deleteUserFailure(error.message)));
  };