import { Col, Container, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import ExamTable from './ExamTable';
import load_data from './load_data';

const myexamlist = load_data() ;

function App() {

  return (
    <Container>
      <Row>
        <Col>
          <h1>My Exams (Average: {myexamlist.average()})</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ExamTable exams={myexamlist}/>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
