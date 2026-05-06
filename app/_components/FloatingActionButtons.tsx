import { FileText, Phone } from "lucide-react";
import { SiKakaotalk } from "react-icons/si";

const KAKAO_CHAT_URL = "https://open.kakao.com/o/s71E0Jti";
const PROPOSAL_DOWNLOAD_URL = "/adgrit-marketing-shorts-proposal.pdf";

const buttonClassName =
  "grid h-12 w-12 place-items-center rounded-full border border-[#24304a] bg-white text-[#24304a] shadow-[0_8px_18px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-[#f8fafc] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#24304a]/35 sm:h-14 sm:w-14";

export function FloatingActionButtons() {
  return (
    <div className="fixed bottom-[calc(20px+env(safe-area-inset-bottom))] right-[calc(16px+env(safe-area-inset-right))] z-[90] flex flex-col gap-3 sm:right-[calc(20px+env(safe-area-inset-right))]">
      <a href="tel:010-6663-2336" className={buttonClassName} aria-label="전화 상담">
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.9} />
      </a>

      <a
        href={KAKAO_CHAT_URL}
        className={buttonClassName}
        aria-label="카카오톡 상담"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiKakaotalk className="text-[1.25rem] sm:text-[1.45rem]" aria-hidden="true" />
      </a>

      <a
        href={PROPOSAL_DOWNLOAD_URL}
        className={buttonClassName}
        aria-label="제안서 다운로드"
        download="adgrit-marketing-shorts-proposal.pdf"
      >
        <FileText className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.9} />
      </a>
    </div>
  );
}
