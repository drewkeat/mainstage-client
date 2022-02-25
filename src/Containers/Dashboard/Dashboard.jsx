import React from "react";
import { connect } from "react-redux";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

import NavBar from "../../Components/NavBar/NavBar";
import CardBucket from "../../Components/CardBucket";
import ProductionCard from "../../Components/ProductionCard";
import ApplicationCard from "../../Components/ApplicationCard";
import RoleCard from '../../Components/RoleCard'

function Dashboard({ user, ...props }) {
  const {managedProductions, applications, roles} = {...user.relationships}

  const renderManagedProductions = () => {
    return managedProductions.data.map(production => {
     return <ProductionCard key={production.id} productionId={production.id} />
    })
  }
  // TODO: Build Application and Role Reducers/Actions
  const renderRoles = () => {
    return roles.data.map(role => {
     return <RoleCard key={role.id} roleId={role.id} />
    })
  }
  const renderApplications = () => {
    return applications.data.map(application => {
     return <ApplicationCard key={application.id} applicationId={application.id} />
    })
  }

  return (
    <Box maxWidth='100%'>
      <NavBar />
      <Typography variant="h1" textAlign='center' gutterBottom backgroundColor='tertiary.main'>
        {user.attributes.fullName}
      </Typography>
      <Grid container maxWidth='100%' gap={5} padding={2}>
        {managedProductions.data.length ? 
        <CardBucket header="My Productions">
          {renderManagedProductions()}
        </CardBucket> :
        null
        }
        {roles.data.length ? 
        <CardBucket header="My Roles">
          {renderRoles()}
        </CardBucket> :
        null
        }
        {managedProductions.data.length ? 
        <CardBucket header="My Applications">
          {renderApplications()}
        </CardBucket> :
        null
        }
      </Grid>
    </Box>
  );
}

export default connect((state) => ({ user: state.users.currentUser }))(
  Dashboard
);
