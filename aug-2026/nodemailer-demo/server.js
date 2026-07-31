import express from 'express'
import nodemailer from "nodemailer"
const app = express()
app.use(express.json())

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'liliana.hamill@ethereal.email',
        pass: 'eds3zYPWmHxJBdHUJw'
    }
});

app.get("/", async(req, res)=>{
    try {
        const info = await transporter.sendMail({
            from: "liliana.hamill@ethereal.email",
            to: "saurabb25@gmail.com",
            subject: "test",
            text: "test"

        })

        console.log("message-sent: %s", info.messageId);
        console.log("preview url: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.log(error)
    }
    res.json({message: "success"})
})

const port = 3000
app.listen(port, () => console.log(`server running on port http://localhost:${port}`))