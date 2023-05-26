import axios, { AxiosInstance } from 'axios';
import { BASEURL } from '../utils/constants';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = BASEURL;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASEURL, // Set the base URL for your API
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
  },
  timeout: 40000,
  withCredentials: true
});


//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 10000;

axiosClient.defaults.withCredentials = true;


export default axiosClient;

