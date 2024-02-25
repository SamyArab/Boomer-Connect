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

function Research() {
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
                Research and Analysis
              </Typography>
              <Typography variant="h5">
                <br />
                <b>Background Research</b>
                <br />
                This very interesting article linked below talks about the most
                essential apps for senior citizens, describing them and listing
                interesting features that can succinct interest and potential
                ideas for our application. counteract these feelings.
                <br />
                <br />
                https://medium.com/illumination/5-essential-mobile-apps-for-senior-citizens-in-2022-ec9f22f02e14
                <br />
                <br />
                <b>Khyaal: Senior Citizens App:</b> Focuses on the users
                physical and emotional needs.
                <br />
                - Khyaal Card: Fraud protection, spending tracker, cyber
                protection.
                <br />
                - Store: Mini store devoted to providing essentials for elders.
                <br />
                - Community: Meant to keep them active through social events,
                educational content and guides of all sorts.
                <br />
                <br />
                <b>Senior Safety App, GPS Tracker:</b> Focuses on keeping track
                of elderly family members.
                <br />- Fall Alert: Notifies in the event of a fall.
                <br />- Inactivity Tracker: Notifies when the phone is inactive
                for a prolonged period.
                <br />- Emergency Call: Emergency help requests.
                <br />- Location Tracker: Monitors location.
                <br />- Battery Low Alert: Notifies the user to charge their
                phone.
                <br />- Phone Stolen Alert: In the event of a theft or loss, the
                phone can be tracked.
                <br />
                <br />
                <b>Senior Fitness:</b> Focuses on fitness for the elderly.
                <br />- Reminders to exercise.
                <br />- Includes breathing, stretching, flexibility and
                strengthening.
                <br />- Instructions in both text and video.
                <br />
                <br />
                <b>All Well Senior Care:</b> Focuses on wellbeing as well as an
                assisting tool for caregivers.
                <br />- Reports and Alerts.
                <br />- Health status monitoring and tracking.
                <br />- Games of all sorts.
                <br />
                <br />
                <b>Elder Launcher:</b> Focuses on elders with limited
                technological knowledge and disabilities.
                <br />- Pin favorite apps and contacts.
                <br />- Large fonts and icons.
                <br />- Italian translation.
                <br />
                <br />
                Furthermore, this other article describes UX design for seniors
                which will help us with the design for our application’s
                interface. The article lists a few notable application designs.
                <br />
                <br />
                https://www.eleken.co/blog-posts/examples-of-ux-design-for-seniors
                <br />
                <br />
                <b>LiveWell:</b> Manage health and wellness
                <br />
                Simple and familiar. Visual hierarchy and large fonts.
                Distinguished button colors.
                <br />
                <br />
                <b>Senior Meetme:</b> Elderly dating app.
                <br />
                Pleasant to the eye. Simple. Use of familiar icons.
                <br />
                <br />
                <b>Instacart:</b> Grocery delivery service
                <br />
                Accessible interface. Use of pictures in the virtual cart. Grid
                like structure resembles grocery shelves.
                <br />
                <br />
                <b>Solitaire:</b> Classic card game.
                <br />
                Recognizable to almost everyone above 25 years old. Only three
                buttons with clear functionalities.
                <br />
                <br />
                The article also presents a few tips such as:
                <br />
                <b>UI design has big and easy-to-use main elements:</b> Buttons,
                links, etc are placed in a central location on the page that is
                easy to see.
                <br />
                <b>Use big fonts and icons:</b> Visual impairment can be
                minimized by the use of recognizable icons and the user should
                be able to change font sizes.
                <br />
                <b>Bold contrasting colors for checkboxes and lists:</b> This
                can help seniors see the available options.
                <br />
                <b>Including some white space between items:</b> White space can
                help seniors navigate pages and place components in a grid which
                is easier to navigate.
                <br />
                <b>Automatically changing lighting:</b> Lighting can change
                depending on the time of day.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Research;
