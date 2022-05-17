const APIURL = 'http://localhost:3001/api/v1';

async function readExams() {
    const url = APIURL + '/exams';
    try {
        const response = await fetch(url);
        if (response.ok) {
            // process the response
            const list = await response.json();
            return list;
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


window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loadButton').addEventListener('click', async () => {
        const data = await readExams();
        document.getElementById('result').innerText = data.map((e) => e.name);
    });

    document.getElementById('addButton').addEventListener('click', () => {
        addExam({ code: '99ZZZ', name: 'Test Exam', score: 31, date: '2022/05/17', cfu: 8 });
    });
});
