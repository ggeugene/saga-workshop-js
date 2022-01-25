import axios from "axios";

function dataApi() {
  const client = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
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

export default dataApi();
