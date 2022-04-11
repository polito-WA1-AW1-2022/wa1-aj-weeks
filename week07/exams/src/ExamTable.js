import { Table } from "react-bootstrap";
// import AddExamForm from "./AddExamForm";
import ExamRow from "./ExamRow";

function ExamTable(props) {

    const listOfExams = props.exams.examList; // a JS array with Exam objects

    return <Table striped={true}>
        <thead>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Score</th>
                <th>Date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {listOfExams.map((exam) => (<ExamRow key={exam.code} exam={exam} />))}
        </tbody>
        <tfoot>
            <tr>
                <td><input type='text' /></td>
                <td><input type='text' /></td>
                <td><input type='text' /></td>
                <td><input type='date' /></td>
                <td><input type='button' value='Add'/></td>

            </tr>
            {/* <tr>
                <AddExamForm />
            </tr> */}
        </tfoot>
    </Table>;
}

export default ExamTable;