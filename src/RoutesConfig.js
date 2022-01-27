import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Profile from './Pages/Profile/profile'


function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={"Landing"} />
      <Route path="/user" element={<Profile />} />
    </Routes>
  )
}

export default RoutesConfig