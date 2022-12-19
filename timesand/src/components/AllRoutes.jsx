import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Price from '../pages/Pricing/Price'
import Time from '../pages/time/Time'
import Login from '../pages/users/Login'
import SignUp from '../pages/users/SignUp'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/register' element={<SignUp/>} ></Route>
            <Route path='/time' element={<Time/>} ></Route>
            <Route path='/pricing' element={<Price/>}></Route>

        </Routes>
    </div>
  )
}

export default AllRoutes