import '../styles/Nav.css'
import HomePage from './HomePage'
import Properties from './Properties'
import PropertyMoreInfo from './PropertyMoreInfo'
import RequestTourForm from './RequestTourForm'
import {Link, Routes, Route} from "react-router-dom"

function Nav() {

    function closeBurgerMenu() {
        const checkbox =  document.getElementById("burger-menu-checkbox") as HTMLInputElement
        if (checkbox.checked === true) {
            checkbox.checked = false
        }
    }
    

    return (
        <div>
            <nav className="navbar">
                <div className="container nav-container">

                    <input className="checkbox" type="checkbox" name='burger-menu-checkbox' id="burger-menu-checkbox" />

                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>  

                    <div className="logo">
                        <Link className='company-name-link' to="/">
                            <img className='header-logo' src='src\images\logoPhotos\textonly_nobuffer.png'/>
                        </Link>
                    </div>

                    <div className='menu-items'>
                        <Link onClick={closeBurgerMenu} className='hamburger-nav-item' to="/"> Home </Link>
                        <Link onClick={closeBurgerMenu} className='hamburger-nav-item' to="/properties"> Properties </Link>
                        <Link onClick={closeBurgerMenu} className='hamburger-nav-item' to="/request-tour"> Request Tour </Link>
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
                <Route path='/property-details' element={<PropertyMoreInfo />} />
            </Routes>
        </div>
    )
}

export default Nav

{/* <Link onClick={closeMenu} className='hamburger-nav-item' to="/"> Home </Link>
                <Link onClick={closeMenu} className='hamburger-nav-item' to="/properties"> Properties </Link>
                <Link onClick={closeMenu} className='hamburger-nav-item' to="/request-tour"> Request Tour </Link> */}