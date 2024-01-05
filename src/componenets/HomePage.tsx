import '../styles/HomePage.css'
import {Link} from "react-router-dom"

function HomePage() {

  return (
    <div className='homepage-container'>
            <img className='homepage-logo' src='src\images\logoPhotos\Print_Transparent.svg'/>
            <Link className='homepage-btn' to="/properties"> See Current Properties </Link>
    </div>
  )
}

export default HomePage
