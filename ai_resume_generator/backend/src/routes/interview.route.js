const express = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const interviewController = require("../controllers/interview.controller")
const upload = require("../middlewares/file.middleware")

const router=  express.Router()


router.post("/",authMiddleware.authMiddleware, upload.single("resume"), interviewController.generateInterviewReportController)
router.get("/:interviewID", authMiddleware.authMiddleware, interviewController.getInterviewReportController)
router.get("/", authMiddleware.authMiddleware, interviewController.getInterviewReportController)

module.exports = router