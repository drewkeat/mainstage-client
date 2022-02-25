import { useEffect } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Grid,
  Skeleton,
} from "@mui/material";

import { fetchProduction } from "../Actions/ProductionActions";

function ProductionCard({
  fetchProduction,
  productionId,
  production,
  relationships,
  ...props
}) {
  useEffect(() => {
    fetchProduction(productionId);
  }, [fetchProduction, productionId]);

  return (
    <Grid item xs={3}>
      <Card elevation={2}>
        <CardHeader
          title={production ? production.attributes.name : <Skeleton />}
          sx={{ textAlign: "center" }}
        />
        <CardMedia component="img" />
        <CardContent />
      </Card>
    </Grid>
  );
}

const mapStateToProps = (state, { productionId, ...props }) => {
  if (state.productions[productionId]) {
    return { production: state.productions[productionId] };
  } else {
    return {};
  }
};

export default connect(mapStateToProps, { fetchProduction })(ProductionCard);
