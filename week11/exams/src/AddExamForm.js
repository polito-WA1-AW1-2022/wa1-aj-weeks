import { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { Exam } from "./exam";

function AddExamForm(props) {

    const defaultCode = '';

    const [code, setCode] = useState(props.mode==='edit' ? props.editedExam.code : defaultCode);
    const [name, setName] = useState(props.mode==='edit' ? props.editedExam.name :'');
    const [score, setScore] = useState(props.mode==='edit' ? props.editedExam.score :0);
    const [date, setDate] = useState(props.mode==='edit' ? props.editedExam.date.format('YYYY-MM-DD') :'');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addOrEditExam(new Exam(code, name, 6, Number(score), date));
        setCode(defaultCode);
        setName('');
        setScore(0);
        setDate('');
        props.setMode('change');
    }

    return <>
        {/* <Button type='submit' variant='outline-success'>Add</Button> */}

        <div style={{ borderColor: 'grey', borderWidth: 2, borderStyle: 'dotted', padding: 10 }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' >
                    <Form.Label>Code</Form.Label>
                    <Form.Control type='text' value={code} required={true} placeholder="Exam code" disabled={props.mode==='edit'} onChange={(event) => { setCode(event.target.value) }} />
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
                    <Button variant='outline-secondary' onClick={() => props.setMode('change')}>Cancel</Button> &nbsp;
                    <Button type='submit' variant='outline-success'>{props.mode==='add'? 'Add' : 'Save'}</Button>
                </div>
            </Form></div>
    </>

}

export default AddExamForm;