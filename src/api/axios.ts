// import axios from "axios";
// import { store } from "../store";
// import { setTokens, logout } from "../store/authSlice";


// export const api = axios.create({
//   baseURL: "http://10.111.70.154:8080", 
//   headers: {
//     "Content-Type": "application/json",
//   },
// });


// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("accessToken"); 
//   if (token && config.headers) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });


// interface FailedRequest {
//   resolve: (token: string | null) => void;
//   reject: (error: unknown) => void;
// }

// let isRefreshing = false;
// let failedQueue: FailedRequest[] = [];

// const processQueue = (error: unknown, token: string | null = null) => {
//   failedQueue.forEach((prom) => {
//     if (error) {
//       prom.reject(error);
//     } else {
//       prom.resolve(token);
//     }
//   });
//   failedQueue = [];
// };

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       if (isRefreshing) {
//         return new Promise(function (resolve, reject) {
//           failedQueue.push({ resolve, reject });
//         })
//           .then((token) => {
//             originalRequest.headers["Authorization"] = "Bearer " + token;
//             return api(originalRequest);
//           })
//           .catch((err) => Promise.reject(err));
//       }

//       originalRequest._retry = true;
//       isRefreshing = true;

//       const refreshToken = localStorage.getItem("refreshToken");

//       try {
     
//         const response = await api.post("/api/v1/auth/refresh-token", {
//           refreshToken,
//         });

//         const newAccessToken = response.data.authenticationToken;
//         const newRefreshToken = response.data.refreshToken;

//         store.dispatch(
//           setTokens({ accessToken: newAccessToken, refreshToken: newRefreshToken })
//         );

//         originalRequest.headers["Authorization"] = "Bearer " + newAccessToken;
//         processQueue(null, newAccessToken);
//         return api(originalRequest);
//       } catch (err) {
//         processQueue(err, null);
//         store.dispatch(logout());
//         return Promise.reject(err);
//       } finally {
//         isRefreshing = false;
//       }
//     }

//     return Promise.reject(error);
//   }
// );

import axios, {
  AxiosError,
} from "axios";
import type{
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
} from "axios";
import { store } from "../store";
import { setTokens, logout } from "../store/authSlice";

interface RefreshResponse {
  authenticationToken: string;
  refreshToken: string;
}

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_TEST,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = store.getState().auth.accessToken;

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = store.getState().auth.refreshToken;

      if (!refreshToken) {
        store.dispatch(logout());
        return Promise.reject(error);
      }

      try {
        const res = await axios.post<RefreshResponse>(
          `${import.meta.env.VITE_APP_API_TEST}/api/v1/auth/refresh`,
          { refreshToken }
        );

        store.dispatch(
          setTokens({
            accessToken: res.data.authenticationToken,
            refreshToken: res.data.refreshToken,
          })
        );

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${res.data.authenticationToken}`;
        }

        return api(originalRequest);
      } catch (refreshError) {
        store.dispatch(logout());
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);