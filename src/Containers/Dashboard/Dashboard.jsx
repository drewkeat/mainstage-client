import React from 'react'
import { connect } from 'react-redux'
import NavBar from '../../Components/NavBar/NavBar'

function Dashboard({user, ...props}) {
  return (
    <div>
      <NavBar/>
      <h1>{user.fullName}</h1>
    </div>
  )
}

export default connect(state => ({user: state.users.currentUser}))(Dashboard)