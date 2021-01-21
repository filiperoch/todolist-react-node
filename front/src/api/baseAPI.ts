import axios from "axios";
import apiConfig from '../config/api.json';

const getApiBase = () => {

    const apiBaseUrl:string = apiConfig.local;
    // const apiBaseUrl = apiConfig.dev;
    // const apiBaseUrl = apiConfig.prod;

    const api = axios.create({
        baseURL: apiBaseUrl
    });

    return api;
}

export default getApiBase;
