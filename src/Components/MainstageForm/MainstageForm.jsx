import {Grid, Paper, Typography} from '@mui/material'
import {Formik, Form} from 'formik'

import React from 'react';

function MainstageForm({children, formValues, validations, handleSubmit, header, elevation, width, alignSelf, ...props}) { 

  const renderChildren = children.map((child, index) => {
    const {name, type, fullWidth, variant, ...gridProps} = child.props

    return (
    <Grid item key={index} {...gridProps}>
      {child}
    </Grid>)
  })

  return (
    <Paper elevation={elevation} sx={{padding: '1rem', maxWidth: {width}, alignSelf: {alignSelf}}} >
      <Formik
            initialValues={{...formValues}}
            validationSchema={validations}
            onSubmit={(values) => handleSubmit(values)}
          >
        <Form>

          <Grid container {...props} maxWidth='100%'>
            {header ?
                <Grid item xs={12} alignContent='center'>
                  <Typography variant='h3' textAlign='center'>
                      {header}
                  </Typography>
                </Grid>
              :
              null
            }
            {renderChildren}
          </Grid>
        </Form>
      </Formik>
    </Paper>
  );
}

export default MainstageForm;
