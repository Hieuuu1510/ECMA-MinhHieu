import axios from "axios";

const instace = axios.create({
    baseURL: "https://dj0r17-8080.preview.csb.app/api",
});

export default instace