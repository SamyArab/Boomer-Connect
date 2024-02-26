import * as React from "react";
import { useState } from "react";

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

function StoryMap() {

  const intro =
    "Story mapping is used to map a project’s user sorties. It is divided into 3 parts: activities, steps and details. Activities represent the main goals and actions of a product. Steps represent the main steps done by the user to achieve their goal and details represent the small details that the product does. In this case, the details of each activity are put directly under their activity. ";

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
                Story Map
              </Typography>
              <Typography variant="h5">{intro}</Typography>
              <br />
              <Box
                component="img"
                src="/story/StoryMap.jpeg"
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

export default StoryMap;
