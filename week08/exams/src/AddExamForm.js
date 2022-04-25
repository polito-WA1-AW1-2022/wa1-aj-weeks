import { useState } from "react";
import { Button, Form } from 'react-bootstrap';

function AddExamForm(props) {

    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [score, setScore] = useState(0);
    const [date, setDate] = useState('');

    const handleSubmit= (event)=>{
        event.preventDefault();
    }


    return <>
        <form>
        <input type='text' value={code} onChange={(event)=>{setCode(event.target.value)}}/>
        <input type='text' value={name} onChange={(event)=>{setName(event.target.value)}}/>
        <input type='text' value={score} onChange={(event)=>{setScore(event.target.value)}}/>
        <input type='date' value={date} onChange={(event)=>{setDate(event.target.value)}}/>
        <input type='button' value='Add' onClick={handleSubmit}/>
        </form>
    </>

    // return <>
    //     {/* <Button type='submit' variant='outline-success'>Add</Button> */}

    //     <div style={{ borderColor: 'grey', borderWidth: 2, borderStyle: 'dotted', padding: 10 }}><Form>
    //         <Form.Group className='mb-3' onSubmit={handleSubmit}>
    //             <Form.Label>Code</Form.Label>
    //             <Form.Control type='text' value={code} required={true} placeholder="Exam code" onChange={(event) => { setCode(event.target.value) }} />
    //         </Form.Group>
    //         <Form.Group className='mb-3'>
    //             <Form.Label>Name</Form.Label>
    //             <Form.Control type='text' value={name} required={true} onChange={(event) => { setName(event.target.value) }} />
    //         </Form.Group>
    //         <Form.Group className='mb-3'>
    //             <Form.Label>Score   </Form.Label>
    //             <Form.Control type='number' value={score} required={true} min={18} max={30} onChange={(event) => { setScore(event.target.value) }} />
    //         </Form.Group>
    //         <Form.Group className='mb-3'>
    //             <Form.Label>Date</Form.Label>
    //             <Form.Control type='date' value={date} onChange={(event) => { setDate(event.target.value) }} />
    //         </Form.Group>
    //         <div align='right'>
    //         <Button  type='submit' variant='outline-success'>Add</Button>
    //         </div>
    //     </Form></div>
    // </>

}

export default AddExamForm;