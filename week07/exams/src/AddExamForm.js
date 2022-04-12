import { useState } from "react";

function AddExamForm(props) {

    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [score, setScore] = useState(0);
    const [date, setDate] = useState('');


    return <>
        <td><input type='text' value={code} onChange={(event)=>{setCode(event.target.value)}}/></td>
        <td><input type='text' value={name} onChange={(event)=>{setName(event.target.value)}}/></td>
        <td><input type='text' value={score} onChange={(event)=>{setScore(event.target.value)}}/></td>
        <td><input type='date' value={date} onChange={(event)=>{setDate(event.target.value)}}/></td>
        <td><input type='button' value='Add' /></td>

    </>
}

export default AddExamForm;