import { Grid } from "@mui/material";
import { connect } from "react-redux"

import { createUser } from "../../Actions/UserActions";
import SignupForm from './components/SignupForm'


export function Signup({createUser,...props}) {
  return(
    <Grid container sx={{width: '100vw', height: '100vh'}} direction={{xs: 'column-reverse', sm: 'row'}}>
      <Grid item xs={6} sm={4} sx={{backgroundColor: 'blue'}}/>
      <Grid container xs={6} sm={8} alignContent='center'>
        <SignupForm createUser={ createUser }/>
      </Grid>
    </Grid>
  )
}

export default connect(state => ({errors: state.auth.errors}), { createUser })(Signup);
