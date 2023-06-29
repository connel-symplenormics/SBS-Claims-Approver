
import Dashboard from './sections/Dashboard'
import Claims from './sections/Claims'
import Members from './sections/Members'
import Reviews from './sections/Reviews'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'


function App() {
  
  return (
    <div className="font-poppins ">
      <BrowserRouter className="flex">
        <div>
          <Sidebar></Sidebar>
        </div>

        <div className="ml-[320px]">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/claims" element={<Claims />} />
            <Route path="/members" element={<Members />} />
            <Route path="/reviews" element={<Reviews/>}/>
          </Routes>

        </div>
        
        
      </BrowserRouter>

    </div>
  )
}

export default App
