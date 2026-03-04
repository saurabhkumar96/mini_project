import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

export const generateInterviewReport = async ({ resume, selfDescription, jobDescription }) => {
    const formData = new FormData();
    formData.append("selfDescription", selfDescription);
    formData.append("jobDescription", jobDescription);
    formData.append("resume", resume);

    const response = await api.post("/api/interview", formData, {
        headers:{
            "Content-Type": "multipart/form-data"
        }
    })
    return response.data
}

export const getInterViewReportById = async (interviewId)=>{
    const response = await api.get(`/api/interview/${interviewId}`)
    return response.data
}

export const getAllInterViewReport = async ()=>{
    const response = await api.get(`/api/interview/`)
    return response.data
}