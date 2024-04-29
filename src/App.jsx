import './App.css'
import Home from './Home/Home'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Topbar from './Home/Topbar'
import Reads from './Home/Reads'
import Navbar from './Home/Navbar'
import Footer from './Home/Footer'
import Motherday1page from './Pages/MothersDayGiftGuide/Motherday1page'
import Engagement_Rings from './Pages/Rings/Engagement_Rings'

function App() {
  return (
<>
<Router>

<Topbar/>
<Reads/>
<Navbar/>

  <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/mothersdaygiftguide' element={<Motherday1page/>}/> 
    <Route path='/engagement_rings' element={<Engagement_Rings/>}/>

  </Routes>
</Router>
<Footer/>
</>
  )
}

export default App
