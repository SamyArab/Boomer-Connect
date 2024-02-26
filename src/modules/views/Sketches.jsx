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
      src="/sketch/SketchPage1.jpeg"
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
      src="/sketch/SketchPage2.jpeg"
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
      src="/sketch/SketchPage3.jpeg"
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
      src="/sketch/SketchPage4.jpeg"
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
    "The following sketches are handwritten possible designs for the application. This step always precedes the design stage as it is faster to correct and can produce multiple designs at a faster pace. These sketches also display the wireframe of the application. The wireframe shows the flow of the product as in: which page proceeds which. This way it also helps the developers to know which page to build first.";

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
                Sketches and Wireframes
              </Typography>
              <Typography variant="h5">{intro}</Typography>
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
