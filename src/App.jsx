import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Fighters from "./pages/Fighters"
import Fights from './pages/Fights'
import Teams from './pages/Teams'
import Home from './pages/Home'

function App() {


  return (
    <>
      <div className="h-[100vh] w-full p-5 flex flex-col items-center" >
        
        <div>
          <Navbar/>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/fighters" element={<Fighters />} ></Route>
            <Route path="/fights" element={<Fights />} ></Route>
            <Route path="/teams" element={<Teams/>} ></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
