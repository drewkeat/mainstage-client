import {Card, CardContent, CardHeader, CardMedia, Grid} from '@mui/material'

function ApplicationCard() {
  return (
    <Grid item xs={3}>
      <Card elevation={3}>
        <CardHeader title="Application Production" subheader="Application Role" sx={{textAlign: 'center'}}/>
        <CardMedia component="img" />
        <CardContent />
      </Card>
    </Grid>
  )
}

export default ApplicationCard