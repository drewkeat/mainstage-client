import { Container, Grid, Typography, useMediaQuery, Alert, AlertTitle } from "@mui/material";
import { connect } from "react-redux";
import { loginUser } from "../../Actions/AuthActions";

import LoginForm from "./components/LoginForm";

function Landing({ loginUser, ...props }) {
  const smScreen = useMediaQuery("(min-width: 700px");

  return (
    <Grid
      container
      sx={{ height: "100vh", width: "100vw" }}
      direction={{xs: 'column-reverse', sm: 'row'}}
    >
      <Grid item xs={6} sm={4} sx={{backgroundColor: 'blue'}}/>
      <Grid
        item
        container
        xs={6}
        sm={8}
        direction='column'
        alignContent='stretch'
        justifyContent='center'
        gap={2}
      >
        <Typography variant="h2" textAlign='center'>MAiNSTAGE <br/>Login</Typography>
        <LoginForm loginUser={loginUser} width='50%' alignSelf='center' gap={2}/>
      </Grid>
    </Grid>
  );
}

export default connect(null, { loginUser })(Landing);
