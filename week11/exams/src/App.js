import { Col, Container, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import ExamTable from './ExamTable';
import load_data from './load_data';
import { useState } from 'react';

const myexamlist = load_data() ;

function App() {

  const [exams, setExams] = useState(myexamlist.examList);
  // an array of objects of type Exam

  const removeExam = (code) => {
    setExams((oldExams)=>(oldExams.filter((ex)=>(ex.code!==code))));
  }

  const addExam = (exam) => {
    // when then new state depends on the old state, always use a callback
    setExams((oldExams)=>[...oldExams, exam]);
  }

  const editExam = (exam) => {
    setExams((es)=>(es.map((e)=>(e.code===exam.code ? exam : e))));
  }

  const examSum = exams.reduce((s,e)=>(s+e.score),0);
  const examAvg = examSum / exams.length;

  return (
    <Container>
      <Row>
        <Col>
          <h1>My Exams (Average: {examAvg})</h1> 
        </Col>
      </Row>
      <Row>
        <Col>
          <ExamTable exams={exams} removeExam={removeExam} addExam={addExam} editExam={editExam}/>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
