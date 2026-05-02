import { SiteHeader } from "./_components/SiteHeader";
import { ShortformHero } from "./_components/ShortformHero";
import { MarketingPainSection } from "./_components/MarketingPainSection";
import { ConversionSolutionSections } from "./_components/ConversionSolutionSections";
import { RevenueProcessSection } from "./_components/RevenueProcessSection";
import { VisitEffectSection } from "./_components/VisitEffectSection";
import { PingpongEffectSection } from "./_components/PingpongEffectSection";
import { SuccessProofSection } from "./_components/SuccessProofSection";
import { BottomConversionSections } from "./_components/BottomConversionSections";
import { RefundPricingSection } from "./_components/RefundPricingSection";
import { FinalContactSection } from "./_components/FinalContactSection";

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f7f7] font-sans text-gray-950">
      <SiteHeader />
      <ShortformHero />
      <MarketingPainSection />
      <ConversionSolutionSections />
      <RevenueProcessSection />
      <VisitEffectSection />
      <PingpongEffectSection />
      <SuccessProofSection />
      <BottomConversionSections />
      <RefundPricingSection />
      <FinalContactSection />
    </main>
  );
}
