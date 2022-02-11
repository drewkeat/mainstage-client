import { Container, Grid, useMediaQuery } from "@mui/material";
import { connect } from "react-redux";
import { setCurrentUser } from "../../Actions/UserActions";

import LoginForm from "../../Components/LoginForm";

function Landing({ setCurrentUser, ...props }) {
  const smScreen = useMediaQuery("(min-width: 700px");

  return (
    <Grid
      container
      sx={{ height: "100vh", width: "100vw" }}
      direction={smScreen ? "row" : "column-reverse"}
    >
      <Grid
        item
        component={Container}
        xs={6}
        md={4}
        sx={{ backgroundColor: "darkblue", minHeight: "50%" }}
      />
      <Grid
        item
        container
        xs={6}
        md={8}
        alignContent="center"
        justifyContent={"center"}
      >
        <LoginForm setCurrentUser={setCurrentUser} />
      </Grid>
    </Grid>
  );
}

export default connect(null, { setCurrentUser })(Landing);
