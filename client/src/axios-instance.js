import axios from "axios";

const instance = axios.create({
  baseURL: "https://build-a-burger-5c46e.firebaseio.com/"
});

export default instance;
