import * as Yup from "yup";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'

import MainstageForm from "../../../Components/MainstageForm/MainstageForm";
import MSTextField from "../../../Components/MainstageForm/MSTextField";

function SignupForm({createUser, ...props}) {
  const formValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const validations = Yup.object().shape({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    password_confirmation: Yup.string().required("Required"),
  });

  const navigate = useNavigate()
  const handleSubmit = (values) => {
    createUser(values, navigate);
  };

  return (
    <MainstageForm
      formValues={formValues}
      validations={validations}
      handleSubmit={handleSubmit}
      header="Sign Up"
      elevation={5}
      {...props}
    >
      <MSTextField fullWidth type="text" name="first_name" xs={6}/>
      <MSTextField fullWidth type="text" name="last_name" xs={6}/>
      <MSTextField fullWidth type="email" name="email" xs={6}/>
      <div xs={6}></div>
      <MSTextField fullWidth type="password" name="password" xs={6} />
      <MSTextField
        fullWidth
        type="password"
        name="password_confirmation"
        xs={6}
      />
      <Button type="submit" variant="contained" xs={12}>
        Create Account
      </Button>
    </MainstageForm>
  );
}

export default SignupForm;
