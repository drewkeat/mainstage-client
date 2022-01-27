import React from 'react'
import {Routes, Route} from 'react-router-dom'

import {Profile, Landing} from './Pages'
import NewAccount from './Pages/NewAccount'


function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/user" element={<Profile />} />
      <Route path="/newaccount" element={<NewAccount/>} />
    </Routes>
  )
}

export default RoutesConfig