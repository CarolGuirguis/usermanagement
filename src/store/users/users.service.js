import apiClient from "../../utils/apiClient";
const RESOURCE = "users";

const fetchUsers = () => {
    return apiClient.get(RESOURCE);
  };
export default { fetchUsers};
