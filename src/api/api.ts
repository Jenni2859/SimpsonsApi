import axios from "axios";

const api = axios.create({
    baseURL:"https://thesimpsonsquoteapi.glitch.me/quotes",
})

export default api;