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
            const text = await response.text();
            throw new TypeError(text);
        }
    } catch (ex) {
        // network error
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
            throw new TypeError(text);
        }
    } catch (ex) {
        throw ex;
    }
}

async function editExam(exam) {
    const url = APIURL + '/exams';
    try {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(exam),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            return true;
        } else {
            const text = await response.text();
            throw new TypeError(text);
        }
    } catch (ex) {
        throw ex;
    }
}

async function removeExam(code) {
    const url = APIURL+ `/exams/${code}`;
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });
        if(response.ok) {
            return true;
        } else {
            const text = await response.text();
            throw new TypeError(text);
        }
    } catch(ex) {
        throw ex;
    }
}

const API = {addExam, readExams, removeExam, editExam};
export default API ;