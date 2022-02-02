import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Dashboard({user,...props}) {
  return (
    <div>
      <h1>{user.fullName}</h1>
      <Link to="/">Landing</Link>
    </div>
  )
}

export default connect(state => ({user: state.user}))(Dashboard)