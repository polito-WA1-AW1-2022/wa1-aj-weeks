import { Table } from "react-bootstrap";
import ExamRow from "./ExamRow";

function ExamTable(props) {

    const listOfExams = props.exams.examList ; // a JS array with Exam objects

    return <Table striped={true}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Score</th>
                <th>Date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {listOfExams.map((exam) => (<ExamRow key={exam.code} exam={exam}/>))}
        </tbody>
    </Table> ;
}

export default ExamTable ;