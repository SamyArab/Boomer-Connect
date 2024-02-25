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

function UserPersonas() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  const content = [
    <Box
      component="img"
      src="src/modules/assets/Eleanor.jpeg"
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
      src="src/modules/assets/William.jpeg"
      alt="call to action"
      sx={{
        right: 0,
        bottom: 0,
        width: "100%",
        maxWidth: 900,
      }}
    />,
  ];
  const introPersona =
    "Here are the 2 personas that represent the main demographic of the application. Each persona card is divided into multiple sections: short biography, quote, free time activities and some personal traits. The card also displays their preferences and requirements for the application. ";

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
                User Personas and Requirements
              </Typography>
              <Typography variant="h5">{introPersona}</Typography>
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
                  Eleanor
                </Button>
                <Button
                  // variant="contained"
                  size="large"
                  className={activeContentIndex === 1 ? "active" : ""}
                  onClick={() => setActiveContentIndex(1)}
                >
                  William
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

export default UserPersonas;
