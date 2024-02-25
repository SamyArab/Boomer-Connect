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

function Problem() {
  const problem =
    "The elderly population, particularly those living at home or in nursing homes, face significant challenges in maintaining their physical and mental well-being. For instance, factors such as social isolation, limited access to healthcare services, and cognitive decline can impact their quality of life. Additionally, the COVID-19 pandemic has heightened concerns about safety, access to resources, and social connectivity for elderly individuals.";
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
              <Typography variant="h4" marked="center" sx={{ my: 5 }}>
                The Problem
              </Typography>
              <Typography variant="h5">{problem}</Typography>
              <Typography variant="h5" >
                <br />
                <h3>Defining the Key Factors:</h3>

                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Social Isolation: </Typography> 
                Many elders are victims of social isolation,
                and the COVID-19 pandemic only exacerbated the problem. Leading
                to loneliness and depression, the stakes of social isolation are
                high. An app that can facilitate social interaction can
                counteract these feelings. <br /><br />

                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Limited Access to Healthcare Services: </Typography> 
                Accessing healthcareservices is no easy task for the elderly 
                because they often have mobility issues and don’t have reliable 
                and adapted means of transportation. <br /><br />

                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Cognitive and Physical Limitations: </Typography> 
                Cognitive decline, which
                is inevitable with age, along with visual and mobility issues
                are obstacles when it comes to digital interaction and keeping
                up with technological advancements. <br /><br />

                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Safety Concerns: </Typography> 
                Elderly individuals are more prone to have
                health problems, and can often be reluctant to engage in social
                activities or seek help.
                <br /> <br />

                While the motivating factors are very important to outline, it
                is also important to consider the stakes a project like this can
                entail and it is relevant to establish clearly the set of
                limitations and obstacles we might face.<br /><br />

                
                <h3>The challenges to consider:</h3>

                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Accessibility and Usability: </Typography> 
                It is important to consider that
                the targeted population has a relatively more limited experience
                with technology and they have physical limitations as well. Loss
                of vision and mobility is very common and must be considered
                when building the product.
                <br /><br />

                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Privacy and Security: </Typography> 
                Handling sensitive data about a user's
                health and social interaction requires a great deal of
                consideration for privacy and security.
                <br /><br />
                
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Digital Access: </Typography> 
                The access to technological devices is not as
                pronounced in the elderly population and it is important to keep
                in mind. Some don’t have access to computers or own recent
                smartphones.
                <br /><br />

                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Cultural Context: </Typography> 
                Cultures and traditions are very diverse in
                the targeted population and the languages can be a barrier since
                many don’t have a good grasp of the English language.
                <br /> <br />
              </Typography>

              <Typography variant="h5">
                <h3>Proposed approach to possible solutions:</h3>
                
                To reach a product that will have a lasting impact and offer an
                effective and relevant improvement to the stated problem, all
                while considering the possible challenges outlined, we can
                establish the following steps to ensure a thorough and rigorous
                design and creation process.
                <br /><br />

                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Assessment: </Typography> 
                To pave the path, we need to proceed to an
                assessment of the targeted population’s current needs and the
                challenges they go through on a daily basis. Research, surveys
                and interviews are all viable options to consider.
                <br /><br />

                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">User-Centered Design: </Typography> 
                The user-centered design approach
                supports and promotes a more personalized and adapted product
                for the elderly.
                <br /><br />

                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Feature Identification: </Typography> 
                Using the feedback we gather, we can
                produce a list of potential features that will target the real
                issues and can create a more authentic and effective product.
                <br /><br />

                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Accessibility: </Typography> 
                Always keeping in mind that the application and
                all its possible features and added value will amount to nothing
                if it’s not practical, accessible and user friendly.
                <br /><br />

                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Testing and Iteration: </Typography> 
                Making sure the application is tried
                and true through a rigorous testing process to insure a robust
                product.
                <br /><br />

                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Evaluation and Improvement: </Typography> 
                Always be open to
                consideration for changes and keep a mindset that nourishes
                improvement through feedback analysis and measured outcomes.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Problem;
