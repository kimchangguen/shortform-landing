const addressItems = [
  "서울 송파구 문정동 634 405호 업무지점",
  "경기도성남시 분당구 여수동 189 805호 연구지점",
  "상호 : ADGRIT",
  "대표 : 김찬근",
  "사업자 번호 : 263-23-00560",
  "대표번호 : 1661-0646",
];

const contactItems = ["T. 010-3316-7663", "T. 010-6663-2336", "T. 010-3300-7088"];

export function SiteFooter() {
  return (
    <footer className="bg-[#f4efe5] px-4 py-16 text-[#111111] sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1230px]">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr_0.8fr] lg:gap-20">
          <div>
            <p className="text-[1.35rem] font-black leading-none tracking-normal">ADGRIT</p>
            <p className="mt-7 break-keep text-[0.98rem] font-bold leading-7 text-[#202020]">
              혁신적인 마케팅 컨설팅 솔루션,
              <br />
              검증된 성공과 성장
            </p>
            <a
              href="#consultation"
              className="mt-5 inline-flex h-10 items-center justify-center rounded-full border border-[#111111] px-6 text-[0.95rem] font-extrabold text-[#111111] transition-colors hover:bg-[#111111] hover:text-[#f4efe5]"
            >
              문의하기
            </a>
          </div>

          <div>
            <h2 className="text-[0.98rem] font-black leading-none tracking-normal">Address</h2>
            <ul className="mt-6 space-y-3 text-[0.95rem] font-semibold leading-5 text-[#242424]">
              {addressItems.map((item) => (
                <li key={item} className="break-keep">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[0.98rem] font-black leading-none tracking-normal">Contact</h2>
            <ul className="mt-6 space-y-3 text-[0.95rem] font-semibold leading-5 text-[#242424]">
              {contactItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-[#111111]/20 pt-7 sm:mt-16">
          <div className="flex flex-col gap-5 text-[0.8rem] font-semibold text-[#55524b] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 ADGRIT. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="transition-colors hover:text-[#111111]">
                개인정보처리방침
              </a>
              <a href="#" className="transition-colors hover:text-[#111111]">
                이용약관
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
