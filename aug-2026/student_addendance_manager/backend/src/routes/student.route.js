import express from 'express';
const router = express.Router();
import db from '../config/db.js';

router.get('/all', (req, res) => {
    const selectAllQuery = `SELECT * FROM StudentDetail`
    db.all(selectAllQuery, [], (err, rows) => {
        if (err) return console.err(err, message)
        console.table(rows)
        res.json({ data: rows })
    })
})

router.post("/student-add", (req, res) => {
    db.run(`
        INSERT INTO StudentDetail (name, roll, student_class, section) VALUES
        ('Aarav Sharma', 1, 1, 'A'),
        ('Vivaan Patel', 2, 1, 'A'),
        ('Aditya Verma', 3, 1, 'B'),
        ('Krishna Nair', 4, 1, 'B'),
        ('Anaya Singh', 5, 2, 'A'),
        ('Diya Gupta', 6, 2, 'A'),
        ('Ishita Mehta', 7, 2, 'B'),
        ('Riya Kapoor', 8, 2, 'B'),
        ('Arjun Reddy', 9, 3, 'A'),
        ('Kabir Joshi', 10, 3, 'A'),
        ('Saanvi Iyer', 11, 3, 'B'),
        ('Meera Das', 12, 3, 'B'),
        ('Atharv Mishra', 13, 4, 'A'),
        ('Reyansh Rao', 14, 4, 'A'),
        ('Aanya Chawla', 15, 4, 'B'),
        ('Myra Bansal', 16, 4, 'B'),
        ('Shaurya Kulkarni', 17, 5, 'A'),
        ('Pari Saxena', 18, 5, 'A'),
        ('Vihaan Malhotra', 19, 5, 'B'),
        ('Kiara Sethi', 20, 5, 'B'),
        ('Dhruv Jain', 21, 6, 'A'),
        ('Avni Yadav', 22, 6, 'A'),
        ('Yash Thakur', 23, 6, 'B'),
        ('Navya Arora', 24, 6, 'B'),
        ('Rohan Deshmukh', 25, 7, 'A'),
        ('Tanvi Goyal', 26, 7, 'A'),
        ('Pranav Pillai', 27, 7, 'B'),
        ('Sneha Roy', 28, 7, 'B'),
        ('Harsh Vora', 29, 8, 'A'),
        ('Nidhi Agarwal', 30, 8, 'B');
    `, function (err) {
        if (err) {
            console.error("Error inserting students:", err);
            return res.status(500).json({
                success: false,
                message: "Failed to insert student data",
                error: err.message
            });
        }

        res.status(201).json({
            success: true,
            message: "30 students inserted successfully",
            rowsAffected: this.changes
        });
    });
});


router.post("/mark-attendance/:id", (req, res) => {
    const id = req.params.id
    const inserQuery = `INSERT INTO StudentAttendance(studentDetail_id, attendance) VALUES(?,?)`
    db.run(inserQuery, [id,true],(err)=>{
        if(err) return console.error("show error", err.message)
        res.json({
            success: true,
        })
    })
})

router.get("/mark-attendance/:id",(req,res)=>{
    const id = req.params.id;
    const selectQuery = `SELECT * FROM StudentAttendance WHERE studentDetail_id=?`
    db.all(selectQuery, [id],(err,row)=>{
        if(err) return console.error("show error", err.message)
        res.json({
            message: row
        })
    })
})
router.get("/view-attendance", (req,res)=>{
    const selectAllQuery = `SELECT * FROM StudentAttendance jOIN StudentDetail ON StudentAttendance.studentDetail_id = StudentDetail.id`
    db.all(selectAllQuery, [], (err, rows) => {
        if (err) return console.error("show error", err.message)
        res.json({
            message: rows
        })
    })
})

export default router;