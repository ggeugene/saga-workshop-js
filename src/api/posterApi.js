import axios from "axios";

function posterApi() {
  const client = axios.create({
    baseURL: process.env.REACT_APP_API_POSTER_BASE_URL,
  });

  client.interceptors.request.use(
    (req) => {
      req.params = { apiKey: process.env.REACT_APP_API_KEY, ...req.params };
      return req;
    },
    (err) => Promise.reject(err)
  );

  return client;
}

export default posterApi();
