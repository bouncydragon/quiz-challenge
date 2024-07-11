import Axios from 'axios';

export const axios = Axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  params: {
    apiKey: `${import.meta.env.VITE_API_KEY}`,
  },
  timeout: 40000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export const fetcher = (url: string, params: Record<string, any> = {}) => {
  return axios.get(url, { params }).then((res) => {
    if (!res.data) {
      throw new Error('No data found');
    }
    return res.data;
  });
};
