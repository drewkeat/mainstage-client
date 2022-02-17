import { Container, Grid, Typography } from "@mui/material";
import { connect } from "react-redux";
import { loginUser } from "../../Actions/AuthActions";

import LoginForm from "./components/LoginForm";

function Landing({ loginUser, ...props }) {
  return (
    <Grid
      container
      sx={{ height: "100vh", width: "100vw" }}
      direction={{xs: 'column-reverse', sm: 'row'}}
    >
      <Grid item xs={6} sm={4} sx={{backgroundColor: 'primary.main'}}/>
      <Grid item container xs={6} sm={8} justifyContent='center' alignContent='center' component={Container} spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h2" textAlign='center'>MAiNSTAGE <br/>Login</Typography>
        </Grid>
        <Grid item xs={6}> 
          <LoginForm loginUser={loginUser} width='50%' alignSelf='center'/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default connect(null, { loginUser })(Landing);
