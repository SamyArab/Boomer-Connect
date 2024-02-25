import * as React from "react";
import Research from "./modules/views/Research";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
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
      <ProductHero />
      <Problem />
      <Research />
      <UserPersonas />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </>
  );
}

export default withRoot(Home);
