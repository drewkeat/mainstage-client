import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { authenticateJWT } from '../Actions/AuthActions'


function PrivateRoute({authenticateJWT, isLoggedIn, errors, ...props}) {
  // const authenticate = () => {authenticateJWT(localStorage.getItem('jwt'))}
  
  const jwt = localStorage.getItem('jwt')

  const verifyJWT = async () => {
      if (jwt){
        await authenticateJWT(jwt)
      }
    }
  
  useEffect(() => verifyJWT(), [])

  if (!isLoggedIn && errors) {
    return <Navigate to='/'/>
  } else if (!isLoggedIn) {
    return "Loading"
  } else {
    return <Outlet />
  }
}

export default connect(state => ({isLoggedIn: state.auth.isLoggedIn, errors: state.auth.errors}), {authenticateJWT})(PrivateRoute);
