import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import LandingLayout from "./LandingLayout";

const backgroundImage =
  "https://as2.ftcdn.net/v2/jpg/02/48/34/51/1000_F_248345193_IDwY3gH9VUteSS9I6ipGvlILsY2YS36b.jpg";
// "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400";

export default function Landing() {
  return (
    <LandingLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Boomer Connect
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h4"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        SOEN 357 Mini Project
      </Typography>
  
      <br></br>
      <Typography variant="h5" color="inherit" sx={{ mt: 2 }}>
        Made By
      </Typography>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Samy Arab - 40209595
      </Typography>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Mark Kandaleft - 40126013
      </Typography>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Lachezara Lazarova - 40211033
      </Typography>
    </LandingLayout>
  );
}
