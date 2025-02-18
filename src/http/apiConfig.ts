import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 15000,
    headers: {
        "Content-Type": 'application/json'
    }
});

const checkErrors = (error: AxiosError) => {
    if (!error.response || !error.response.status) {
        return Promise.reject(error);
    }
    console.error(error.response.data);
    return Promise.reject(error);
}

axiosInstance.interceptors.response.use(null, checkErrors);
export default axiosInstance;

