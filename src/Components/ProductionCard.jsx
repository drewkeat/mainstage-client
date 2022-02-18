import {Card, CardHeader, CardMedia, CardContent, Grid} from '@mui/material'

function ProductionCard() {
  return (
    <Grid item xs={3}>
      <Card elevation={2}>
        <CardHeader title="Production Title" sx={{textAlign:'center'}}/>
        <CardMedia component="img" />
        <CardContent />
      </Card>
    </Grid>
  )
}

export default ProductionCard