import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ExamRow(props) {
    return <tr>
        <ExamData exam={props.exam}/>
        {props.editable && <ExamActions exam={props.exam} removeExam={props.removeExam} />}
    </tr>;
}

function ExamData(props) {
    return <>
        <td>{props.exam.code}</td>
        <td>{props.exam.name}</td>
        <td>{props.exam.score}</td>
        <td>{props.exam.date.format('YYYY-MM-DD')}</td>
    </>;
}

function ExamActions(props) {
    const navigate = useNavigate();
    return <td>
        <Button variant='outline-danger' onClick={()=>{props.removeExam(props.exam.code)}}>Delete</Button> &nbsp;
        <Button variant='outline-warning' onClick={()=>{navigate(`/edit/${props.exam.code}`)}}>Edit</Button>
    </td> ;
}

export default ExamRow;