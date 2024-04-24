import './App.css'
import Home from './Components/Home'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Topbar from './Components/Topbar'
import Reads from './Components/Reads'
import Navbar from './Components/Navbar'

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
