import './App.css'
import Home from './Home/Home'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Topbar from './Home/Topbar'
import Reads from './Home/Reads'
import Navbar from './Home/Navbar'

function App() {
  return (
<>
<Router>
<Topbar/>
<Reads/>
<Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/> 
  </Routes>
</Router>



</>
  )
}

export default App
