// import { createSlice} from "@reduxjs/toolkit";
// import type {  PayloadAction } from "@reduxjs/toolkit";

// interface AuthState {
//   accessToken: string | null;
//   refreshToken: string | null;
// }

// const initialState: AuthState = {
//   accessToken: null,
//   refreshToken: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setTokens: (
//       state,
//       action: PayloadAction<{
//         accessToken: string;
//         refreshToken: string;
//       }>
//     ) => {
//       state.accessToken = action.payload.accessToken;
//       state.refreshToken = action.payload.refreshToken;
//     },

//     logout: (state) => {
//       state.accessToken = null;
//       state.refreshToken = null;
//     },
//   },
// });

// export const { setTokens, logout } = authSlice.actions;
// export default authSlice.reducer;


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
  accessToken: null,
  refreshToken: null,
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
      if (action.payload.roles) state.roles = action.payload.roles;
      if (action.payload.menu) state.menu = action.payload.menu;
      if (action.payload.language) state.language = action.payload.language;
    },

    logout(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.roles = [];
      state.menu = [];
    },
  },
});

export const { setTokens, logout } = authSlice.actions;
export default authSlice.reducer;