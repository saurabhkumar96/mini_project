import { useContext } from "react"
import {generateInterviewReport,getAllInterViewReport,getInterViewReportById} from "../services/interview.api"
import { InterviewContext } from "../interview.context"

export const useInterview = () => {
    const {loading, setLoading, report, setReport, reports, setReports} = useContext(InterviewContext)
    
    const generateReport = async ({jobDescription, selfDescription, resume}) => {
        setLoading(true)
        const data = await generateInterviewReport({jobDescription, selfDescription, resume})
        setReport(data)
        setLoading(false)
    }

    const getAllReports = async () => {
        setLoading(true)
        const data = await getAllInterViewReport()
        setReports(data)
        setLoading(false)
    }

    const getReportById = async (id) => {
        setLoading(true)
        const data = await getInterViewReportById(id)
        setReport(data)
        setLoading(false)
    }

    return {loading, report, reports, generateReport, getAllReports, getReportById}
}