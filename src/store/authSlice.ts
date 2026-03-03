import { createSlice} from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

export interface MenuItem {
  parent: string;
  children: string[];
}

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  roles: string[];
  menu: MenuItem[];
  language: string;
}

const initialState: AuthState = {
   accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken"),
  roles: [],
  menu: [],
  language: "RU",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens(
      state,
      action: PayloadAction<{
        accessToken: string;
        refreshToken: string;
        roles?: string[];
        menu?: MenuItem[];
        language?: string;
      }>
    ) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;

      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);

      const { roles, menu, language } = action.payload;

      if (roles) state.roles = roles;
      if (menu) state.menu = menu;
      if (language) state.language = language;
    },

    logout(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.roles = [];
      state.menu = [];

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    },
  },
});

export const { setTokens, logout } = authSlice.actions;
export default authSlice.reducer;