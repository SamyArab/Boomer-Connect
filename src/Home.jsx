import * as React from "react";
import Research from "./modules/views/Research";
import AppFooter from "./modules/views/AppFooter";
import Landing from "./modules/views/Landing";
import Problem from "./modules/views/Problem";
import UserPersonas from "./modules/views/UserPersonas";
import UserFlow from "./modules/views/UserFlow";
import UserJourneys from "./modules/views/UserJourneys";
import UserScenarios from "./modules/views/UserScenarios";
import StoryMap from "./modules/views/StoryMap";
import Solution from "./modules/views/Solution";
import AppAppBar from "./modules/views/AppAppBar";
import Design from "./modules/views/Design";
import withRoot from "./modules/withRoot";
import Evidence from "./modules/views/Evidence";
import Sketch from "./modules/views/Sketches";

function Home() {
  return (
    <>
      <AppAppBar />
      <Landing />
      <Problem />
      <Research />
      <UserPersonas />
      <Solution />
      <UserFlow />
      <UserJourneys />
      <UserScenarios />
      <StoryMap />
      <Sketch />
      <Design />
      <Evidence />
      <AppFooter />
    </>
  );
}

export default withRoot(Home);
