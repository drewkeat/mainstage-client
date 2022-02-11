import * as Yup from 'yup'
import { Grid, Button, Container } from '@mui/material'

import MainstageForm from '../../../Components/MainstageForm/MainstageForm'
import MSTextField from '../../../Components/MainstageForm/MSTextField'

function StyledSignupForm() {
  const formValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  }

  const validations = Yup.object().shape({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    password_confirmation: Yup.string().required("Required")
  })
  
  const handleSubmit = values => {
    console.log(values)
  }

  return (
    <div>
      <Container sx={{maxWidth: '75%', marginTop: '3rem'}}>
        <MainstageForm
          formValues = {formValues}
          validations = {validations}
          handleSubmit = {(values) => handleSubmit(values)}
          header="Sign Up"
          elevation={5}
          spacing={2}
          justifyContent='center'
          padding={1}
          sx={{margin: 'auto'}}
        >
          <Grid item xs={6}>
            <MSTextField fullWidth type="text" name="first_name"  />
          </Grid>
          <Grid item xs={6}>
            <MSTextField fullWidth type="text" name="last_name" />
          </Grid>
          <Grid item xs={6}>
            <MSTextField fullWidth type="email" name="email" />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <MSTextField fullWidth type="password" name="password" />
          </Grid>
          <Grid item xs={6}>
            <MSTextField fullWidth type="password" name="password_confirmation" />
          </Grid>
          <Grid item>
            <Button type="submit" variant='contained'>Create Account</Button>
          </Grid>
        </MainstageForm>
      </Container>
    </div>
  );
}

export default StyledSignupForm;
