import Image from "next/image";
import { Languages, Video } from "lucide-react";
import Button from "./Button";

const MASTERCLASS_URL = "https://learning.samychaffai.com/";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#040404]">
      {/* =========================
          DESKTOP / TABLET
      ========================== */}

      <div className="relative hidden min-h-[820px] w-full md:block lg:min-h-[900px] xl:min-h-[960px]">
        {/* Background */}
        <Image
          src="/assets/header/headerbackground.avif"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[60px] bg-gradient-to-b from-transparent via-[#040404]/50 to-[#040404]" />

        {/* =========================
            LEFT CONTENT
        ========================== */}

        <div className="absolute left-[4%] top-[27%] z-10 flex w-[43%] max-w-[720px] flex-col items-center xl:left-[4.5%]">
          {/* Heading */}
          <h1 className="w-full text-center font-[family-name:var(--font-host-grotesk)] text-[clamp(52px,5vw,96px)] font-normal leading-[0.94] tracking-[-0.045em] text-white">
            <span className="block whitespace-nowrap">Film Director &amp;</span>

            <span className="block whitespace-nowrap">Content Creator</span>
          </h1>

          {/* Camera frame */}
          <div className="relative mt-[75px] h-[280px] w-[76%] max-w-[510px]">
            <span className="absolute left-0 top-0 h-[12px] w-[12px] border-l-2 border-t-2 border-white" />
            <span className="absolute right-0 top-0 h-[12px] w-[12px] border-r-2 border-t-2 border-white" />
            <span className="absolute bottom-0 left-0 h-[12px] w-[12px] border-b-2 border-l-2 border-white" />
            <span className="absolute bottom-0 right-0 h-[12px] w-[12px] border-b-2 border-r-2 border-white" />

            {/* REC */}
            <div className="absolute left-[24px] top-[30px] flex items-center gap-[8px]">
              <span className="relative flex h-[10px] w-[10px] items-center justify-center">
                <span className="rec-ring absolute h-[10px] w-[10px] rounded-full bg-[#ff0000]" />
                <span className="rec-dot relative h-[10px] w-[10px] rounded-full bg-[#ff0000]" />
              </span>

              <span className="rec-text text-[15px] font-medium text-[#ff0000]">
                REC
              </span>
            </div>

            {/* See You At The Top */}
            <div className="absolute left-1/2 top-1/2 w-[64%] max-w-[320px] -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/assets/header/seeyouatthetop.svg"
                alt="See you at the top"
                width={390}
                height={130}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        {/* =========================
            MASTERCLASS
        ========================== */}

        <div
          id="masterclass"
          className="
            absolute
            right-[4%]
            top-[31%]
            z-20
            w-[310px]
            border
            border-white/10
            bg-[#111]
            p-[9px]
            shadow-2xl

            lg:right-[4.5%]
            lg:w-[330px]

            xl:right-[5.3%]
            xl:w-[355px]
          "
        >
          {/* Card */}
          <div className="bg-[#050505]">
            {/* Image */}
            <div className="relative aspect-[1.63/1] w-full overflow-hidden">
              <Image
                src="/assets/header/masterclassimage.avif"
                alt="Phone Editing & Social Media with Samy"
                fill
                sizes="400px"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="px-[17px] pb-[15px] pt-[16px]">
              <h2 className="font-[family-name:var(--font-host-grotesk)] text-[20px] font-medium leading-[1.03] tracking-[-0.025em] text-white">
                Phone Editing &amp;
                <br />
                Social Media with Samy
              </h2>

              <p className="mt-[8px] text-[10px] leading-[1.5] text-white/45">
                Learn Samy&apos;s complete mobile editing workflow
              </p>

              {/* Details */}
              <div className="mt-[18px] space-y-[14px]">
                {/* Videos */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[9px]">
                    <Video
                      size={14}
                      strokeWidth={1.7}
                      className="text-[#C20000]"
                    />

                    <span className="text-[10px] text-white/70">Videos</span>
                  </div>

                  <span className="text-[10px] text-white/80">12</span>
                </div>

                {/* Language */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[9px]">
                    <Languages
                      size={14}
                      strokeWidth={1.7}
                      className="text-[#C20000]"
                    />

                    <span className="text-[10px] text-white/70">Language</span>
                  </div>

                  <span className="text-[10px] text-white/80">
                    Arabic/English
                  </span>
                </div>
              </div>

              <p className="mt-[17px] text-center text-[8px] text-white/35">
                Instant access · Lifetime access · Watch on any device
              </p>
            </div>
          </div>

          {/* CTA */}
          <Button
            href={MASTERCLASS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[10px] h-[46px] font-[family-name:var(--font-host-grotesk)] text-[17px] font-medium"
          >
            Join the Course
          </Button>

          {/* InShot */}
          <div className="hero-float-inshot absolute -right-[26px] -top-[34px] xl:-right-[32px] xl:-top-[40px]">
            <Image
              src="/assets/header/inshot.svg"
              alt="InShot"
              width={86}
              height={86}
              className="h-[68px] w-[68px] lg:h-[76px] lg:w-[76px] xl:h-[86px] xl:w-[86px]"
            />
          </div>

          {/* CapCut */}
          <div className="hero-float-capcut absolute -left-[56px] top-[155px] xl:-left-[70px] xl:top-[165px]">
            <Image
              src="/assets/header/capcut.svg"
              alt="CapCut"
              width={92}
              height={92}
              className="h-[72px] w-[72px] lg:h-[82px] lg:w-[82px] xl:h-[92px] xl:w-[92px]"
            />
          </div>
        </div>
      </div>

      {/* =========================
          MOBILE
      ========================== */}

      <div className="relative min-h-screen md:hidden">
        {/* Background */}
        <div className="absolute inset-x-0 top-0 h-[700px]">
          <Image
            src="/assets/header/headerbackground.avif"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[45%_center]"
          />

          <div className="absolute inset-0 bg-black/35" />

          {/* Bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-b from-transparent via-[#040404]/45 to-[#040404]" />
        </div>

        <div className="relative z-10 px-5 pt-[145px] sm:px-8">
          {/* Title */}
          <h1 className="text-center font-[family-name:var(--font-host-grotesk)] text-[clamp(43px,12vw,64px)] font-normal leading-[0.93] tracking-[-0.045em] text-white">
            <span className="block">Film Director &amp;</span>

            <span className="block">Content Creator</span>
          </h1>

          {/* Camera frame */}
          <div className="relative mx-auto mt-14 h-[230px] w-full max-w-[360px]">
            <span className="absolute left-0 top-0 h-[11px] w-[11px] border-l-2 border-t-2 border-white" />
            <span className="absolute right-0 top-0 h-[11px] w-[11px] border-r-2 border-t-2 border-white" />
            <span className="absolute bottom-0 left-0 h-[11px] w-[11px] border-b-2 border-l-2 border-white" />
            <span className="absolute bottom-0 right-0 h-[11px] w-[11px] border-b-2 border-r-2 border-white" />

            {/* REC */}
            <div className="absolute left-5 top-6 flex items-center gap-[8px]">
              <span className="relative flex h-[9px] w-[9px] items-center justify-center">
                <span className="rec-ring absolute h-[9px] w-[9px] rounded-full bg-[#ff0000]" />
                <span className="rec-dot relative h-[9px] w-[9px] rounded-full bg-[#ff0000]" />
              </span>

              <span className="rec-text text-[14px] font-medium text-[#ff0000]">
                REC
              </span>
            </div>

            {/* See You At The Top */}
            <div className="absolute left-1/2 top-1/2 w-[230px] -translate-x-1/2 -translate-y-1/2 sm:w-[270px]">
              <Image
                src="/assets/header/seeyouatthetop.svg"
                alt="See you at the top"
                width={390}
                height={130}
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* Mobile masterclass */}
          <div
            id="masterclass-mobile"
            className="relative mx-auto mt-16 w-full max-w-[410px] border border-white/10 bg-[#111] p-[9px]"
          >
            {/* InShot */}
            <div className="hero-float-inshot-mobile absolute -right-[12px] -top-[32px] z-10">
              <Image
                src="/assets/header/inshot.svg"
                alt="InShot"
                width={72}
                height={72}
                className="h-[64px] w-[64px]"
              />
            </div>

            {/* CapCut */}
            <div className="hero-float-capcut-mobile absolute -left-[16px] top-[145px] z-10">
              <Image
                src="/assets/header/capcut.svg"
                alt="CapCut"
                width={72}
                height={72}
                className="h-[64px] w-[64px]"
              />
            </div>

            {/* Card */}
            <div className="bg-[#050505]">
              <div className="relative aspect-[1.63/1] w-full overflow-hidden">
                <Image
                  src="/assets/header/masterclassimage.avif"
                  alt="Phone Editing & Social Media with Samy"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="px-4 pb-4 pt-5">
                <h2 className="font-[family-name:var(--font-host-grotesk)] text-[22px] font-medium leading-[1.05] tracking-[-0.025em] text-white">
                  Phone Editing &amp;
                  <br />
                  Social Media with Samy
                </h2>

                <p className="mt-2 text-[11px] leading-[1.5] text-white/45">
                  Learn Samy&apos;s complete mobile editing workflow
                </p>

                {/* Details */}
                <div className="mt-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Video
                        size={15}
                        strokeWidth={1.7}
                        className="text-[#C20000]"
                      />

                      <span className="text-[11px] text-white/70">Videos</span>
                    </div>

                    <span className="text-[11px] text-white/80">12</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Languages
                        size={15}
                        strokeWidth={1.7}
                        className="text-[#C20000]"
                      />

                      <span className="text-[11px] text-white/70">
                        Language
                      </span>
                    </div>

                    <span className="text-[11px] text-white/80">
                      Arabic/English
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-center text-[8px] text-white/35">
                  Instant access · Lifetime access · Watch on any device
                </p>
              </div>
            </div>

            {/* CTA */}
            <Button
              href={MASTERCLASS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[9px] h-[54px] font-[family-name:var(--font-host-grotesk)] text-[18px] font-medium sm:text-[20px]"
            >
              Join the Course
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
