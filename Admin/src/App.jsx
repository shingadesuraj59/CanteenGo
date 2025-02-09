import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Order/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Login from './components/Login/Login'

const App = () => {
  const[showLogin,setShowLogin]=useState(false);
  return (
    <div className=''>
      <ToastContainer />
      {showLogin?<Login setShowLogin={setShowLogin}/>:<></>  
         }
     <Navbar setShowLogin={setShowLogin}/>
     <hr className='h-1 ' />
     <div className='app-component flex'>
       <Sidebar/>
       <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/order' element={<Order/>}/>
          
        </Routes>

     </div>
    </div>
  )
}

export default App
