import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={"Landing"} />
        <Route path="/user" element={"User"} />
      </Routes>
    </Router>
  )
}
