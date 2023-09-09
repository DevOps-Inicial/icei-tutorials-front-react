import axios from "axios";

export default axios.create({
    // Colocamos la direccion base de backend
    baseURL: "http://localhost:9030/api/v1",
    headers: {
        "Content-type": "application/json"
    }
});
