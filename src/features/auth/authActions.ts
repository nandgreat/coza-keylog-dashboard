import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../api/axios_instance'
import { BASEURL } from '../../utils/constants'

export const userLogin = createAsyncThunk(
  'user/login',
  // @ts-ignore
  async ({ email, password }, { rejectWithValue }) => {
    try {

      console.log(`${email} ${password} ------------------`);

      const { data } = await axiosInstance.post('login', { email, password });

      console.log(data);


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
        `${BASEURL}/api/user/register`,
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
