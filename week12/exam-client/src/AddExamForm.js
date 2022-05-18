import { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";

import { Exam } from "./exam";

function AddExamForm(props) {

    // In Edit Mode, I should get information about which exam must be edited
    const { examCode } = useParams();
    let editedExam = undefined;
    if (examCode) {
        editedExam = props.getExamByCode(examCode);
    }

    const [code, setCode] = useState(props.mode === 'edit' ? editedExam.code : '');
    const [name, setName] = useState(props.mode === 'edit' ? editedExam.name : '');
    const [score, setScore] = useState(props.mode === 'edit' ? editedExam.score : 0);
    const [date, setDate] = useState(props.mode === 'edit' ? editedExam.date.format('YYYY-MM-DD') : '');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await props.addOrEditExam(new Exam(code, name, 6, Number(score), date));
        navigate('/change');
    }

    const handleCancel = (event) => {
        navigate('/change');
    }

    return <>
        <div style={{ borderColor: 'grey', borderWidth: 2, borderStyle: 'dotted', padding: 10 }}>
            <Form onSubmit={handleSubmit} >
                <Form.Group className='mb-3' >
                    <Form.Label>Code</Form.Label>
                    <Form.Control type='text' value={code} required={true} placeholder="Exam code" disabled={props.mode === 'edit'} onChange={(event) => { setCode(event.target.value) }} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' value={name} required={true} onChange={(event) => { setName(event.target.value) }} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Score   </Form.Label>
                    <Form.Control type='number' value={score} required={true} min={18} max={30} onChange={(event) => { setScore(event.target.value) }} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type='date' value={date} onChange={(event) => { setDate(event.target.value) }} />
                </Form.Group>
                <div align='right'>
                    <Button variant='outline-secondary' onClick={handleCancel}  >Cancel</Button> &nbsp;
                    <Button type='submit' variant='outline-success'>{props.mode === 'add' ? 'Add' : 'Save'}</Button>
                </div>
            </Form></div>
    </>
}

export default AddExamForm;