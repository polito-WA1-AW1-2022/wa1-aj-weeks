import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EditControl from "./EditControl";
import ExamRow from "./ExamRow";

function ExamTable(props) {

    const navigate = useNavigate();

    const editable = props.editable;
    
    return <>
        <EditControl editable={editable} />
        <Table striped={true} >
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
        </Table>
        {editable &&
            <div align='right'><Button type='button' variant='outline-success' onClick={() => navigate('/add')}>Add</Button></div>}

    </>;
}

export default ExamTable;