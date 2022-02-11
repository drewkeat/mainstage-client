import React from 'react';
import { TextField } from '@mui/material';
import { useField } from "formik";

const MSTextField = ({
  name,
  ...props
}) => {

  const [field, meta] = useField(name);
  const configTextfield = {
    ...field,
    ...props
  }

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return (
    <TextField { ...configTextfield }/>
  );
}

export default MSTextField;
