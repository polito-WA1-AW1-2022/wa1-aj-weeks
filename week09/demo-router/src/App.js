import { BrowserRouter, Link, NavLink, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' >
            <Route index element={<h1>Home</h1>} />
            <Route path='about' element={<h2>About page</h2>} />
          </Route>
          <Route path='/help'>
            <Route index element={<h2>Help page</h2>}/>
            <Route path='contents' element={<h2>Content list of the help section</h2>}/>
            <Route path='*' element={<h2>Invalid topic</h2>}/>
            <Route path='topic/:topicName' element={<HelpByTopic/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout(props) {
  const navigate = useNavigate() ;
  return <>
    <h1>Website title</h1>
    <hr/>
    <ul>
      <li><NavLink to='/about' className={(isActive) => (isActive ? 'activeButton' : '')}>About</NavLink></li>
      <li><NavLink to='/help'>Help</NavLink></li>
    </ul>
    <button onClick={()=>{navigate('/about')}}>About</button>
    <hr />
    <Outlet />
  </>
}

function HelpByTopic(props) {

  const params = useParams() ;

  return <>
  <h2>Help by topic</h2>
  <p>This is the topic: {params.topicName}</p>
  </>
}

export default App;
