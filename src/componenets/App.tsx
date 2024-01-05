import '../styles/App.css'
import Nav from './Nav'
import Footer from "./Footer"

function App() {

  return (
    <div className='app-container'>
      <div className='content-container'>
        <Nav />
      </div>
      <Footer />
    </div>
  )

}

export default App