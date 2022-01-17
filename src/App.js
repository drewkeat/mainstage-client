import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import RoutesConfig from './RoutesConfig'
export default function App() {
  return (
    <Router>
      <RoutesConfig />
    </Router>
  )
}
