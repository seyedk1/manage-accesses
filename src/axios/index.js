import interceptor from './interceptor';
import axios from 'axios';

// global axios defaults
axios.defaults.baseURL = "http://localhost:9000";
// axios.defaults.timeout = 3000;
// add interceptors
axios.interceptors.request.use(interceptor.request, interceptor.requestError);
axios.interceptors.response.use(interceptor.response, interceptor.responseError);


