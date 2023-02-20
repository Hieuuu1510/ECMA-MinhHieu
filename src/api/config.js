import axios from "axios";

const instace = axios.create({
    baseURL: "https://j0osum-8080.preview.csb.app/api",
});

export default instace