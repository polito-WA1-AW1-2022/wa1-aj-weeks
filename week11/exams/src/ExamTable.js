import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import AddExamForm from "./AddExamForm";
import EditControl from "./EditControl";
import ExamRow from "./ExamRow";

function ExamTable(props) {

    // const [editable, setEditable] = useState(false);
    const [mode, setMode] = useState('view');  // allowed values: view, change, add, edit
    const [editedExam, setEditedExam] = useState({}) ;

    const editable = (mode !== 'view');


    // const changeEditable = (value) => { setEditable(value); };
    // const toggleEditable = () => { setEditable((oldEditable) => (!oldEditable)) }

    // const handleEditExam = () => {
    //     setFormMode('edit') ;
    // }
    
    const editExam = (exam) => {
        setMode('edit');
        setEditedExam(exam);
    }
    
    return <>
        <EditControl editable={editable} setMode={setMode} />
        <Table striped={true}>
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Date</th>
                    {editable && <th>Actions</th>}
                </tr>
            </thead>
            <tbody>
                {props.exams.map((exam) => (<ExamRow key={exam.code} exam={exam}
                    editable={editable} removeExam={props.removeExam} mode={mode} setMode={setMode} editExam={editExam}/>))}
            </tbody>
        </Table>
        {mode === 'change' &&
            <div align='right'><Button type='button' variant='outline-success' onClick={() => setMode('add')}>Add</Button></div>}
        {mode === 'add' &&
            <AddExamForm mode={mode} setMode={setMode} addOrEditExam={props.addExam} />}
        {mode === 'edit' &&
            <AddExamForm key={editedExam.code} mode={mode} editedExam={editedExam} setMode={setMode} addOrEditExam={props.editExam} />}

    </>;
}

export default ExamTable;