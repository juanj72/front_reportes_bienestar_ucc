import axios from "axios";

const ENDPOINT_PATH = "http://127.0.0.1:8000/api/";


export default {
  register(username, password) {
    const user = { username, password };
    return axios.post(ENDPOINT_PATH + "auth/token/", user);
  },
};