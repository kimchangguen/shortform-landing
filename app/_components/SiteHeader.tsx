import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:h-20 lg:px-8">
        <a
          href="#top"
          aria-label="adgrit Short-form"
          className="flex h-full w-full items-center justify-center"
        >
          <Image
            src="/adgrit-short-form-logo.png"
            alt="adgrit"
            width={655}
            height={187}
            priority
            unoptimized
            sizes="(max-width: 640px) 210px, (max-width: 1024px) 240px, 260px"
            className="adgrit-header-logo-image h-auto w-[min(56vw,210px)] object-contain sm:w-60 lg:w-[260px]"
          />
        </a>
      </div>
    </header>
  );
}
