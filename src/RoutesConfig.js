import React from 'react'
import {Routes, Route} from 'react-router-dom'

import PrivateRoute from './Components/PrivateRoute'
import {Dashboard, Landing, Signup} from './Containers'


function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/" element={<PrivateRoute />} >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/other" element={<p>This is the other route</p>} />
      </Route>
    </Routes>
  )
}

export default RoutesConfig