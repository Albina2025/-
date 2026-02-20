import axios from "axios";
import { store } from "../store";
import { setTokens, logout } from "../store/authSlice";


export const api = axios.create({
  baseURL: "http://10.111.70.154:8080", // Backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor: автоматтык Bearer токен кошуу
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken"); // Бул азыр authenticationToken сакталат
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor: 401 → refresh token логикасы
interface FailedRequest {
  resolve: (token: string | null) => void;
  reject: (error: unknown) => void;
}

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = "Bearer " + token;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = localStorage.getItem("refreshToken");

      try {
        const response = await api.post("/api/v1/auth/refresh-token", {
          refreshToken,
        });

        // Backend `authenticationToken` берип жатат
        const newAccessToken = response.data.authenticationToken;
        const newRefreshToken = response.data.refreshToken;

        // Redux + localStorage жаңылоо
        store.dispatch(
          setTokens({ accessToken: newAccessToken, refreshToken: newRefreshToken })
        );

        originalRequest.headers["Authorization"] = "Bearer " + newAccessToken;
        processQueue(null, newAccessToken);
        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);
        store.dispatch(logout());
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
