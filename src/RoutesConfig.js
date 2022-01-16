import React from 'react'
import {Routes, Route} from 'react-router-dom'

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={"Landing"} />
      <Route path="/user" element={"User"} />
    </Routes>
  )
}
