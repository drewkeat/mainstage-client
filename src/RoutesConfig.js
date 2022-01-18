import React from 'react'
import {Routes, Route} from 'react-router-dom'

import {Profile, Landing} from './Pages'


function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/user" element={<Profile />} />
    </Routes>
  )
}

export default RoutesConfig