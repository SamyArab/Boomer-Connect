import * as React from "react";
import ProductCategories from "./modules/views/ProductCategories";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import Landing from "./modules/views/Landing";
import Problem from "./modules/views/Problem";
import UserPersonas from "./modules/views/UserPersonas";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import ProductCTA from "./modules/views/ProductCTA";
import AppAppBar from "./modules/views/AppAppBar";
import withRoot from "./modules/withRoot";

function Home() {
  return (
    <>
      <AppAppBar />
      <Landing />
      <Problem />
      <UserPersonas />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </>
  );
}

export default withRoot(Home);
