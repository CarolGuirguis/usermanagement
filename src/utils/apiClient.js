import axios from "axios";
const header = "63159280c5ea96d0e7919990";
export default axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  headers: {
    "Content-Type": "application/json",
    "app-id": ` ${header}`,
  },
});
