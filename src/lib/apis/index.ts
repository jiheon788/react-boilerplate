import axios from 'axios';

const host = process.env.REACT_APP_SERVER_URL;

export const customAxios = axios.create({
  baseURL: host,
});

/**
 * 디버깅 코드
 */
customAxios.interceptors.response.use(
  (response) => {
    console.log('response success: ', response);
    return response;
  },
  (error) => {
    console.log('response error: ', error);
    return Promise.reject(error);
  },
);
