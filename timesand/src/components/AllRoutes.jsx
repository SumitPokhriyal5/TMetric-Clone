import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Time from '../pages/time/Time'
import Login from '../pages/users/Login'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/time' element={<Time/>} ></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes