import {
  Alert,
  Box,
  Container,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import { connect } from "react-redux";

import React from "react";

function MainstageForm({
  children,
  errors,
  formValues,
  validations,
  handleSubmit,
  header,
  elevation,
  width,
  minWidth,
  alignSelf,
  dispatch,
  loading,
  ...props
}) {
  const renderChildren = children.map((child, index) => {
    const { name, type, fullWidth, variant, sx, ...gridProps } = child.props;

    return (
      <Grid item key={index} {...gridProps}>
        {child}
      </Grid>
    );
  });

  const renderErrors = () => {
    if (errors) {
      setTimeout(() => {
        dispatch({ type: "CLEAR_ERRORS" });
      }, 3000);
      return errors.map((error, index) => {
        return (
          <Grid item xs={12} key={index} component={Alert} severity="error">
            {error}
          </Grid>
        );
      });
    }
  };

  return (
    <Container
      component={Paper}
      elevation={elevation}
      sx={{ padding: "1rem", maxWidth: { width } }}
    >
      <Formik
        initialValues={{ ...formValues }}
        validationSchema={validations}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <Grid container {...props} maxWidth="100%" spacing={2}>
            {header ? (
              <Grid item xs={12} alignContent="center">
                <Typography variant="h3" textAlign="center">
                  {header}
                </Typography>
              </Grid>
            ) : null}
            {errors ? renderErrors() : null}
            {renderChildren}
            {
              loading ? 
                <Grid item component={Box} xs={12} textAlign="center">
                  <CircularProgress />
                </Grid>
              : 
                null
            }
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default connect((state) => ({ errors: state.auth.errors }))(
  MainstageForm
);
