import {
  LandingNav,
  LandingSideTracker,
  LandingHero,
  LandingJourneySteps,
  LandingUgcChallenge,
  LandingMarathon,
  LandingTradeIn,
  LandingAbout,
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
        <LandingFaq />
      </main>
      <LandingFooter />
      <LandingFab />
    </div>
  );
}
