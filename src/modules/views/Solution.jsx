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

function Solution() {
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
              <Typography variant="h4" marked="center" sx={{ my: 5 }}>
                Proposed Solution
              </Typography>
              <Typography variant="h5">
                <br />
                <br />
                Our proposed solution is the implementation of a service called
                “Boomer-Connect”, which will take the form of an app that
                supports the physical and mental health, and the well-being of
                the elderly, regardless of their living situation. The app will
                adopt an approach that addresses their specific needs first,
                simultaneously taking into account their technological
                capabilities, physical capacity and cognitive limitations. For
                this purpose, the key features will include social engagement
                aspects, health and wellness resources, safety, security and
                emergency assistance, all while being integrated in an
                accessible, personalizable and user-friendly design.
                <br />
                Developing further on the possible features and functionalities:
                <br />
                <br />
                Social Engagement:
                <br />
                <br />
                <b>Community Forums:</b> An environment where the users can
                interact with each other to help create a sense of belonging
                through shared experiences.
                <br />
                <b>Virtual Events:</b> This can take the form of group calls,
                online games, or any sort of hobbies that enable social
                engagement.
                <br />
                <b>Volunteering:</b> Proposes volunteering opportunities for
                users to participate in. Creates both a social context and sense
                of purpose.
                <br />
                <b>Family Connectivity:</b> Provides an easier means of
                communication with family members, whether that’s group chats,
                video chats, etc.
                <br />
                <br />
                Health and Wellness:
                <br />
                <br />
                <b>Telehealth Services:</b> Virtual healthcare access for any
                health related needs.
                <br />
                <b>Physical Exercise Programs:</b> Tutorials and coaching
                sessions specific for the elderly population.
                <br />
                <b>C</b>
                <b>ognitive Exercise:</b> Brain exercises and memory games to
                encourage and stimulate brain usage and function to reduce and
                curve cognitive decline.
                <br />
                <b>Reminders and Alerts:</b> Alerts for taking their medication
                or reminders for appointments.
                <br />
                <b>Health Tracking:</b> Can include calorie tracking, steps
                taken, sleeping habits and heart rate trends.
                <br />
                <b>Educational Resources:</b> Studies on aging and the best ways
                to maintain health at an older age, how to stay updated with
                technology and more.
                <br />
                <br />
                Safety, Security and Emergency:
                <br />
                <br />
                <b>Emergency Assistance:</b> emergency contact list and means to
                request emergency assistance.
                <br />
                <b>COVID-19 Updates:</b> Vaccination information, changes in the
                safety guidelines and updates on COVID-19.
                <br />
                <b>Privacy Protection: </b>Protection of user information and
                privacy.
                <br />
                <br />
                Accessibility, Personalizablity and User-friendly Design:
                <br />
                <br />
                <b>Simple Interface:</b> Clean and straightforward application
                with clear fonts, easy navigation and intuitive for the elderly.
                <br />
                <b>Voice Commands:</b> Easier navigation for those with reduced
                fine motor skills.
                <br />
                <b>Adjustable Setting: </b>Visually impaired users can change
                the font size and lighting settings.
                <br />
                <b>Feedback and Support:</b> Customer support and suggestions to
                help better the user experience and offer assistance.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Solution;
