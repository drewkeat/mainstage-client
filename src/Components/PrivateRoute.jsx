import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { authenticateJWT } from '../Actions/AuthActions'


function PrivateRoute({authenticateJWT, isLoggedIn, errors, ...props}) {
  useEffect(() => {
    const authenticate = async (jwt) => {
      if (jwt) {
        return await authenticateJWT(jwt)
      }
    }; 
    authenticate(localStorage.getItem('jwt'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if (!isLoggedIn && errors) {
    return <Navigate to='/'/>
  } else if (!isLoggedIn) {
    return "Loading"
  } else {
    return <Outlet />
  }
}

export default connect(state => ({isLoggedIn: state.auth.isLoggedIn, errors: state.auth.errors}), {authenticateJWT})(PrivateRoute);
