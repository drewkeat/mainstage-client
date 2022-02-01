import React from 'react'
import {Routes, Route} from 'react-router-dom'

import {Dashboard, Landing, NewAccount} from './Pages'


function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/newaccount" element={<NewAccount/>} />
    </Routes>
  )
}

export default RoutesConfig