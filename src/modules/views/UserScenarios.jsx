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

function UserScenarios() {

  const intro =
    "User Scenarios are situations that a user encounters when using the product. It further helps to provide a wider picture of the user experience for the application. User scenarios also provide the feeling and behaviours of the users which differs user scenarios from user stories. Here are 13 user scenarios for our project.";

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
                User Scenarios
              </Typography>
              <Typography variant="h5">{intro}</Typography>
              <Typography variant="h5" >
                <br />

                <b>User Scenario #1:</b>
                <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Title: </Typography> 
                Community Forums <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Description: </Typography> 
                As a user, I want to join community forums to share and connect with other elderly individuals to feel a sense of belonging. 
                <br /><br />

                <b>User Scenario #2:</b>
                <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Title: </Typography> 
                Telehealth Services <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Description: </Typography> 
                As a user, I want to access telehealth services in order to track health concerns without visiting a doctor.
                <br /><br />

                <b>User Scenario #3:</b>
                <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Title: </Typography> 
                Emergency Assistance <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Description: </Typography> 
                As a user, I want to have easy access to an emergency assistance feature and the ability to request help.
                <br /><br />

                <b>User Scenario #4:</b>
                <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Title: </Typography> 
                Simple Interface <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Description: </Typography> 
                As a user, I want the app to have a simple interface, clear fonts and easy navigation so that it is user-friendly for elderly individuals.
                <br /><br />

                <b>User Scenario #5:</b>
                <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Title: </Typography> 
                Volunteering Opportunities <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Description: </Typography> 
                As a user, I want to explore volunteering opportunities so that I can contribute to society while fulfilling a sense of purpose.
                <br /><br />

                <b>User Scenario #6:</b>
                <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Title: </Typography> 
                Communicate with Family <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Description: </Typography> 
                As a user, I want to easily communicate with my family members through group chats or video calls in order to stay connected.
                <br /><br />

                <b>User Scenario #7:</b>
                <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Title: </Typography> 
                Physical Exercises <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Description: </Typography> 
                As a user, I want to follow physical exercise programs tailored for elderly in order to stay active.
                <br /><br />

                <b>User Scenario #8:</b>
                <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Title: </Typography> 
                Cognitive Exercises <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Description: </Typography> 
                As a user, I want to engage in cognitive exercises and memory games to stimulate brain activity.
                <br /><br />

                <b>User Scenario #9:</b>
                <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Title: </Typography> 
                Reminders <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Description: </Typography> 
                As a user, I want to receive reminders and alerts for taking medication in order to not forget.
                <br /><br />

                <b>User Scenario #10:</b>
                <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Title: </Typography> 
                Customizable Font and Settings <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Description: </Typography> 
                As a user, I want to adjust my font size and settings so that visually impaired individuals can also use the app.
                <br /><br />

                <b>User Scenario #11:</b>
                <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Title: </Typography> 
                Voice Navigation <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Description: </Typography> 
                As a user, I want to navigate the app using voice commands in order to accommodate my reduced fine motor skills.
                <br /><br />

                <b>User Scenario #12:</b>
                <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Title: </Typography> 
                COVID-19 Updates <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Description: </Typography> 
                As a user, I would like to remain informed about COVID-19 in order to stay updated.
                <br /><br />

                <b>User Scenario #13:</b>
                <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Title: </Typography> 
                Feedback and Support <br />
                <Typography variant="h5" sx={{textDecoration: 'underline'}} display="inline">Description: </Typography> 
                As a user, I would like to give my feedback and receive technical support when I need it. 
                <br /><br />

              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default UserScenarios;
