import React from 'react'
import {Routes, Route} from 'react-router-dom'

import {Profile, Landing, NewAccount} from './Pages'


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