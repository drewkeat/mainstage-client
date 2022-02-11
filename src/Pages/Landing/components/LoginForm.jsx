import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  Grid,
  Button,
  ButtonGroup,
  Container,
  Typography,
} from "@mui/material";

import MainstageForm from "../../../Components/MainstageForm/MainstageForm";
import MSTextField from "../../../Components/MainstageForm/MSTextField";

function LoginForm({ loginUser, autheticateJWT, ...props }) {
  const navigate = useNavigate();

  const formValues = {
    email: "",
    password: "",
  };

  const validations = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    loginUser(values, navigate);
  };

  return (
    <Container sx={{ textAlign: "center", width: "50%" }}>
      <Typography variant="h2">MAinStage Login</Typography>
      <br />
      <br />
      <MainstageForm
        formValues={formValues}
        validations={validations}
        handleSubmit={handleSubmit}
        elevation={5}
        spacing={[2]}
        justifyContent="center"
      >
        <Grid item xs={12}>
          <MSTextField fullWidth type="text" name="email" />
        </Grid>
        <Grid item xs={12}>
          <MSTextField fullWidth type="password" name="password" />
        </Grid>
        <Grid item>
          <ButtonGroup>
            <Button type="submit" variant="contained" color="success">
              Login
            </Button>
            <Button variant="contained" onClick={() => navigate("/signup")}>
              Create Account
            </Button>
          </ButtonGroup>
        </Grid>
      </MainstageForm>
    </Container>
  );
}

export default LoginForm;
