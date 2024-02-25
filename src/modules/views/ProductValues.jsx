import * as React from "react";

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

function ProductValues() {
  const problem =
    "The elderly population, particularly those living at home or in nursing homes, face significant challenges in maintaining their physical and mental well-being. For instance, factors such as social isolation, limited access to healthcare services, and cognitive decline can impact their quality of life. Additionally, the COVID-19 pandemic has heightened concerns about safety, access to resources, and social connectivity for elderly individuals.";

  const social =
    "Social Isolation: Many elders are victims of social isolation, and the COVID-19 pandemic only exacerbated the problem. Leading to loneliness and depression, the stakes of social isolation are high. An app that can facilitate social interaction can counteract these feelings.";

  const healthcare =
    "Limited Access to Healthcare Services: Accessing healthcare services is no easy task for the elderly because they often have mobility issues and don’t have reliable and adapted means of transportation.";
  const physical =
    "Cognitive and Physical Limitations: Cognitive decline, which is inevitable with age, along with visual and mobility issues are obstacles when it comes to digital interaction and keeping up with technological advancements.";
  const safety =
    "Safety Concerns: Elderly individuals are more prone to have health problems, and can often be reluctant to engage in social activities or seek help.";
  const limitations =
    "While the motivating factors are very important to outline, it is also important to consider the stakes a project like this can entail and it is relevant to establish clearly the set of limitations and obstacles we might face.";

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
              <Typography variant="h4" sx={{ my: 5 }}>
                The Problem
              </Typography>
              <Typography variant="h5">{problem}</Typography>
              <Typography variant="h5">
                <br />
                {"Defining the Key Factors:"}
                <br />
                {social}
                <br />
                {healthcare}
                <br />
                {physical}
                <br />
                {safety}
                <br />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
