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

function Evidence() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  const questions = [
    <Box
      component="img"
      src="../src/modules/questions/1-qst.png"
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
      src="src/modules/questions/2-qst.png"
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
      src="src/modules/questions/3-qst.png"
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
      src="src/modules/questions/4-qst.png"
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
      src="src/modules/questions/5-qst.png"
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
      src="src/modules/questions/6-qst.png"
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
      src="src/modules/questions/7-qst.png"
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
      src="src/modules/questions/8-qst.png"
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
      src="src/modules/questions/9-qst.png"
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
      src="src/modules/questions/10-qst.png"
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
      src="src/modules/questions/11-qst.png"
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
      src="src/modules/questions/12-qst.png"
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
      src="src/modules/questions/13-qst.png"
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
      src="src/modules/questions/14-qst.png"
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
                Evidence of User Research
              </Typography>
              <Typography variant="h5">
                The following questions were asked to the elderly community in
                order to gain feedback and judge if we are on the right track.
                The survey was anonymous and all the participants were made
                aware of the consent form.
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
                  Question 1
                </Button>
                <Button
                  size="medium"
                  className={activeContentIndex === 1 ? "active" : ""}
                  onClick={() => setActiveContentIndex(1)}
                >
                  Question 2
                </Button>
                <Button
                  color="secondary"
                  size="medium"
                  className={activeContentIndex === 2 ? "active" : ""}
                  onClick={() => setActiveContentIndex(2)}
                >
                  Question 3
                </Button>
                <Button
                  size="medium"
                  className={activeContentIndex === 3 ? "active" : ""}
                  onClick={() => setActiveContentIndex(3)}
                >
                  Question 4
                </Button>
                <Button
                  color="secondary"
                  size="medium"
                  className={activeContentIndex === 4 ? "active" : ""}
                  onClick={() => setActiveContentIndex(4)}
                >
                  Question 5
                </Button>
                <Button
                  size="medium"
                  className={activeContentIndex === 5 ? "active" : ""}
                  onClick={() => setActiveContentIndex(5)}
                >
                  Question 6
                </Button>
                <Button
                  color="secondary"
                  size="medium"
                  className={activeContentIndex === 6 ? "active" : ""}
                  onClick={() => setActiveContentIndex(6)}
                >
                  Question 7
                </Button>
                <Button
                  size="medium"
                  className={activeContentIndex === 7 ? "active" : ""}
                  onClick={() => setActiveContentIndex(7)}
                >
                  Question 8
                </Button>
                <Button
                  color="secondary"
                  size="medium"
                  className={activeContentIndex === 8 ? "active" : ""}
                  onClick={() => setActiveContentIndex(8)}
                >
                  Question 9
                </Button>
                <Button
                  size="medium"
                  className={activeContentIndex === 9 ? "active" : ""}
                  onClick={() => setActiveContentIndex(9)}
                >
                  Question 10
                </Button>
                <Button
                  color="secondary"
                  size="medium"
                  className={activeContentIndex === 10 ? "active" : ""}
                  onClick={() => setActiveContentIndex(10)}
                >
                  Question 11
                </Button>
                <Button
                  size="medium"
                  className={activeContentIndex === 11 ? "active" : ""}
                  onClick={() => setActiveContentIndex(11)}
                >
                  Question 12
                </Button>
                <Button
                  color="secondary"
                  size="medium"
                  className={activeContentIndex === 12 ? "active" : ""}
                  onClick={() => setActiveContentIndex(12)}
                >
                  Question 13
                </Button>
                <Button
                  size="medium"
                  className={activeContentIndex === 13 ? "active" : ""}
                  onClick={() => setActiveContentIndex(13)}
                >
                  Question 14
                </Button>
              </menu>
              <div id="tab-questions">{questions[activeContentIndex]}</div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Evidence;
