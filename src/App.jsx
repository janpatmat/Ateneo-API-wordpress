import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import LandingPage from './pages/LandingPage'
import PostPage from './pages/PostPage'


function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element = {<LandingPage /> }/>
        <Route path='/post/:username' element = {<PostPage />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
