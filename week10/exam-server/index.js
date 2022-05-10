'use strict';

const express = require('express');
const dao = require('./dao');

const app = express();
app.use(express.json());

const PREFIX = '/api/v1';

app.get(PREFIX + '/exams', (req, res) => {
    dao.readExams().then(
        (value) => {
            res.json(value);
        }
    ).catch(
        (err) => {
            res.status(500).json({ error: err });
        }
    );
});

app.post(PREFIX + '/exams', async (req, res) => {
    // console.log(req.body.code);
    const exam = req.body;
    try {
        const value = await dao.addExam(exam);
        res.end();
    } catch (e) {
        res.status(400).json({ error: e });
    }
});



app.listen(3000, () => { console.log('server running') });