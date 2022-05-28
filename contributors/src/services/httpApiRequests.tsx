import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
    baseURL: "https://pp-api-desafio.herokuapp.com"
};

export const client: AxiosInstance = axios.create(config);