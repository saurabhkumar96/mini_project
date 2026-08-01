import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true
})

export const allStudentsDetails = async ()=>{
    try {
        const response = await api.get("/all")
        return response.data
    } catch (error) {
        console.log("Error fetching student details:", error);
    }
}