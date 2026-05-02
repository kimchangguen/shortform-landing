import {
  ArrowDownRight,
  ArrowRight,
  Infinity,
  Play,
  Sparkles,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const foodImage =
  "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=85";

const benefits = [
  {
    icon: TrendingUp,
    title: "검색 노출 UP!",
    body: "키워드 상위 노출로 찾아오는 고객 증가!",
  },
  {
    icon: UsersRound,
    title: "고객 유입 UP!",
    body: "다양한 채널에서 실제 손님 유입 발생!",
  },
  {
    icon: Infinity,
    title: "지속 효과 UP!",
    body: "영상은 삭제 없이 계속 노출, 오래 효과!",
  },
];

function VideoMark() {
  return (
    <div className="relative h-[82px] w-[82px] rotate-6 rounded-lg bg-purple-700 shadow-[0_16px_28px_rgba(91,33,182,0.32)]">
      <div className="absolute left-0 top-0 h-6 w-full overflow-hidden rounded-t-lg bg-purple-500">
        <div className="flex h-full -skew-x-12">
          <span className="h-full flex-1 border-r-2 border-purple-700 bg-white/80" />
          <span className="h-full flex-1 border-r-2 border-purple-700 bg-purple-300" />
          <span className="h-full flex-1 border-r-2 border-purple-700 bg-white/80" />
          <span className="h-full flex-1 bg-purple-300" />
        </div>
      </div>
      <Play
        className="absolute left-1/2 top-[53%] h-9 w-9 -translate-x-1/2 -translate-y-1/2 text-white"
        fill="currentColor"
      />
    </div>
  );
}

function SocialIcon({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className: string;
  label: string;
}) {
  return (
    <div
      aria-label={label}
      className={`grid h-10 w-10 place-items-center rounded-lg text-[22px] text-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 font-sans text-neutral-950 sm:py-8">
      <article className="mx-auto w-full max-w-md overflow-hidden bg-white shadow-2xl sm:rounded-lg">
        <div className="relative overflow-hidden bg-white">
          <div
            className="pointer-events-none absolute right-[-116px] top-[360px] z-0 h-[460px] w-[500px] bg-cover bg-center opacity-95 mix-blend-multiply"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.55) 30%, rgba(255,255,255,0.04) 58%), url(${foodImage})`,
              maskImage:
                "linear-gradient(180deg, transparent 0%, black 14%, black 84%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(180deg, transparent 0%, black 14%, black 84%, transparent 100%)",
            }}
          />

          <section className="relative z-10 px-7 pb-5 pt-8">
            <div className="inline-flex -rotate-3 -skew-x-6 bg-purple-700 px-4 py-2 shadow-lg shadow-purple-900/20">
              <p className="skew-x-6 text-[15px] font-black leading-none text-white">
                이제 고객은 검색보다{" "}
                <span className="text-yellow-300">&apos;영상&apos;</span>을 봅니다!
              </p>
            </div>

            <div className="relative mt-8 min-h-[360px]">
              <h1 className="relative z-10 max-w-[320px] -rotate-2 text-[45px] font-black leading-[0.98] tracking-normal text-black">
                <span className="block">요즘 맛집은</span>
                <span className="mt-2 block">광고 안합니다</span>
                <span className="mt-5 block text-[62px] leading-[0.86] text-purple-700">
                  숏폼으로
                </span>
                <span className="block text-[68px] leading-[0.9] text-purple-700">
                  터집니다!
                </span>
              </h1>

              <div className="absolute right-0 top-[104px] z-20">
                <VideoMark />
              </div>

              <div className="absolute bottom-0 left-6 h-1 w-56 -rotate-2 rounded-full bg-purple-700" />
            </div>
          </section>

          <section className="relative z-10 px-8 pb-24 pt-2">
            <p className="text-[18px] font-semibold tracking-tight text-neutral-800">
              인스타 · 유튜브 · 페이스북
            </p>
            <p className="mt-1 text-[21px] font-black tracking-tight text-neutral-950">
              한 번에{" "}
              <span className="relative isolate inline-block px-1 text-purple-700">
                다
                <span className="absolute inset-x-0 bottom-[1px] -z-10 h-2 rotate-[-2deg] bg-yellow-300" />
              </span>
              터지는 구조!
            </p>

            <div className="mt-4 flex items-center gap-2">
              <SocialIcon
                label="Instagram"
                className="bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-700"
              >
                <FaInstagram />
              </SocialIcon>
              <SocialIcon label="YouTube" className="bg-red-600">
                <FaYoutube />
              </SocialIcon>
              <SocialIcon label="Facebook" className="bg-blue-700">
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon label="TikTok" className="bg-black">
                <SiTiktok />
              </SocialIcon>
            </div>

            <div className="mt-7 flex w-44 -rotate-6 items-center gap-1 text-purple-700">
              <p className="text-[16px] font-black italic leading-tight">
                맛있는 순간을
                <br />
                짧은 영상으로!
              </p>
              <ArrowDownRight className="mt-6 h-7 w-7 stroke-[3]" />
            </div>
          </section>
        </div>

        <section className="relative z-20 grid grid-cols-3 border-y border-neutral-200 bg-white px-5 py-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className={`flex flex-col items-center px-2 text-center ${
                  index !== 0 ? "border-l border-neutral-200" : ""
                }`}
              >
                <div className="grid h-[58px] w-[58px] place-items-center rounded-full bg-purple-600 text-white shadow-lg shadow-purple-900/20">
                  <Icon className="h-8 w-8 stroke-[2.8]" />
                </div>
                <h2 className="relative isolate mt-4 text-[15px] font-black leading-tight tracking-tight">
                  {benefit.title}
                  <span className="absolute inset-x-1 -bottom-1 -z-10 h-[7px] rotate-[-1deg] bg-yellow-300" />
                </h2>
                <p className="mt-3 text-[10.5px] font-semibold leading-[1.55] text-neutral-700">
                  {benefit.body}
                </p>
              </div>
            );
          })}
        </section>

        <section className="relative overflow-hidden bg-white px-7 pb-10 pt-8">
          <div className="flex items-center justify-between gap-3">
            <div className="relative min-w-0 flex-1">
              <p className="-rotate-3 text-[22px] font-black leading-none text-neutral-950">
                사장님만 모르는
              </p>
              <p className="relative isolate mt-3 -rotate-2 text-[47px] font-black leading-none tracking-tight text-purple-700">
                노출 구조!
                <span className="absolute bottom-[-6px] left-0 h-2 w-36 -rotate-2 rounded-full bg-yellow-300" />
              </p>
              <ArrowRight className="absolute -right-5 bottom-[-34px] h-24 w-28 rotate-12 text-purple-700" />
            </div>

            <div className="relative grid h-32 w-32 shrink-0 place-items-center rounded-full border-[5px] border-purple-700 bg-white text-center shadow-[inset_0_0_0_2px_rgba(126,34,206,0.12)]">
              <Sparkles className="absolute -left-2 bottom-5 h-5 w-5 fill-yellow-300 text-yellow-300" />
              <span className="absolute -right-2 top-2 text-xl">✨</span>
              <p className="text-[19px] font-black leading-tight text-neutral-950">
                뒤집어서
                <br />
                확인하세요!
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
