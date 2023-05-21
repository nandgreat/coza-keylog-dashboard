import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'http://localhost:8000/api/v1/';

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  "X-Requested-with": "XMLHttpRequest",
  'Accept': 'application/json'
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 10000;

axiosClient.defaults.withCredentials = true;


export default axiosClient;