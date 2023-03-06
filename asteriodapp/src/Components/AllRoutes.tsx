import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Asteriod from './Asteriod'
import Home from './Home'
interface AppProps{
    handelget:(e:string)=>void
    Asteriodid:string
}
const AllRoutes = ({handelget,Asteriodid}:AppProps) => {
   
  return (
    <Routes>
    <Route path="/" element={<Home handelget={handelget} />}></Route>
    <Route
      path="/asteriod"
      element={<Asteriod Asteriodid={Asteriodid} />}
    ></Route>
  </Routes>
  )
}

export default AllRoutes