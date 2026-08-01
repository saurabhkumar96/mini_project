import db from "../config/db.js";

db.serialize(() => {

    db.run("PRAGMA foreign_keys = ON");

    db.run(
        `CREATE TABLE IF NOT EXISTS StudentDetail (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            roll INTEGER,
            student_class INTEGER,
            section TEXT
        )`,
        (err) => {
            if (err) {
                console.error("StudentDetail table creation failed:", err.message);
                return;
            }

            console.log("StudentDetail table created successfully");
        }
    );

    db.run(
        `CREATE TABLE IF NOT EXISTS StudentAttendance (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            studentDetail_id INTEGER NOT NULL,
            attendance INTEGER NOT NULL DEFAULT 0,
            FOREIGN KEY (studentDetail_id)
                REFERENCES StudentDetail(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE
        )`,
        (err) => {
            if (err) {
                console.error("StudentAttendance table creation failed:", err.message);
                return;
            }

            console.log("StudentAttendance table created successfully");
        }
    );
});

export default db;