import React from "react";
import { connect } from "react-redux";
import {
  Box,
  Container,
  Paper,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import NavBar from "../../Components/NavBar/NavBar";
import CardBucket from "../../Components/CardBucket";
import ProductionCard from "../../Components/ProductionCard";
import ApplicationCard from "../../Components/ApplicationCard";
import RoleCard from '../../Components/RoleCard'

function Dashboard({ user, ...props }) {
  return (
    <Box maxWidth='100%'>
      <NavBar />
      <Typography variant="h1" textAlign='center' gutterBottom backgroundColor='tertiary.main'>
        {user.fullName}
      </Typography>
      <Grid container maxWidth='100%' gap={5} padding={2}>
        <CardBucket header="My Productions">
          <ProductionCard />
        </CardBucket>
        <CardBucket header="My Applications">
          <ApplicationCard/>
        </CardBucket>
        <CardBucket header="My Roles">
          <RoleCard />
        </CardBucket>
      </Grid>
    </Box>
  );
}

export default connect((state) => ({ user: state.users.currentUser }))(
  Dashboard
);
