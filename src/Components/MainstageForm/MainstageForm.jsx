import {Grid, Paper, Typography} from '@mui/material'
import {Formik, Form} from 'formik'

import React from 'react';

function MainstageForm({children, formValues, validations, handleSubmit, elevation, padding, classes, columns, columnSpacing, component, direction, lg, md, rowSpacing, sm, spacing, sx, wrap, xl, xs, margin, justifyContent, alignContent, header, ...props}) {
  return (
    <Formik
        initialValues={{...formValues}}
        validationSchema={validations}
        onSubmit={handleSubmit}
      >
      <Form>
        <Paper elevation={elevation} sx={{padding: `${padding}rem`, textAlign: 'center'}}>
          <Typography variant='h3'>
            {header}
          </Typography>
          <br />
          <Grid container
            classes={classes}
            columns={columns}
            columnSpacing={columnSpacing}
            component={component}
            direction={direction}
            lg={lg}
            md={md}
            rowSpacing={rowSpacing}
            sm={sm}
            spacing={spacing}
            sx={{...sx}}
            wrap={wrap}
            xl={xl}
            xs={xs}
            justifyContent={justifyContent}
            alignContent={alignContent}
          >
            {children}
          </Grid>
        </Paper>
      </Form>
    </Formik>
  );
}

export default MainstageForm;
