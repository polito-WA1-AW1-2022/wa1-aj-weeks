import { BrowserRouter, Link, NavLink, Outlet, Route, Routes, useParams, useSearchParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AppLayout />}>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetail/>}/>
          <Route path='/about' element={<About />} />
          <Route path='*' element={<h1>Empty page... something's wrong</h1>}/>
        </Route>

      </Routes>
    </BrowserRouter >
  );
}

function AppLayout(props) {
  return <Container>
    <Row>
      <Col xs={2} >
        <Menu />
      </Col>
      <Col>
        <Outlet />
      </Col></Row>
  </Container>
}

function Menu(props) {
  return <div>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/products'>Products</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
    </ul>
  </div>
}

function About(props) {
  return <><h1>About this website</h1>
  <p>It's fantastic</p>
  </>
}

function Products(props) {
  return <>
  <h1>Product list</h1>
  <ol>
    <li><Link to='/products/1'>One</Link></li>
    <li><Link to='/products/2'>Two</Link></li>
    <li><Link to='/products/3'>Three</Link></li>
  </ol>
  </>;
}

function ProductDetail(props) {

    const {id} = useParams() ;

  return <>
  <h1>Product Detail</h1>
  <p>This is product number {id}</p>
  </>
}

function Home(props) {
  return <h1>Home page</h1>
}


export default App;
