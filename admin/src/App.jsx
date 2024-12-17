import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Admin from './pages/Admin/Admin'
import Sidebar from './components/Sidebar/Sidebar'
const App =()=>{
  return (
    <div>
    <Navbar/>
    <Admin/>
    <Sidebar/>
    </div>
  )
}

export default App