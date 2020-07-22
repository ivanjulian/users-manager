import axios from 'axios';

export const tooledAxios = axios.create({
  baseURL: 'http://77.120.241.80:8911/api',
});

tooledAxios.defaults.headers.put['Content-Type'] = 'application/json';
tooledAxios.defaults.headers.post['Content-Type'] = 'application/json';

tooledAxios.interceptors.request.use(
  (config) => {
    console.log('method: ', config.method);
    return config;
  },
  (error) => {
    console.log('Here will be routing to ErrorPage');
    return Promise.reject(error);
  }
);

tooledAxios.interceptors.response.use(
  (config) => {
    if (config.config.method === 'put' || 'post' || 'delete') {
      console.log(config.method);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
