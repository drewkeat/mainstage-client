import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { authenticateJWT } from '../Actions/AuthActions'
import { fetchUsers } from '../Actions/UserActions'


function PrivateRoute({authenticateJWT, fetchUsers, isLoggedIn, errors, ...props}) {
  useEffect(() => {
    authenticateJWT(localStorage.getItem('jwt'))
    fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[authenticateJWT, fetchUsers])

  if (!isLoggedIn && errors) {
    return <Navigate to='/'/>
  } else if (!isLoggedIn) {
    return "Loading"
  } else {
    return <Outlet />
  }
}

export default connect(state => ({isLoggedIn: state.auth.isLoggedIn, errors: state.auth.errors}), {authenticateJWT, fetchUsers})(PrivateRoute);
