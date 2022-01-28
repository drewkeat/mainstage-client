import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Profile({...props}) {
  return (
    <div>
      <h1>{props.user.full_name}</h1>
      <Link to="/">Landing</Link>
    </div>
  )
}

export default connect(state => ({user: state.user}))(Profile)