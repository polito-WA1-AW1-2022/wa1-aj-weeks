import { useState } from "react";
import { Table } from "react-bootstrap";
import AddExamForm from "./AddExamForm";
import EditControl from "./EditControl";
import ExamRow from "./ExamRow";

function ExamTable(props) {

    const [editable, setEditable] = useState(false);

    // const changeEditable = (value) => { setEditable(value); };
    const toggleEditable = () => { setEditable((oldEditable) => (!oldEditable)) }

    return <>
        <EditControl editable={editable} toggleEditable={toggleEditable} />
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
                    editable={editable} removeExam={props.removeExam} />))}
            </tbody>
            <tfoot>
                <tr>
                    <AddExamForm />
                </tr>
            </tfoot>
        </Table></>;
}

export default ExamTable;