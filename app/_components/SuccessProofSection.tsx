import { Heart, MessageCircle, Play } from "lucide-react";

const placeCases = [
  {
    title: "홍대맛집",
    image: "/success-proof/place-hongdae.jpg",
    result: "19위 → 1위 달성!  |  리뷰 수 2배 이상 증가!",
  },
  {
    title: "성수 훠궈 맛집 해피베네핏",
    image: "/success-proof/place-sungsu.jpg",
    result: "17위 → 1위 달성!  |  리뷰 수 3배 이상 증가!",
  },
];

const platformResults = [
  {
    logo: "/success-proof/logo-instagram.jpg",
    name: "인스타그램",
    thumb: "/success-proof/thumb-instagram.jpg",
    likes: "좋아요 2,857",
    comments: "댓글 152",
    views: "조회수 89만",
  },
  {
    logo: "/success-proof/logo-facebook.jpg",
    name: "페이스북",
    thumb: "/success-proof/thumb-facebook.jpg",
    likes: "좋아요 3,412",
    comments: "댓글 186",
    views: "조회수 102만",
  },
  {
    logo: "/success-proof/logo-youtube.jpg",
    name: "유튜브 쇼츠",
    thumb: "/success-proof/thumb-youtube.jpg",
    likes: "좋아요 1,942",
    comments: "댓글 97",
    views: "조회수 71만",
  },
];

function StatRows({
  likes,
  comments,
  views,
}: {
  likes: string;
  comments: string;
  views: string;
}) {
  return (
    <div className="rounded-xl bg-white px-5 py-4 text-left text-[1.05rem] font-black leading-[2.1] text-black shadow-[0_4px_14px_rgba(0,0,0,0.1)] sm:text-[1.2rem] lg:text-[1.38rem]">
      <p className="flex items-center gap-3">
        <Heart className="h-6 w-6 fill-red-500 text-red-500" />
        {likes}
      </p>
      <p className="flex items-center gap-3">
        <MessageCircle className="h-6 w-6 fill-[#06357e] text-[#06357e]" />
        {comments}
      </p>
      <p className="flex items-center gap-3">
        <Play className="h-6 w-6 fill-[#06357e] text-[#06357e]" />
        {views}
      </p>
    </div>
  );
}

export function SuccessProofSection() {
  return (
    <section className="bg-[#f8f8f8] px-4 pb-12 pt-6 text-center sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1672px]">
        <div className="break-keep text-[2rem] font-black leading-[1.28] tracking-tight text-black sm:text-[3.1rem] lg:text-[3.6rem]">
          <p>
            이미 수많은 매장이 핑퐁효과{" "}
            <span className="text-[#082f70]">네이버1위와 폭탄매출</span> 상승을 경험하고 있습니다.
          </p>
          <p className="mt-2 text-[2.2rem] sm:text-[3.35rem] lg:text-[4.15rem]">
            그 힘은 <span className="text-[#082f70]">240만 팔로워의</span> 힘 입니다.
          </p>
        </div>

        <div className="mx-auto mt-5 flex h-10 w-full max-w-[500px] items-center justify-center rounded-full bg-[#00643a] px-8 text-[1.35rem] font-black text-white shadow-sm sm:h-12 sm:text-[1.65rem] lg:h-[3.25rem] lg:text-[1.9rem]">
          네이버 플레이스 순위 상승사례
        </div>

        <div className="mx-auto mt-1 grid max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {placeCases.map((item) => (
            <article key={item.title} className="text-center">
              <h3 className="text-[1.35rem] font-black tracking-tight text-[#00643a] sm:text-[1.6rem] lg:text-[1.75rem]">
                {item.title}
              </h3>
              <img src={item.image} alt="" className="mt-2 w-full rounded-lg object-contain" />
              <div className="mx-auto mt-3 flex min-h-10 w-full max-w-[448px] items-center justify-center rounded-lg bg-[#00643a] px-4 text-[1.05rem] font-black text-white shadow-sm sm:text-[1.28rem] lg:text-[1.45rem]">
                {item.result}
              </div>
            </article>
          ))}
        </div>

        <div className="relative mx-auto mt-8 max-w-[1356px] rounded-[1.35rem] border border-[#b9c4d4] bg-white px-6 pb-6 pt-5 sm:px-8 lg:px-10">
          <div className="absolute left-1/2 top-0 flex h-10 w-[23rem] max-w-[82vw] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#082f70] px-8 text-[1.25rem] font-black text-white shadow-sm sm:text-[1.55rem] lg:text-[1.75rem]">
            숏폼 영상 조회수 및 반응
          </div>

          <div className="grid grid-cols-1 gap-8 pt-4 lg:grid-cols-3 lg:divide-x lg:divide-[#c8d0dc]">
            {platformResults.map((item) => (
              <article key={item.name} className="px-0 text-center lg:px-7">
                <div className="flex items-center justify-center gap-2 text-[1.2rem] font-black text-black sm:text-[1.35rem]">
                  <img src={item.logo} alt="" className="h-8 w-8 object-contain" />
                  {item.name}
                </div>
                <div className="mt-3 flex flex-col items-center justify-center gap-5 sm:flex-row lg:gap-8">
                  <img src={item.thumb} alt="" className="w-[10rem] rounded-lg object-cover shadow-sm sm:w-[10.5rem]" />
                  <StatRows likes={item.likes} comments={item.comments} views={item.views} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
