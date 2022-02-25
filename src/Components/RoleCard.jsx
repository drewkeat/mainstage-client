import { useEffect } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Skeleton,
} from "@mui/material";

import { fetchRole } from "../Actions/RoleActions";

function RoleCard({ fetchRole, roleId, role, relationships, ...props }) {
  useEffect(() => {
    fetchRole(roleId);
  }, [fetchRole, roleId]);

  return (
    <Grid item xs={3}>
      <Card elevation={3}>
        <CardHeader
          title={role ? role.attributes.name : <Skeleton />}
          subheader="Production Title"
          sx={{ textAlign: "center" }}
        />
        <CardMedia component="img" />
        <CardContent />
      </Card>
    </Grid>
  );
}

const mapStateToProps = (state, { roleId, relationships, ...props }) => {
  if (state.roles[roleId]) {
    return { role: state.roles[roleId] };
  } else {
    return {};
  }
};

export default connect(mapStateToProps, { fetchRole })(RoleCard);
