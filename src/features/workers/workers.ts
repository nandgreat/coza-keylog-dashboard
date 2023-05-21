import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getStorageIem } from '../../utils/utils'
import { User } from '../../models/user'
import { authApi } from '../../app/services/auth/authService'

const backendURL = 'http://localhost:8000/api/v1'
// const backendURL = 'http://127.0.0.1:5000'

export const workersList = createAsyncThunk(
  'user/workers',
  // @ts-ignore
  async ({ }, { rejectWithValue }) => {
    try {

      var userString = await getStorageIem("user_data");

      var userData: User = JSON.parse(userString!)
      console.log(userData.name + " ------------------");

      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
          "X-Requested-with": "XMLHttpRequest"
        },
      }

      const { data } = await axios.get(
        `${backendURL}/workers`,
        config
      )

      authApi.endpoints.getDetails.useQuery('/workers');

      // store user's token in local storage
      // localStorage.setItem('user_data', data.data.token)

      return data
    } catch (error: any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const registerUser = createAsyncThunk(
  'user/register',
  // @ts-ignore
  async ({ firstName, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      await axios.post(
        `${backendURL}/api/user/register`,
        { firstName, email, password },
        config
      )
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
