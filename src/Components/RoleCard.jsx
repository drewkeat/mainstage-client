import {Card, CardContent, CardHeader, CardMedia, Grid} from '@mui/material'

function RoleCard() {
  return (
    <Grid item xs={3}>
      <Card elevation={3}>
        <CardHeader title="Role Name" subheader="Production Title" sx={{textAlign: 'center'}}/>
        <CardMedia component="img" />
        <CardContent />
      </Card>
    </Grid>
  )
}

export default RoleCard