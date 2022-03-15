'use strict';

const sqlite = require('sqlite3');
const db = new sqlite.Database('./week03/transcript.sqlite', (err) => {
    if (err) {
        throw err;
    }
});

const sql = 'SELECT * FROM exam';

/**
 * 
 */
function courseNames() {
    return new Promise((resolve, reject) => {
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                const names = rows.map((exam) => exam.name);
                resolve(names);
            }
        });
    });
}

const namesPromise = courseNames();

namesPromise.then((values)=>{
    console.log(values);
}).catch((err) => {
    console.log(err);
});

