import axios, { AxiosRequestConfig } from "axios";
import { combineUrls, combineConfig } from "../utils/api";

const ApiService = {
  get: <R>(url: string, config?: AxiosRequestConfig): Promise<R> => {
    return new Promise((resolve, reject) => {
      axios
        .get<R>(combineUrls(url), combineConfig(config))
        .then((response) => resolve(response.data))
        .catch((error) => reject(error.response));
    });
  },

  post: <R, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<R> => {
    return new Promise((resolve, reject) => {
      axios
        .post<R>(combineUrls(url), data, combineConfig(config))
        .then((response) => resolve(response.data))
        .catch((error) => reject(error.response));
    });
  },

  put: <R, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<R> => {
    return new Promise((resolve, reject) => {
      axios
        .put<R>(combineUrls(url), data, combineConfig(config))
        .then((response) => resolve(response.data))
        .catch((error) => reject(error.response));
    });
  },

  patch: <R, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<R> => {
    return new Promise((resolve, reject) => {
      axios
        .patch<R>(combineUrls(url), data, combineConfig(config))
        .then((response) => resolve(response.data))
        .catch((error) => reject(error.response));
    });
  },

  delete: <R>(url: string, config?: AxiosRequestConfig): Promise<R> => {
    return new Promise((resolve, reject) => {
      axios
        .delete<R>(combineUrls(url), combineConfig(config))
        .then((response) => resolve(response.data))
        .catch((error) => reject(error.response));
    });
  },
};

export default ApiService;
