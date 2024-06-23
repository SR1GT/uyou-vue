import axios from "axios";

const service = axios.create({
  baseURL: "https://api.uyou.com/",
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    // console.log("RequestStart");
    return config;
  },
  (error) => {
    // console.log("RequestError");
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    // console.log("ResponseEnd");
    return response;
  },
  (error) => {
    // console.log("ResponseError");
    return Promise.reject(error);
  }
);

export default service;
