import axios from "axios";

const api = axios.create({
  // baseURL: "http://127.0.0.1:3333"
  baseURL: "https://rocketmovies-a5gv.onrender.com"
});

export {
  api
}