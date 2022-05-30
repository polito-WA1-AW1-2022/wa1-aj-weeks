import { Col, Container, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import ExamTable from './ExamTable';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import API from './API';
import AddExamForm from './AddExamForm';

function App() {

  const [exams, setExams] = useState([]);
  // an array of objects of type Exam

  const [loading, setLoading] = useState(true);

  async function reloadExams() {
    const list = await API.readExams();
    setExams(list);
    setLoading(false);
  }


  // INITIAL LOAD OF THE EXAM LIST, at application startup time
  useEffect(() => {
    reloadExams();
  }, []);

  // TO DO!!! INTEGRATE API CALLS
  const removeExam = async (code) => {
    try {
      setLoading(true);
      await API.removeExam(code);
      // setExams((oldexams)=>(oldexams.filter((e)=>(e.code !== code))));
      reloadExams();
      setLoading(false);
    } catch (e) {
      // show an error message somewhere on the page... setErrorMsg(...)
    }
  }

  const addExam = async (exam) => {

    try {
      await API.addExam(exam);
      reloadExams();
    } catch (e) {
      throw(e);
    }
  }
  const editExam = async (exam) => {
    try {
      await API.editExam(exam);
      reloadExams();
    } catch (e) {
      throw(e);
    }

   }


  const getExamByCode = (code) => {
    return exams.filter((e) => (e.code === code))[0];
  }

  const examAvg = exams.reduce((s, e) => (s + e.score), 0) / exams.length;

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <h1>My Exams (Average: {examAvg})</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Routes>
              <Route index element={<ExamTable loading={loading} exams={exams} editable={false} />} />
              <Route path='/change' element={<ExamTable loading={loading} exams={exams} editable={true} removeExam={removeExam} />} />
              <Route path='/add' element={<AddExamForm loading={loading} mode='add' addOrEditExam={addExam} />} />
              <Route path='/edit/:examCode' element={<AddExamForm loading={loading} mode='edit' addOrEditExam={editExam} getExamByCode={getExamByCode} />} />
            </Routes>
          </Col>
        </Row>

      </Container>
    </BrowserRouter>
  );
}

export default App;
