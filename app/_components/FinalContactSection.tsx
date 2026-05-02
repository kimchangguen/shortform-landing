const checklist = [
  "상담과 동시에 계약할 사람만 문의 주세요.",
  "문의 = 상담 = 계약 진행 원칙입니다.",
  "하실사장님들만 해드리는데도 바쁩니다.",
];

export function FinalContactSection() {
  return (
    <section id="consultation" className="bg-[#f8f8f8] px-4 pb-14 pt-8 text-center sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1024px]">
        <div className="break-keep text-[2.35rem] font-black leading-[1.28] tracking-tight text-black sm:text-[3.5rem] lg:text-[4.1rem]">
          <p>우리매장 맛은 최고 입니다.</p>
          <p>매장의 흥행실패는 사장님 잘못이 아닙니다.</p>
          <p className="mt-2 text-[#3b178e]">고객을 모르고 세상을 몰라서</p>
          <p className="text-[#3b178e]">맛으로만 승부할 수 없었다는 걸 몰랐던것입니다.</p>
        </div>

        <div className="mt-10 break-keep text-[3.35rem] font-black leading-[1.08] tracking-tight text-black sm:text-[5.5rem] lg:text-[6.7rem]">
          <p>
            우리매장의 <span className="text-[#3b178e]">노출 구조</span>를 확인하고
          </p>
          <p>
            <span className="text-[#3b178e]">찾아오는 가게</span>로 만드세요
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:gap-5">
          <img src="/final-contact/phone-warning.jpg" alt="" className="mx-auto h-auto w-full max-w-[480px]" />

          <div className="text-center lg:text-left">
            <p className="break-keep text-[3.4rem] font-black leading-none tracking-tight text-black sm:text-[4.5rem] lg:text-[5rem]">
              애드그릿은
            </p>

            <div
              className="mt-4 flex min-h-[13.5rem] items-center justify-center bg-contain bg-center bg-no-repeat px-8 text-center text-[3rem] font-black leading-[1.25] tracking-tight text-white sm:text-[4rem] lg:text-[4.65rem]"
              style={{ backgroundImage: "url('/final-contact/red-brush.svg')" }}
            >
              <p>
                무료진단 따위
                <br />
                <span className="text-[#d90000] drop-shadow-[0_0_0_white]">하지 않습니다.</span>
              </p>
            </div>

            <div className="mt-5 space-y-4 break-keep text-left text-[1.35rem] font-black leading-tight tracking-tight text-black sm:text-[1.75rem] lg:text-[1.95rem]">
              {checklist.map((line) => (
                <p key={line} className="flex items-center gap-3">
                  <img src="/final-contact/red-check.jpg" alt="" className="h-10 w-10 shrink-0 rounded-full object-cover" />
                  {line}
                </p>
              ))}
            </div>

            <div
              className="mx-auto mt-7 flex min-h-[8.25rem] max-w-[520px] items-center justify-center bg-contain bg-center bg-no-repeat px-6 text-center text-[2.3rem] font-black leading-[1.18] tracking-tight text-white sm:text-[3rem] lg:text-[3.4rem]"
              style={{ backgroundImage: "url('/final-contact/black-brush.svg')" }}
            >
              <p>
                계약할 생각 없는 분들은
                <br />
                <span className="text-[#ff1717]">문의하지 마세요!</span>
              </p>
            </div>

            <div className="mt-5 break-keep text-center text-[1.55rem] font-black leading-[1.45] tracking-tight text-black sm:text-[1.95rem] lg:text-[2.15rem]">
              <p>지금도 계약 문의가 미어터져 줄 서 있습니다.</p>
              <p>
                상담은 선택이 아닙니다. <span className="text-[#d90000]">계약이 전제입니다.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 rounded-[1.35rem] border border-[#bdbdbd] bg-white px-7 py-7 text-left md:grid-cols-2 md:divide-x md:divide-[#c4c4c4] lg:px-8">
          <div className="flex items-center justify-center gap-7 pb-7 md:pb-0 md:pr-7">
            <img src="/final-contact/phone-icon.jpg" alt="" className="h-28 w-28 shrink-0 rounded-full object-cover" />
            <div>
              <p className="text-[1.7rem] font-black leading-tight tracking-tight text-[#3b178e] sm:text-[2rem]">전화 문의</p>
              <p className="mt-2 text-[2rem] font-black leading-[1.08] tracking-tight text-black sm:text-[2.55rem]">
                010-6663-2336
                <br />
                1661-0646
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-7 border-t border-[#c4c4c4] pt-7 md:border-t-0 md:pl-7 md:pt-0">
            <img src="/final-contact/talk-icon.jpg" alt="" className="h-28 w-28 shrink-0 rounded-2xl object-cover" />
            <div>
              <p className="text-[1.7rem] font-black leading-tight tracking-tight text-[#3b178e] sm:text-[2rem]">
                카카오톡 문의
              </p>
              <p className="mt-2 text-[2.85rem] font-black leading-none tracking-tight text-black sm:text-[3.45rem]">dlthdb23</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
