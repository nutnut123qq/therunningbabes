"use client";

export function LandingAction360() {
  return (
    <section className="py-12 md:py-[96px] bg-[#eaeefb]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden bg-white p-2 shadow-[0_20px_60px_-15px_rgba(62,106,0,0.2)]">
          <video
            src="/videos/babe-action360.mp4"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controlsList="nodownload noplaybackrate nofullscreen"
            onContextMenu={(e) => e.preventDefault()}
            className="w-full h-auto rounded-xl pointer-events-none block"
          />
        </div>
      </div>
    </section>
  );
}
