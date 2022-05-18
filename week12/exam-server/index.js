'use strict';

const PORT = 3001;

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {  validationResult, body, param } = require('express-validator');

const dao = require('./dao');

const app = express();
app.use(morgan('common'));
app.use(express.json());
app.use(cors());

const PREFIX = '/api/v1';

// GET /exams

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

// POST /exams

app.post(PREFIX + '/exams', [
    body('code').isLength({ min: 5, max: 7 }),
    body('name').not().isEmpty(),
    body('cfu').isNumeric(),
    body('score').isNumeric(),
    body('date').isISO8601()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const exam = req.body;
    try {
        const value = await dao.addExam(exam);
        res.end();
    } catch (e) {
        res.status(400).json({ error: e });
    }
});

// PUT /exams

app.put(PREFIX + '/exams', [
    body('code').isLength({ min: 5, max: 7 }),
    body('name').not().isEmpty(),
    body('cfu').isNumeric(),
    body('score').isNumeric(),
    body('date').isISO8601()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const exam = req.body;
    try {
        const value = await dao.updateExam(exam);
        res.end();
    } catch (e) {
        res.status(400).json({ error: e });
    }
});

// DELETE /exams/:code

app.delete(PREFIX + '/exams/:code', [
    param('code').isLength({ min: 5, max: 7 })
], async (req, res) => { 

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const code = req.params.code ;
    // console.log(code);
    try {
        await dao.deleteExam(code);
        res.end();
    } catch(e) {
        res.status(400).json({ error: e });
    }

});


// RUN SERVER

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}/`);
});
