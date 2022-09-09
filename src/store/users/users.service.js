import apiClient from "../../utils/apiClient";

const RESOURCE = "user";

const fetchUsers = () => {
    return apiClient.get(`${RESOURCE}?created=1`);
  };
  const addUser = (data) => {
    console.log(data)
    return apiClient.post(`${RESOURCE}/create/`,data);
  };
  const editUser = (userId,field,value) => {
    var user = {};
    user[field]=value;
    console.log(userId);
    console.log(user);
    return apiClient.put(`${RESOURCE}/${userId}`,user
     
   );
  };
  const deleteUser = (userId) => {
    return apiClient.delete(`${RESOURCE}/${userId}`);
  };
export default { fetchUsers,addUser,editUser,deleteUser};
