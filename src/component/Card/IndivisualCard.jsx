import { Card, Grid } from "@mui/material";
import React from "react";

function IndivisualCard({ id, title, desc, img, price }) {
  return (
    <Grid item xs={12} sm={6} md={3} lg={4}>
      <Grid
        sx={{
          display: "flex",
          height: "120px",
          width: "120px",
          border: "1px solid red",
          borderRadius: "10px",
        }}
      ></Grid>
      <Grid
        sx={{
          display: "flex",
          height: "120px",
          width: "120px",
          borderColor: "red",
          borderRadius: "10px",
        }}
      ></Grid>
    </Grid>
  );
}

export default IndivisualCard;
