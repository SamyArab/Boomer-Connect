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

function UserJourneys() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  const content = [
    <Box
      component="img"
      src="/journey/UserJourney1.jpeg"
      alt="call to action"
      sx={{
        right: 0,
        bottom: 0,
        width: "100%",
        maxWidth: 900,
      }}
    />,
    <Box
      component="img"
      src="/journey/UserJourney2.jpeg"
      alt="call to action"
      sx={{
        right: 0,
        bottom: 0,
        width: "100%",
        maxWidth: 900,
      }}
    />,
    <Box
      component="img"
      src="/journey/UserJourney3.jpeg"
      alt="call to action"
      sx={{
        right: 0,
        bottom: 0,
        width: "100%",
        maxWidth: 900,
      }}
    />,
  ];
  const intro =
    "A user journey is a diagram displaying the experience of one person during one session of using an application. It gives each step the user makes along the session with their thoughts, feelings and actions. The diagram helps to identify ways to optimize the product and to incorporate user feedback while building the product. Below are the 3 user journeys done for this project.";

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
                User Journeys
              </Typography>
              <Typography variant="h5">{intro}</Typography>
              <br />
            </Box>

            <div id="tabs">
              <menu>
                <Button
                  color="secondary"
                  // variant="contained"
                  size="large"
                  className={activeContentIndex === 0 ? "active" : ""}
                  onClick={() => setActiveContentIndex(0)}
                >
                  User Journey 1
                </Button>
                <Button
                  // variant="contained"
                  size="large"
                  className={activeContentIndex === 1 ? "active" : ""}
                  onClick={() => setActiveContentIndex(1)}
                >
                  User Journey 2
                </Button>
                <Button
                  color="secondary"
                  // variant="contained"
                  size="large"
                  className={activeContentIndex === 2 ? "active" : ""}
                  onClick={() => setActiveContentIndex(2)}
                >
                  User Journey 3
                </Button>
              </menu>
              <div id="tab-content">{content[activeContentIndex]}</div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default UserJourneys;
