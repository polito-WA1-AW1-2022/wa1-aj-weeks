import { Exam } from "./exam";

const APIURL = 'http://localhost:3001/api/v1';

async function readExams() {
    const url = APIURL + '/exams';
    try {
        const response = await fetch(url);
        if (response.ok) {
            // process the response
            const list = await response.json();
            const examsList = list.map((e)=>new Exam(e.code, e.name, e.cfu, e.score, e.date));
            return examsList;
        } else {
            // application error (404, 500, ...)
            console.log(response.statusText);
            const text = await response.text();
            throw new TypeError(text);
        }
    } catch (ex) {
        // network error
        console.log(ex);
        throw ex;
    }
}

async function addExam(exam) {
    const url = APIURL + '/exams';
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(exam),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            return true;
        } else {
            const text = await response.text();
            console.log(text);
            throw new TypeError(text);
        }
    } catch (ex) {
        console.log(ex);
        throw ex;
    }
}

export {addExam, readExams};