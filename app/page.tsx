import { SiteHeader } from "./_components/SiteHeader";
import { ShortformHero } from "./_components/ShortformHero";
import { MegaHitPinnedSequence } from "./_components/MegaHitPinnedSequence";
import { ProcessSection } from "./_components/ProcessSection";
import { VisitEffectSection } from "./_components/VisitEffectSection";
import { PingpongEffectSection } from "./_components/PingpongEffectSection";
import { BottomConversionSections } from "./_components/BottomConversionSections";
import { RefundPricingSection } from "./_components/RefundPricingSection";
import { FinalContactSection } from "./_components/FinalContactSection";
import { FloatingActionButtons } from "./_components/FloatingActionButtons";
import { SiteFooter } from "./_components/SiteFooter";

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden font-sans text-gray-950">
      <SiteHeader />
      <FloatingActionButtons />
      <ShortformHero />
      <div className="site-section px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1672px]">
          <MegaHitPinnedSequence />
        </div>
      </div>
      <ProcessSection />
      <VisitEffectSection />
      <PingpongEffectSection />
      <BottomConversionSections />
      <RefundPricingSection />
      <FinalContactSection />
      <SiteFooter />
    </main>
  );
}
