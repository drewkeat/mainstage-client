import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  Button,
  ButtonGroup,
  useMediaQuery
} from "@mui/material";

import MainstageForm from "../../../Components/MainstageForm/MainstageForm";
import MSTextField from "../../../Components/MainstageForm/MSTextField";

function LoginForm({ loginUser, autheticateJWT, ...props }) {
  const navigate = useNavigate();
  const smScreen = useMediaQuery("(min-width:600px)")

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
    <MainstageForm
      formValues={formValues}
      validations={validations}
      handleSubmit={handleSubmit}
      elevation={5}
      justifyContent='center'
      {...props}
    >
      <MSTextField fullWidth type="text" name="email" xs={12}/>
      <MSTextField fullWidth type="password" name="password" xs={12}/>
      <ButtonGroup orientation={smScreen ? 'horizontal' : 'vertical'} >
        <Button type="submit" variant="contained" color="success">
          Login
        </Button>
        <Button variant="contained" onClick={() => navigate("/signup")}>
          Create Account
        </Button>
      </ButtonGroup>
    </MainstageForm>
  );
}

export default LoginForm;
