import {
  LandingNav,
  LandingSideTracker,
  LandingHero,
  LandingJourneySteps,
  LandingUgcChallenge,
  LandingMarathon,
  LandingTradeIn,
  LandingAbout,
  LandingAction360,
  LandingFaq,
  LandingFooter,
  LandingFab,
} from "./sections";

export function RunningBabeLanding() {
  return (
    <div className="bg-white text-[#181d26]">
      <LandingNav />
      <LandingSideTracker />
      <main>
        <LandingHero />
        <LandingJourneySteps />
        <LandingUgcChallenge />
        <LandingMarathon />
        <LandingTradeIn />
        <LandingAbout />
        <LandingAction360 />
        <LandingFaq />
      </main>
      <LandingFooter />
      <LandingFab />
    </div>
  );
}
