export function Footer() {
  return (
    <footer className="bg-surface-dim text-on-surface font-body-md text-body-md w-full py-section-padding-mobile md:py-section-padding-desktop flex flex-col justify-center items-center gap-8 px-12 md:px-24">
      <div className="font-headline-md text-headline-md text-primary flex flex-col items-center text-center">
        <span>
          <img
            alt="ATI Consulting Logo"
            className="w-auto object-contain h-14"
            src="/ATI_Logo_Asset.png"
          />
        </span>
        <span className="font-body-md text-sm mt-4 text-on-surface-variant">
          © 2026 ATI Consulting, LLC. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
