import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";

const backgroundImage =
  "https://media.istockphoto.com/id/1377484520/vector/diverse-senior-people-huddle-smiling-and-standing-together-vector-illustration.jpg?s=612x612&w=0&k=20&c=I21JjwRKfgAEsbSN6ff3fhW6qZqQgtsqxzvGpgy0E2Y=";
// "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400";

export default function ProductHero() {
  return (
    <ProductHeroLayout
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
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        SOEN 357 Mini Project
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button>
      <br></br>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
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
    </ProductHeroLayout>
  );
}
