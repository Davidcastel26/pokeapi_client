import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import './index.css'
import { Hero } from "./components/screens/Hero"
import { Types } from "./components/screens/Types"
import { Type } from "./components/screens/Type"

function App() {

  return (
      <>
       <Navbar /> 
       <div className="container mt-28 mx-auto px-12 py-4">
        <Routes>
          <Route path="/hero" element={<Hero/>} />
          <Route path="/types" element={<Types />} />
          <Route path="/type/:id" element={<Type />} />
        </Routes>
       </div>
      </>
  )
}

export default App
