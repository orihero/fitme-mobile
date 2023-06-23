import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { AuthService } from "../services";
import { ErrorType } from "../types";

let oauthRequestInterceptor: number;

const replayRequest = async (params: any, authHeader?: string) => {
  const originalRequest = { ...params.originalRequest };

  if (authHeader) {
    originalRequest.headers = {
      ...originalRequest.headers,
      Authorization: authHeader,
    };
  } else {
    const oauth = await AuthService.getToken();

    originalRequest.headers = {
      ...originalRequest.headers,
      Authorization: `Bearer ${oauth?.access_token}`,
    };
  }

  try {
    const response = await axios(originalRequest);

    params.resolve(response);
  } catch (e) {
    params.reject(e);
  }
};

export const setOauthRequestInterceptor = (oauth: string) => {
  oauthRequestInterceptor = axios.interceptors.request.use(
    // @ts-ignore
    (config: AxiosRequestConfig) => {
      config.headers = { ...config.headers, Authorization: oauth };
      return config;
    }
  );
};

export const removeOauthInterceptor = () => {
  axios.interceptors.request.eject(oauthRequestInterceptor);
};

export const enableApiErrorInterceptor = () => {
  // axios.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   (error: AxiosError) => {
  //     return error;
  //     return new Promise((resolve, reject) => {
  //       // token expired
  //       if (error.response?.status === 401) {
  //         // AuthService.refreshOauthToken((authHeader: string) => {
  //         //   replayRequest(
  //         //     {
  //         //       originalRequest: error.config,
  //         //       resolve,
  //         //       reject,
  //         //     },
  //         //     authHeader
  //         //   );
  //         // }).catch((x) => reject(x));
  //         // if (AuthService.waitForNewToken) {
  //         //   const intervalId = setInterval(() => {
  //         //     if (!AuthService.waitForNewToken) {
  //         //       clearInterval(intervalId);
  //         //       replayRequest({
  //         //         originalRequest: error.config,
  //         //         resolve,
  //         //         reject,
  //         //       });
  //         //     }
  //         //   }, 200);
  //         // } else {
  //         //   // console.warn('old token', AuthService.getAuthToken());
  //         //   AuthService.refreshOauthToken((authHeader: string) => {
  //         //     replayRequest(
  //         //       {
  //         //         originalRequest: error.config,
  //         //         resolve,
  //         //         reject,
  //         //       },
  //         //       authHeader
  //         //     );
  //         //   }).catch((x) => reject(x));
  //         // }
  //       } else {
  //         // ErrorService.apiLogError(error);
  //         console.log("-----------", JSON.stringify(error, null, "\t"));

  //         reject(
  //           !error.response?.status
  //             ? <ErrorType>{
  //                 code: 0,
  //                 error: true,
  //                 message: "Network Error",
  //               }
  //             : error.response?.data
  //         );
  //       }
  //     });
  //   }
  // );
};
