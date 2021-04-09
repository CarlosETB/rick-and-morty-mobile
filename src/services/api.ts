import axios from "axios";

const api = axios.create({
    method: 'get',
    baseURL: "https://rickandmortyapi.com/api/character",
});

export default api;