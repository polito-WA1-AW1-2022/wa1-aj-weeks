import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <Col><h1>Demo buttons</h1></Col>
      </Row>
      <Row>
        <Col>
          <MyButton text='Hi!' />
          <MyButton text='Hello' />
          <MyButton text='Ciao' />
        </Col>
      </Row>

    </Container>
  );
}

export default App;
