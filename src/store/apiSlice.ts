// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { RootState } from './index'
// import { logout, setTokens } from './authSlice'

// const baseQuery = fetchBaseQuery({
//   baseUrl: import.meta.env.VITE_BASE_URL, // же BASE_URL
//   credentials: 'include',
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as RootState).auth.accessToken

//     if (token) {
//       headers.set('authorization', `Bearer ${token}`)
//     }

//     return headers
//   },
// })

// const baseQueryWithReauth: typeof baseQuery = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions)

//   if (result?.error?.status === 401) {
//     const refreshToken = (api.getState() as RootState).auth.refreshToken

//     const refreshResult = await baseQuery(
//       {
//         url: '/auth/refresh',
//         method: 'POST',
//         body: { refreshToken },
//       },
//       api,
//       extraOptions
//     )

//     if (refreshResult?.data) {
//       api.dispatch(setTokens(refreshResult.data as any))
//       result = await baseQuery(args, api, extraOptions)
//     } else {
//       api.dispatch(logout())
//     }
//   }

//   return result
// }

// export const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery: baseQueryWithReauth,
//   tagTypes: ['PrivateSector', 'AI', 'User'], // сенин сущностьтер
//   endpoints: () => ({}),
// })