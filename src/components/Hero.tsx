export function Hero() {
  return (
    <section className="relative pt-section-padding-mobile pb-section-padding-desktop md:pt-section-padding-desktop md:pb-[120px] px-gutter s-curve-bg">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto z-10">
        <img
          alt="ATI Consulting Logo"
          className="h-24 md:h-32 w-auto mb-8 object-contain"
          src="/ATI_Logo_Asset.png"
        />
        <h1 className="font-display text-headline-lg md:text-headline-lg text-primary whitespace-nowrap">
          Partnering to Build a Stronger Organizational Culture – Together
        </h1>
        </div>
      </div>
    </section>
  );
}
