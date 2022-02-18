import { CssBaseline, Grid, Paper } from "@mui/material";
import { connect } from "react-redux"

import { createUser } from "../../Actions/UserActions";
import SignupForm from './components/SignupForm'


export function Signup({createUser,...props}) {
  return(
    <Grid container component="main" direction={{xs: 'column-reverse', sm: 'row'}} sx={{height: '100vh', width: '100vw'}}>
    <CssBaseline />
    <Grid item xs={6} sm={4} sx={{backgroundColor: 'primary.main'}} />
    <Grid item container component={Paper} direction='column' xs={6} sm={8} gap={5} justifyContent='center' alignContent='center' maxWidth='100%'>
      <SignupForm createUser={createUser} width='80%' minWidth='fit-content'/>
    </Grid>
  </Grid>
  )
}

export default connect(state => ({errors: state.auth.errors}), { createUser })(Signup);
