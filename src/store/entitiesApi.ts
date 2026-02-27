// import { apiSlice } from '../store/apiSlice'
// import { Path } from '../utils/Path'

// export const entitiesApi = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({

//     // =====================
//     // AI CRUD
//     // =====================

//     getAIList: builder.query({
//       query: (params) => ({
//         url: Path.AI.base,
//         method: 'GET',
//         params,
//       }),
//       providesTags: ['AI'],
//     }),

//     createAI: builder.mutation({
//       query: (body) => ({
//         url: Path.AI.base,
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['AI'],
//     }),

//     updateAI: builder.mutation({
//       query: ({ id, body }) => ({
//         url: `${Path.AI.base}/${id}`,
//         method: 'PUT',
//         body,
//       }),
//       invalidatesTags: ['AI'],
//     }),

//     deleteAI: builder.mutation({
//       query: (id) => ({
//         url: `${Path.AI.base}/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['AI'],
//     }),

//     // =====================
//     // SOFTWARE CRUD
//     // =====================

//     getSoftwareList: builder.query({
//       query: (params) => ({
//         url: Path.Software.base,
//         method: 'GET',
//         params,
//       }),
//       providesTags: ['Software'],
//     }),

//     createSoftware: builder.mutation({
//       query: (body) => ({
//         url: Path.Software.base,
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['Software'],
//     }),

//     updateSoftware: builder.mutation({
//       query: ({ id, body }) => ({
//         url: `${Path.Software.base}/${id}`,
//         method: 'PUT',
//         body,
//       }),
//       invalidatesTags: ['Software'],
//     }),

//     deleteSoftware: builder.mutation({
//       query: (id) => ({
//         url: `${Path.Software.base}/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Software'],
//     }),

//     // =====================
//     // PRIVATE SECTOR CRUD
//     // =====================

//     getPrivateSectorList: builder.query({
//       query: (params) => ({
//         url: Path.PrivateSector.base,
//         method: 'GET',
//         params,
//       }),
//       providesTags: ['PrivateSector'],
//     }),

//     createPrivateSector: builder.mutation({
//       query: (body) => ({
//         url: Path.PrivateSector.base,
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['PrivateSector'],
//     }),

//     updatePrivateSector: builder.mutation({
//       query: ({ id, body }) => ({
//         url: `${Path.PrivateSector.base}/${id}`,
//         method: 'PUT',
//         body,
//       }),
//       invalidatesTags: ['PrivateSector'],
//     }),

//     deletePrivateSector: builder.mutation({
//       query: (id) => ({
//         url: `${Path.PrivateSector.base}/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['PrivateSector'],
//     }),

//   }),
//   overrideExisting: true,
// })

// export const {
//   useGetAIListQuery,
//   useCreateAIMutation,
//   useUpdateAIMutation,
//   useDeleteAIMutation,

//   useGetSoftwareListQuery,
//   useCreateSoftwareMutation,
//   useUpdateSoftwareMutation,
//   useDeleteSoftwareMutation,

//   useGetPrivateSectorListQuery,
//   useCreatePrivateSectorMutation,
//   useUpdatePrivateSectorMutation,
//   useDeletePrivateSectorMutation,

// } = entitiesApi