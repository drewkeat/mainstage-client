import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'


function PrivateRoute({...props}) {
  const authenticated = !!localStorage.getItem("jwt")
  const setError = () => {
    props.dispatch({type: "SET_ERRORS", payload: ["You must login to access that page"]})
  }
  return authenticated ? <Outlet /> : (setError(), <Navigate to="/" />);
}

export default connect(state => ({auth: state.auth.authorized}))(PrivateRoute);

