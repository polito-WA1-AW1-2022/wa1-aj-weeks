'use strict';

const sqlite = require('sqlite3');
const dayjs = require('dayjs');
const { Exam } = require('./exam');

const db = new sqlite.Database('transcript.sqlite', (err) => {
    if (err) {
        throw err;
    }
});


function readExams() {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM exam';
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows.map((e) =>
                    new Exam(e.code, e.name, e.cfu, e.score, e.date),
                ));
            }
        });
    });
}

/**
 * Add a new exam to the Database
 * @param {Exam} exam to be inserted
 * @return {Promise} if success, resolve to true, otherwise  reject with error code
 */
function addExam(exam) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO exam (code, name, cfu, date, score) VALUES(?,?,?,?,?)';
        db.run(sql, [exam.code, exam.name, exam.cfu, exam.date, exam.score], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });
}

function updateExam(exam) {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE exam SET name=?, cfu=?, date=?, score=? WHERE code=?';
        db.run(sql, [exam.name, exam.cfu, exam.date, exam.score, exam.code], function (err) {
            if (err) {
                reject(err);
            } else {
                if (this.changes == 0) {
                    reject('Course code not found')
                } else {
                    resolve(true);
                }
            }
        });
    });
}

function deleteExam(code) {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM exam WHERE code=?';
        db.run(sql, [code], function (err) {
            if (err) {
                reject(err);
            } else {
                if (this.changes == 0) {
                    reject('Course code not found')
                } else {
                    resolve(true);
                }
            }
        });


    });
}


module.exports = { readExams, addExam, updateExam, deleteExam };
