// axios 请求封装

import axios from "axios";

const service = axios.create({
  baseURL: "http://127.0.0.1:4523/m1/2427238-0-default/api",
  timeout: 5000,
  withCredentials: true,
});

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  (config) => {
    const token = "token";
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截器
 */

service.interceptors.response.use(
  (response) => {
    return new Promise((resolve) => {
      const res = response.data;
      if (response.status === 200) resolve(res);
    });
  },
  (error) => {
    console.log("响应错误");
  }
);

export default service;
