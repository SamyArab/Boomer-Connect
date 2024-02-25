import * as React from "react";
import { useState } from "react";

import Button from "../components/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function UserFlow() {

  const intro =
    "A user flow is a diagram showing the path that any user takes or can take to complete their tasks. It helps to demonstrate to clients how the application will be interconnected and gives a chance for the client to have an idea of the flow of the application. Having a similar diagram is very useful, especially at the beginning of projects, because it helps the developers as well to know how to construct the product. Below you will find the user flow diagram for our application. ";

  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "primary" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <Box sx={item}>
              <Typography variant="h4" marked="center" sx={{ my: 3 }}>
                User Flow
              </Typography>
              <Typography variant="h5">{intro}</Typography>
              <br />
              <Box
                component="img"
                src="src/modules/assets/UserFlow.jpeg"
                alt="call to action"
                sx={{
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  maxWidth: 900,
                }}
              />,
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default UserFlow;
