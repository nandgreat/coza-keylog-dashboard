import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../../../models/user';
import { getStorageIem } from '../../../utils/utils';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://coza-keylog-backend.awtab.com/api/v1/',
    prepareHeaders: async (headers) => {

      var userString = await getStorageIem("user_data");

      var userData: User = JSON.parse(userString!)

      const token = userData.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
        return headers
      }
    },
  }),
  endpoints: (build) => ({
    getDetails: build.query({
      query: (workers: string) => ({
        url: workers,
        method: 'GET',
      }),
    }),
  }),
})

// export react hook
export const { useGetDetailsQuery } = authApi
