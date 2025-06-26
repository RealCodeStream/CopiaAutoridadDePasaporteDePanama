import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:9000",
    withCredentials: false

})

export default instance