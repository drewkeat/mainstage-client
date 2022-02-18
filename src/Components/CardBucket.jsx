import { Container, Grid, Paper, Typography } from "@mui/material";

function CardBucket({header, children, ...props}) {
  return (
    <Container component={Paper} maxWidth="100%" elevation={5} sx={{backgroundColor: '#fffcff'}} >
      <Typography gutterBottom variant="h2">
        {header}
      </Typography>
      <hr style={{color: 'secondary.main'}}/>
      <Grid
        container
        columns={{ xs: "3", sm: "6", md: "9", lg: "12" }}
        spacing={2}
        padding={2}
      >
        {children}
      </Grid>
    </Container>
  );
}

export default CardBucket;
