'use strict';

const sqlite = require('sqlite3');
const dayjs = require('dayjs');


/**
 * Constructor function for new Exam objects
 * @param {string} code course code (e.g., '01ABC')
 * @param {string} name course name
 * @param {number} cfu number of credits (e.g. 6)
 * @param {number} score score attained at the exam
 * @param {string} date date of the exam, in a format parseable by dayjs()
 */
function Exam(code, name, cfu, score, date) {
    this.code = code;
    this.name = name;
    this.cfu = cfu;
    this.score = score;
    this.date = dayjs(date);
}


/**
 * 
 */
function ExamList() {
    const db = new sqlite.Database('./week03/transcript.sqlite', (err) => {
        if (err) {
            throw err;
        }
    });

    this.add = (exam) => {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO exam (code, name, cfu, date, score) VALUES(?,?,?,?,?)';
            db.run(sql, [exam.code, exam.name, exam.cfu, exam.date, exam.score], (err)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            });
        });
    };

    this.getAll = () => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM exam';
            db.all(sql, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows.map((e) =>
                        new Exam(e.code, e.name, e.cfu, e.score, e.date)
                    ));
                }
            });
        });
    };

    this.getFirst = async () => {
        const list = await this.getAll();
        if (list.length==0) {
            throw new Error('Empty List!');
        } else {
            return list[0];
        }
    };
}


// MAIN CODE

/**
 * 
 */
async function main() {
    console.log(1);
    const exams = new ExamList();

    // exams.add(new Exam('66zzz', 'title', 6, 24, '2021-09-01'))
    //     .then((result)=>{
    //         console.log('Successfully inserted');
    //     }).catch((err)=>{
    //         console.log('Error in insert', err);
    //     });

    // exams.getAll().then((list)=>{console.log(list);});

    try {
        await exams.add(new Exam('ZZZZZZ', 'title', 6, 24, '2021-09-01'));
    } catch (error) {
        console.log('Insert was not possible');
    }

    const myexams = await exams.getAll();
    console.log(myexams);
    const firstExam = await exams.getFirst();
    console.log(firstExam.score);
    return 3;
}

main();
console.log(2);
