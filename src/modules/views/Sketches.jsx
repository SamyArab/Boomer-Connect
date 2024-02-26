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

function Sketch() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  const content = [
    <Box
      component="img"
      src="src/modules/assets/SketchPage1.jpeg"
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
      src="src/modules/assets/SketchPage2.jpeg"
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
      src="src/modules/assets/SketchPage3.jpeg"
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
      src="src/modules/assets/SketchPage4.jpeg"
      alt="call to action"
      sx={{
        right: 0,
        bottom: 0,
        width: "100%",
        maxWidth: 900,
      }}
    />,
  ];

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
                Sketches and Wireframes
              </Typography>
              <br />
            </Box>

            <div id="tabs">
              <menu>
                <Button
                  color="secondary"
                  size="medium"
                  className={activeContentIndex === 0 ? "active" : ""}
                  onClick={() => setActiveContentIndex(0)}
                >
                  Sketch 1
                </Button>
                <Button
                  size="medium"
                  className={activeContentIndex === 1 ? "active" : ""}
                  onClick={() => setActiveContentIndex(1)}
                >
                  Sketch 2
                </Button>
                <Button
                  color="secondary"
                  size="medium"
                  className={activeContentIndex === 2 ? "active" : ""}
                  onClick={() => setActiveContentIndex(2)}
                >
                  Sketch 3
                </Button>
                <Button
                  size="medium"
                  className={activeContentIndex === 3 ? "active" : ""}
                  onClick={() => setActiveContentIndex(3)}
                >
                  Sketch 4
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

export default Sketch;
