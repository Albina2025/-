// import {ResponseHandler} from '@reduxjs/toolkit/dist/query/fetchBaseQuery'
// import {FetchArgs} from '@reduxjs/toolkit/query/react'
// import {apiSlice} from './apiSlice'

// declare type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
// declare type RequestCache = 'default' | 'no-cache' | 'reload' | 'force-cache';
// export declare type Args = {
//   url: FetchArgs['url'];
//   body?: Record<string, unknown>;
//   method?: Method;
//   cache?: RequestCache;
//   tags?: any;
//   credentials?: 'include' | 'same-origin' | 'omit';
//   headers?: Headers | string[][] | Record<string, string | undefined> | undefined;
//   responseHandler?: ResponseHandler | undefined
// };
// export const customApiSlice = () => {
//   return apiSlice.injectEndpoints({
//     endpoints: (builder) => ({
//       listener: builder.query({
//         query: ({
//                   url,
//                   body,
//                   method = 'GET',
//                   cache = 'default',
//                   headers,
//                 }: Args) => ({
//           url: url,
//           method,
//           body,
//           cache,
//           credentials: 'include',
//           headers,
//         }),
//         providesTags: (__, _, arg) =>
//           !!arg ? (arg.tags ? arg.tags : [arg.url.split('/')[0]]) : [],
//       }),
//       speaker: builder.mutation({
//         query: ({
//                   url,
//                   body,
//                   method = 'POST',
//                   cache = 'default',
//                   headers,
//                   responseHandler,
//                 }: Args) => ({
//           url: url,
//           method,
//           body,
//           cache,
//           credentials: 'include',
//           headers,
//           responseHandler,
//         }),
//         invalidatesTags: (__, _, arg) =>
//           !!arg ? (arg.tags ? arg.tags : [arg.url.split('/')[0]]) : [],
//       }),
//     }),
//     overrideExisting: true,
//   })
// }

// export const {
//   useLazyListenerQuery,
//   useListenerQuery,
//   useSpeakerMutation,
// } = customApiSlice()
