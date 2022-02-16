import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import theme from './theme'

import RoutesConfig from './RoutesConfig'
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <RoutesConfig />
      </Router>
    </ThemeProvider>
  )
}
