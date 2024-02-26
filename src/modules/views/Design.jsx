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

function Design() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  const content = [
    <Box
      component="img"
      src="src/modules/assets/Design1.jpeg"
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
      src="src/modules/assets/Design2.jpeg"
      alt="call to action"
      sx={{
        right: 0,
        bottom: 0,
        width: "40%",
        maxWidth: 900,
      }}
    />,
    <Box
      component="img"
      src="src/modules/assets/Design3.jpeg"
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
      src="src/modules/assets/Design4.jpeg"
      alt="call to action"
      sx={{
        right: 0,
        bottom: 0,
        width: "40%",
        maxWidth: 900,
      }}
    />,
    <Box
      component="img"
      src="src/modules/assets/Design5.jpeg"
      alt="call to action"
      sx={{
        right: 0,
        bottom: 0,
        width: "50%",
        maxWidth: 900,
      }}
    />,
    <Box
      component="img"
      src="src/modules/assets/Design6.jpeg"
      alt="call to action"
      sx={{
        right: 0,
        bottom: 0,
        width: "50%",
        maxWidth: 900,
      }}
    />,
    <Box
      component="img"
      src="src/modules/assets/Design7.jpeg"
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
      src="src/modules/assets/Design8.jpeg"
      alt="call to action"
      sx={{
        right: 0,
        bottom: 0,
        width: "40%",
        maxWidth: 900,
      }}
    />,
    <Box
      component="img"
      src="src/modules/assets/Design9.jpeg"
      alt="call to action"
      sx={{
        right: 0,
        bottom: 0,
        width: "50%",
        maxWidth: 900,
      }}
    />,
    <Box
      component="img"
      src="src/modules/assets/Design10.jpeg"
      alt="call to action"
      sx={{
        right: 0,
        bottom: 0,
        width: "50%",
        maxWidth: 900,
      }}
    />,
    <Box
      component="img"
      src="src/modules/assets/Design11.jpeg"
      alt="call to action"
      sx={{
        right: 0,
        bottom: 0,
        width: "50%",
        maxWidth: 900,
      }}
    />,
    <Box
      component="img"
      src="src/modules/assets/Design12.jpeg"
      alt="call to action"
      sx={{
        right: 0,
        bottom: 0,
        width: "50%",
        maxWidth: 900,
      }}
    />,
    <Box
      component="img"
      src="src/modules/assets/Design13.jpeg"
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
      src="src/modules/assets/Design14.jpeg"
      alt="call to action"
      sx={{
        right: 0,
        bottom: 0,
        width: "50%",
        maxWidth: 900,
      }}
    />,
    <Box
      component="img"
      src="src/modules/assets/Design15.jpeg"
      alt="call to action"
      sx={{
        right: 0,
        bottom: 0,
        width: "50%",
        maxWidth: 900,
      }}
    />,
    <Box
      component="img"
      src="src/modules/assets/Design16.jpeg"
      alt="call to action"
      sx={{
        right: 0,
        bottom: 0,
        width: "50%",
        maxWidth: 900,
      }}
    />,
  ];

  const intro =
    "These are the mockups for the application. These types of mockup are very useful as it gives a chance to the client to accept and to give ideas on the design. This step can be very crucial as it is still in the designing stage and anything can be changed. If these designs are shown after starting to code and the clients do not approve, then pressure ressources have been wasted and must start over. Along with the design of each page, this mockup displays the interconnection of each page. ";

  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
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
                Design
              </Typography>
              <Typography variant="h5">{intro}</Typography>
              <br />
            </Box>

            <div id="tabs">
              <menu>
                <Button
                  // variant="contained"
                  size="small"
                  className={activeContentIndex === 0 ? "active" : ""}
                  onClick={() => setActiveContentIndex(0)}
                >
                  1
                </Button>
                <Button
                  // variant="contained"
                  size="small"
                  className={activeContentIndex === 1 ? "active" : ""}
                  onClick={() => setActiveContentIndex(1)}
                >
                  2
                </Button>
                <Button
                  // variant="contained"
                  size="small"
                  className={activeContentIndex === 2 ? "active" : ""}
                  onClick={() => setActiveContentIndex(2)}
                >
                  3
                </Button>
                <Button
                  // variant="contained"
                  size="small"
                  className={activeContentIndex === 3 ? "active" : ""}
                  onClick={() => setActiveContentIndex(3)}
                >
                  4
                </Button>
                <Button
                  // variant="contained"
                  size="small"
                  className={activeContentIndex === 4 ? "active" : ""}
                  onClick={() => setActiveContentIndex(4)}
                >
                  5
                </Button>
                <Button
                  // variant="contained"
                  size="small"
                  className={activeContentIndex === 5 ? "active" : ""}
                  onClick={() => setActiveContentIndex(5)}
                >
                  6
                </Button>
                <Button
                  // variant="contained"
                  size="small"
                  className={activeContentIndex === 6 ? "active" : ""}
                  onClick={() => setActiveContentIndex(6)}
                >
                  7
                </Button>
                <Button
                  // variant="contained"
                  size="small"
                  className={activeContentIndex === 7 ? "active" : ""}
                  onClick={() => setActiveContentIndex(7)}
                >
                  8
                </Button>
                <Button
                  // variant="contained"
                  size="small"
                  className={activeContentIndex === 8 ? "active" : ""}
                  onClick={() => setActiveContentIndex(8)}
                >
                  9
                </Button>
                <Button
                  // variant="contained"
                  size="small"
                  className={activeContentIndex === 9 ? "active" : ""}
                  onClick={() => setActiveContentIndex(9)}
                >
                  10
                </Button>
                <Button
                  // variant="contained"
                  size="small"
                  className={activeContentIndex === 10 ? "active" : ""}
                  onClick={() => setActiveContentIndex(10)}
                >
                  11
                </Button>
                <Button
                  // variant="contained"
                  size="small"
                  className={activeContentIndex === 11 ? "active" : ""}
                  onClick={() => setActiveContentIndex(11)}
                >
                  12
                </Button>
                <Button
                  // variant="contained"
                  size="small"
                  className={activeContentIndex === 12 ? "active" : ""}
                  onClick={() => setActiveContentIndex(12)}
                >
                  13
                </Button>
                <Button
                  // variant="contained"
                  size="small"
                  className={activeContentIndex === 13 ? "active" : ""}
                  onClick={() => setActiveContentIndex(13)}
                >
                  14
                </Button>
                <Button
                  // variant="contained"
                  size="small"
                  className={activeContentIndex === 14 ? "active" : ""}
                  onClick={() => setActiveContentIndex(14)}
                >
                  15
                </Button>
                <Button
                  // variant="contained"
                  size="small"
                  className={activeContentIndex === 15 ? "active" : ""}
                  onClick={() => setActiveContentIndex(15)}
                >
                  16
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

export default Design;
