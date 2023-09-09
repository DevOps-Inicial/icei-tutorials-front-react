import { Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
//Incorpmos los componentes de nuestra app tutorial
import AddTutorial from "./components/AddTutorial"
import Tutorial from "./components/Tutorial"
import ListTutorial from "./components/ListTutorial"

// Declaramos los objetos a utilizar de la siguiente manera
const App: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/tutorials">Tutorials App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/tutorials"} className='navbar-link'>Tutorials</Link>
        </li>
        <li className="nav-item">
          <Link to={"/add-tutorial"} className="nav-link">
            Add tutorial
          </Link>
        </li>
        <div className="container mt-3">
          <Routes>
            <Route path='/' element={<ListTutorial/>} />
            <Route path='/tutorials' element={<ListTutorial/>}/>
            <Route path='/add-tutorial' element={< AddTutorial />}/>
            <Route path='/tutorials/:id' element={<Tutorial/>} />
          </Routes>
        </div>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default App
