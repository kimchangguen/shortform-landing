import { PinnedTextSequence } from "./PinnedTextSequence";

export function MarketingPainSection() {
  return (
    <section
      id="why-shortform"
      className="bg-[#f8f8f8] px-4 pb-16 pt-12 text-center sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto w-full max-w-[72rem]">
          <img src="/03-01.png" alt="" className="block h-auto w-full object-contain" />
        </div>

        <PinnedTextSequence />
      </div>
    </section>
  );
}
