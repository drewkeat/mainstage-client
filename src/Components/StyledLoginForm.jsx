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

function StyledLoginForm({ setCurrentUser, ...props }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setCurrentUser(values, navigate);
    },
  });

  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h2">MAiNSTAGE Login</Typography>
      <br />
      <br />
      <Paper sx={{ padding: "1rem" }} elevation={5}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
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
            type="password"
            name="password"
            label="Password:"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.errors.password}
          />
          <ButtonGroup>
            <Button type="submit" variant="contained" color="success">
              Login
            </Button>
            <Button variant="contained">Sign Up</Button>
          </ButtonGroup>
        </form>
      </Paper>
    </Container>
  );
}

export default StyledLoginForm;
