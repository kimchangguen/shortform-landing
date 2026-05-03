export function FinalContactSection() {
  return (
    <>
      <section className="bg-[#f9f8f6] px-4 pb-0 pt-[150px] text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center justify-center gap-10 lg:flex-row lg:gap-14">
          <div className="w-full max-w-[390px] bg-[#f9f8f6] sm:max-w-[470px] lg:w-[48%] lg:max-w-[560px]">
            <img
              src="/09_02.png"
              alt="휴대폰"
              className="mx-auto h-auto w-full bg-[#f9f8f6] object-contain mix-blend-multiply"
            />
          </div>

          <div className="w-full max-w-[520px] sm:max-w-[600px] lg:w-[52%] lg:max-w-[620px]">
            <img
              src="/09_03.png"
              alt="안내 문구"
              className="mx-auto h-auto w-full object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      <section id="consultation" className="bg-[#f9f8f6] px-4 pb-20 pt-[50px] text-center sm:px-6 lg:px-8">
        <div className="mx-auto w-[950px] max-w-full">
          <img
            src="/19.png"
            alt="연락처"
            className="mx-auto h-auto w-full object-contain mix-blend-multiply"
          />
        </div>
      </section>
    </>
  );
}
