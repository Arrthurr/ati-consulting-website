export function Hero() {
  return (
    <section className="relative pt-section-padding-mobile pb-section-padding-desktop md:pt-section-padding-desktop md:pb-[120px] px-gutter s-curve-bg">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col items-start text-left max-w-3xl min-w-0 z-10">
          <img
            alt="ATI Consulting Logo"
            className="h-24 md:h-32 w-auto mb-8 object-contain"
            src="/ATI_Logo_Asset.png"
          />
          <p className="font-display text-sm sm:text-base md:text-body-lg text-primary leading-snug max-w-full">
            Partnering to Build a Stronger Organizational Culture – Together
          </p>
        </div>
      </div>
    </section>
  );
}
