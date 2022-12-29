import axios, { Axios, AxiosRequestConfig } from "axios";

const baseUrl = "https://restructure-api.blacklistng.com/public";

export const axiosInstance = new Axios({ baseURL: baseUrl });

export const login = (url: string, data: any, config?: AxiosRequestConfig) => {
  return new Promise(async (res, rej) => {
    try {
      const result = await axiosInstance.post(url || "/api/login", data, {
        ...config,
      });
      res(result);
    } catch (err) {
      rej(err);
    }
  });
};

export const refresh = (
  url: string,
  token: string,
  config?: AxiosRequestConfig
) => {
  return new Promise(async (res, rej) => {
    try {
      const result = await axiosInstance.post(
        url || "/api/refresh_token",
        null,
        { ...config, headers: { authorization: "Bearer " + token } }
      );
      res(result);
    } catch (err) {
      rej(err);
    }
  });
};

export const logout = (
  url: string,
  token: string,
  config?: AxiosRequestConfig
) => {
  return new Promise(async (res, rej) => {
    try {
      const result = await axiosInstance.post(url || "/api/logout", null, {
        ...config,
        headers: { authorization: "Bearer " + token },
      });
      res(result);
    } catch (err) {
      rej(err);
    }
  });
};
