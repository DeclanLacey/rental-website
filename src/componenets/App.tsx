import '../styles/App.css'
import HomePage from './HomePage'
import Properties from './Properties'
import RequestTourForm from './RequestTourForm'
import {Link, Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className='app-container'>
        <nav className="navbar">
          <div className="container nav-container">
              <input className="checkbox" type="checkbox" name="" id="" />
              <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>  
            <div className="logo">
              <Link className='company-name-link' to="/"> Lacey Properties </Link>
            </div>
            <div className="menu-items">
              <Link className='hamburger-nav-item' to="/"> Home </Link>
              <Link className='hamburger-nav-item' to="/properties"> Properties </Link>
              <Link className='hamburger-nav-item' to="/request-tour"> Request Tour </Link>
            </div>
          </div>
        </nav>

      <nav className='navbar-full-size'>
        <Link to="/properties"> Properties </Link>
        <Link to="/"> Lacey Properties </Link>
        <Link to="/request-tour"> Request Tour </Link>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/properties' element={<Properties />}/>
        <Route path='/request-tour' element={<RequestTourForm />}/>
      </Routes>
    </div>
  )
}

export default App
