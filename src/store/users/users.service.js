import apiClient from "../../utils/apiClient";

const RESOURCE = "user";

const fetchUsers = () => {
    return apiClient.get(RESOURCE);
  };
  const addUser = (data) => {
    return apiClient.post(`${RESOURCE}/create/`,data);
  };
export default { fetchUsers,addUser};
