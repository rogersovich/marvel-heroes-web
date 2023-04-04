import axios from "axios";

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts: 1,
    apikey: "b8c9e061a442a3d1588f17b7c1d117ac",
    hash: "19c68b35a55124e1f6bf6120552d1f14"
  }
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default api;
