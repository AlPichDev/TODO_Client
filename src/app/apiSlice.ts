import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { ITask } from './types'

export let apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: ['Task'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api'}),
    endpoints: builder => ({
        register: builder.mutation({
            query: body => ({
                url: '/user/register',
                method: 'POST',
                body: body,
            })
        }),
        login: builder.mutation({
            query: body => ({
                url: '/user/login',
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ['Task']
        }),
        createTask: builder.mutation({
            query: task => ({
                url: '/tasks',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: task,
            }),
            invalidatesTags: ['Task']
        }),
        getTasks: builder.query<ITask[], void>({
            query: () => ({
                url: '/tasks',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            }),
            providesTags: ['Task']
        }),
        updateTask:builder.mutation({
            query: ({id, ...task}) => ({
                url: `/tasks/${id}`,
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: task,
            }),
            invalidatesTags: ['Task']
        }),
        deleteTask:builder.mutation({
            query: id => ({
                url: `/tasks/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            }),
            invalidatesTags: ['Task']
        }),
    }),
})

export let {
    useCreateTaskMutation,
    useGetTasksQuery,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
    useLoginMutation,
    useRegisterMutation
} = apiSlice