import axios from "axios";

const token = localStorage.getItem("token");
const request = axios.create({
  baseURL: "http://18.139.50.74:8080/",
  timeout: 10000,
  headers: { Authorization: "Bearer " + token },
});

export default request;
