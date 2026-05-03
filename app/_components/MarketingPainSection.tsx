import { PinnedTextSequence } from "./PinnedTextSequence";

export function MarketingPainSection() {
  return (
    <section
      id="why-shortform"
      className="mb-0 bg-[#f8f8f8] px-4 pb-0 pt-48 text-center sm:px-6 lg:px-8"
    >
      <div className="mx-auto mb-0 w-full max-w-7xl pb-0">
        <div className="mx-auto mb-0 h-auto w-full max-w-[72rem] pb-0">
          <img src="/03-01.png" alt="" className="block h-auto w-full object-contain" />
        </div>

        <PinnedTextSequence />
      </div>
    </section>
  );
}
