import { Button } from "react-bootstrap";

function ExamRow(props) {
    return <tr>
        <ExamData exam={props.exam}/>
        {props.editable && <ExamActions exam={props.exam} mode={props.mode} removeExam={props.removeExam}  editExam={props.editExam} />}
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

/*disabled={props.mode!=='change'}*/
function ExamActions(props) {
    return <td>
        <Button variant='outline-danger' disabled={props.mode!=='change'} onClick={()=>{props.removeExam(props.exam.code)}}>Delete</Button> &nbsp;
        <Button variant='outline-warning' disabled={props.mode!=='change'} onClick={()=>{props.editExam(props.exam)}}>Edit</Button>
    </td> ;
}

export default ExamRow;