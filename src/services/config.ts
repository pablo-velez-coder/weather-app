import axios from "axios";

export const BASE_URL = `http://api.openweathermap.org/data/2.5/`;

export const Axios = axios.create({
    baseURL: BASE_URL,
})