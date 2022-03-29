'use strict';

/**
 * Re-generate the table in the page, according to the current content of the `exams` list
 * @param {*} exams an `ExamList` to be displayed
 */
function generateTable(exams) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    exams.examList.forEach((exam) => {
        const tr = document.createElement('tr');

        // const td1 = document.createElement('td');
        // td1.textContent = exam.name;
        // const td2 = document.createElement('td');
        // td2.textContent = exam.score;
        // const td3 = document.createElement('td');
        // td3.textContent = exam.date.format('YYYY-MM-DD');
        // tr.appendChild(td1);
        // tr.appendChild(td2);
        // tr.appendChild(td3);
        // tbody.appendChild(tr);

        tr.innerHTML = `<td>${exam.name}</td><td>${exam.score}</td><td>${exam.date.format('YYYY-MM-DD')}</td>`;
        tr.innerHTML += `<td><button type="button" class="btn btn-danger">X</button></td>`;

        const buttonX = tr.querySelector('button');
        buttonX.addEventListener('click', (event) => {
            console.log(`Delete exam ${exam.code}`);
            exams.examList = exams.examList.filter((e) => e.code !== exam.code);
            // re-generate table
            generateTable(exams);
        });

        tbody.appendChild(tr);
    });
    updateAverage(exams);
}

/**
 * Re-compute the average of the exams and display it at the bottom of the table
 * @param {*} exams the `ExamList` to be analyzed
 */
function updateAverage(exams) {
    const average = exams.average();
    document.querySelector('#average').textContent = average;
}

/**
 * Gathers data from the FORM in the page, and adds a new exam to the `ExamList`
 * @param {*} exams the `ExamList` to enrich with the new exam
 */
function addNewExam(exams) {
    const name = document.querySelector('input[name="examname"]').value;
    let score = document.querySelector('input[name="examscore"]').value;
    score = parseInt(score);
    const date = document.querySelector('input[name="examdate"]').value;
    exams.add(new Exam('xxxxx', name, 0, score, date));

    generateTable(exams);
}

// MAIN CODE - RUNS AT "DOM Loaded" EVENT
document.addEventListener('DOMContentLoaded', (event) => {
    const exams = new ExamList();
    exams.add(new Exam('01ABC', 'Web applications I', 6, 30, '2022-03-22'));
    exams.add(new Exam('02XYZ', 'Software Engineering', 8, 28, '2022-02-13'));

    generateTable(exams);

    document.getElementById('addButton').addEventListener('click', (event)=>{
        addNewExam(exams);
    });
});
