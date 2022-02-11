import {
  Button,
  ButtonGroup,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

function LoginForm({ loginUser, ...props }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      loginUser(values, navigate);
    },
  });

  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h2">MAiNSTAGE Login</Typography>
      <br />
      <br />
      <Paper sx={{ padding: "1rem", maxWidth: {xs: '100%', md: '50%'}, margin: 'auto' }} elevation={5}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            margin='dense'
            type="text"
            name="email"
            label="Email:"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.errors.email}
          />
          <TextField
            fullWidth
            margin='dense'
            type="password"
            name="password"
            label="Password:"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.errors.password}
          />
          <ButtonGroup sx={{marginTop: '1rem'}}>
            <Button type="submit" variant="contained" color="success" >
              Login
            </Button>
            <Button variant="contained" onClick={()=> navigate('/signup')}>Sign Up</Button>
          </ButtonGroup>
        </form>
      </Paper>
    </Container>
  );
}

export default LoginForm;
