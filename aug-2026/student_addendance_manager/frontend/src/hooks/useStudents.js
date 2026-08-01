import { allStudentsDetails } from "../services/student.api.js";

export const useStudents = ()=>{
    async function getAllStudentsDetails() {  
        const data = await allStudentsDetails()
        return data
    }
    return {getAllStudentsDetails}
}