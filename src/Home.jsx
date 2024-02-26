import * as React from "react";
import Research from "./modules/views/Research";
import AppFooter from "./modules/views/AppFooter";
import Landing from "./modules/views/Landing";
import Problem from "./modules/views/Problem";
import UserPersonas from "./modules/views/UserPersonas";
import UserFlow from "./modules/views/UserFlow";
import UserJourneys from "./modules/views/UserJourneys";
import StoryMap from "./modules/views/StoryMap";
import Solution from "./modules/views/Solution";
import AppAppBar from "./modules/views/AppAppBar";
import withRoot from "./modules/withRoot";

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
      <StoryMap />
      <AppFooter />
    </>
  );
}

export default withRoot(Home);
