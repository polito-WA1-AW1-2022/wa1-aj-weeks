'use strict';

const PORT = 3001;

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const dao = require('./dao');

const app = express();
app.use(morgan('common'));
app.use(express.json());
app.use(cors());


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


app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}/`);
});
