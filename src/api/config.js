import axios from "axios";

const instace = axios.create({
    baseURL: "https://22vu50-8080.preview.csb.app/api",
});

export default instace