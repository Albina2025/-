// import {createApi, FetchArgs, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import {logOut, login} from './reducers/authSlice'
// import {BASE_AUTH_URL, BASE_URL, cookieStatus} from '../utils/constants'
// import {RootState} from './store'
// import {useAppSelector, useLocalStorage} from '../hooks'
// import {Path} from '../utils'

// const baseQuery = fetchBaseQuery({
//   baseUrl: `${BASE_URL}`,
//   credentials: 'include',
//   prepareHeaders: (headers, {getState}) => {
//     const token = (getState() as RootState).auth.token
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`)
//     }
//     return headers
//   },
// })

// const baseQueryWithReauth = async (args: string | FetchArgs, api: any, extraOptions: Record<string, any>) => {
//   const refreshToken = useLocalStorage('refreshToken').getStorage()
//   let response: any = await baseQuery(args, api, extraOptions)

//   if (response?.error?.status === 401) {
//     if (cookieStatus) {
//         api.dispatch(logOut())
//         window.open(BASE_AUTH_URL + `/login`, '_self')
//     } else {
//       const refreshResult = await baseQuery({
//         url: Path.Auth.refreshToken,
//         method: 'POST',
//         body: {
//           refreshToken: refreshToken,
//         },
//       }, api, extraOptions)
//       if (refreshResult?.data) {
//         const profile = api.getState().auth.profile
//         api.dispatch(login({...refreshResult.data, profile}))
//         response = await baseQuery(args, api, extraOptions)
//       } else {
//         api.dispatch(logOut())
//       }
//     }
//   }
//   return response
// }


// export const apiSlice = createApi({
//   reducerPath: 'authApi',
//   tagTypes: [
//     'ChatMessages',
//     'ChatMembers',
//     'Template',
//     'Notification',
//     'Answers',
//     'Guid',
//     'Note',
//     'Task',
//     'Setting',
//     'Employee',
//     'Resolution',
//     'News',
//     'Comment',
//     'Position',
//     'Reference',
//     'Region',
//     'RefResolution',
//     'DocumentType',
//     'Phone',
//     'Email',
//     'Staffing',
//     'Inquiry',
//     'Nomenclature',
//     'Organ',
//     'Information',
//     'Division',
//     'Structure',
//     'Type',
//     'EmployeeAction',
//     'Certificate',
//     'DocumentAction',
//     'DocumentDelete',
//     'PersonalCard',
//     'Reassign',
//     'Assignment',
//     'DeleteDoc',
//     'InternalPhone',
//     'Photo',
//     'GetToEdit',
//     'DepartmentData',
//   ],
//   baseQuery: baseQueryWithReauth,
//   endpoints: () => ({}),
// })