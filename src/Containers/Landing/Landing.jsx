import { Paper, CssBaseline, Grid, Typography } from "@mui/material";
import { connect } from "react-redux";
import { loginUser } from "../../Actions/AuthActions";

import LoginForm from "./components/LoginForm";

function Landing({ loginUser, loading, ...props }) {
  return (
    <Grid container component="main" direction={{xs: 'column-reverse', sm: 'row'}} sx={{height: '100vh', width: '100vw'}}>
      <CssBaseline />
      <Grid item xs={6} sm={4} sx={{backgroundColor: 'primary.main'}} />
      <Grid item container component={Paper} direction='column' xs={6} sm={8} gap={5} justifyContent='center' alignContent='center' maxWidth='100%' >
        <Typography variant='h2' textAlign='center'>MAiNSTAGE Login</Typography>
        <LoginForm loginUser={loginUser} loading={loading} width='50%' minWidth='fit-content'/>
      </Grid>
    </Grid>
  );
}

export default connect(state => ({loading: state.auth.loading}), { loginUser })(Landing);
