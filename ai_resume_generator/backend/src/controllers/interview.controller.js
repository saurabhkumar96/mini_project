const pdfParse = require("pdf-parse")
const generateInterviewReport = require("../services/genAI.service")
const interviewReportModel = require("../models/interviewReport.model")
async function generateInterviewReportController(req, res) {
    const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
    const { selfDescription, jobDescription } = req.body

    const interviewReportbyAi = await generateInterviewReport({
        resume: resumeContent,
        selfDescription,
        jobDescription
    })
    console.log(interviewReportbyAi)
    const interViewReport = await interviewReportModel.create({
        user: req.user.id,
        resume: resumeContent.text,
        selfDescription,
        jobDescription,
        ...interviewReportbyAi

    })

    res.status(201).json({ message: "Interview report generated successfully", interviewReport })
}

async function getInterviewReportController(req,res) {
    const {interviewId} = req.params.id
    const interViewReport = await interviewReportModel.findOne({_id:interviewId, user:req.user.id})
    if(!interViewReport) {
        return res.status(404).json({message:"Interview report not found"})
    }
    res.status(200).json({message:"Interview report fetched successfully",interViewReport})
}

async function getInterviewReportController(req, res){
    const interviewReports = await interviewReportModel.find({user:req.user.id})
    res.status(200).json({message:"Interview report fetched successfully",interviewReports})
}

module.exports = { generateInterviewReportController, getInterviewReportController, getInterviewReportController }