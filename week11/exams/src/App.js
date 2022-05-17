import { Col, Container, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import ExamTable from './ExamTable';
import load_data from './load_data';
import { useEffect, useState } from 'react';
import { readExams } from './API';

function App() {

  const [exams, setExams] = useState([]);
  // an array of objects of type Exam

  const [loading, setLoading] = useState(true);

  /*
  useEffect(()=>{
    // executed at initial mount time 
    // load (async'ly) form the API the current exams
    // then set the state to this list.
    readExams().then((list)=>{
      setExams(list);
    })
  }, []);*/

  useEffect(()=>{
    async function load() {
      const list = await readExams();
      setExams(list);
      setLoading(false);
    }
    load();

    // (async()=>{/*body*/})();  IIFE
  }, []);

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

  if(loading)
    return <div>WAIT!!!</div>;

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
