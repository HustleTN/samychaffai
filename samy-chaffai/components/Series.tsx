import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const episodes = [
  {
    title: "Pollution in the era of technology",
    image: "/assets/series/ep1.avif",
    href: "https://www.instagram.com/samy.chaffai/reel/DT8ZIKSCIQC/",
  },
  {
    title: "Wedding in the era of Ai & social media",
    image: "/assets/series/ep2.avif",
    href: "https://www.instagram.com/samy.chaffai/reel/DUv1zmYCMoq/",
  },
  {
    title: "Kids will never know...",
    image: "/assets/series/ep3.avif",
    href: "https://www.instagram.com/samy.chaffai/reel/DWRvl7FCJ4c/",
  },
];

export default function Series() {
  return (
    <section
      id="series"
      className="relative w-full overflow-hidden bg-[#040404]"
    >
      {/* =========================
          DESKTOP / TABLET
      ========================== */}

      <div className="relative hidden min-h-[760px] md:block lg:min-h-[820px] xl:min-h-[860px]">
        {/* Background */}
        <Image
          src="/assets/series/microdramabackground.avif"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Top fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[130px] bg-gradient-to-b from-[#040404] to-transparent" />

        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[150px] bg-gradient-to-b from-transparent to-[#040404]" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-12 pt-20 xl:px-16">
          {/* Top line */}
          <div className="flex items-center justify-between">
            <span className="font-[family-name:var(--font-inter)] text-[12px] font-normal text-white/45 sm:text-[13px]">
              Series
            </span>

            <span className="font-[family-name:var(--font-inter)] text-[12px] font-medium text-white sm:text-[13px]">
              04 <span className="text-white/35">/ 05</span>
            </span>
          </div>

          {/* Main row */}
          <div className="mt-14 flex items-end justify-between gap-8">
            <div className="flex items-end gap-4">
              <h2 className="font-[family-name:var(--font-host-grotesk)] text-[48px] font-normal leading-none tracking-[-0.04em] text-white lg:text-[56px] xl:text-[64px]">
                Micro Drama: The New Normal
              </h2>

              <span className="pb-1 font-[family-name:var(--font-host-grotesk)] text-[18px] font-normal text-white lg:text-[20px]">
                Series
              </span>
            </div>

            <span className="pb-1 font-[family-name:var(--font-host-grotesk)] text-[18px] font-normal text-white lg:text-[20px]">
              Cinema concept/Drama
            </span>
          </div>

          {/* Episodes */}
          <div className="mx-auto mt-20 grid w-[64%] max-w-[760px] grid-cols-3 gap-5">
            {episodes.map((episode) => (
              <a
                key={episode.title}
                href={episode.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[0.83] w-full overflow-hidden border-[3px] border-white">
                  <Image
                    src={episode.image}
                    alt={episode.title}
                    fill
                    sizes="260px"
                    className="object-cover transition-all duration-300 group-hover:scale-[1.015] group-hover:opacity-35"
                  />

                  {/* Dark hover overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />

                  {/* Hover CTA */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="relative flex h-[46px] min-w-[165px] items-center justify-center gap-2 bg-[#C20000] px-5 font-[family-name:var(--font-inter)] text-[14px] font-semibold text-white">
                      <span className="absolute left-0 top-0 h-[9px] w-[9px] border-l-2 border-t-2 border-white" />
                      <span className="absolute right-0 top-0 h-[9px] w-[9px] border-r-2 border-t-2 border-white" />
                      <span className="absolute bottom-0 left-0 h-[9px] w-[9px] border-b-2 border-l-2 border-white" />
                      <span className="absolute bottom-0 right-0 h-[9px] w-[9px] border-b-2 border-r-2 border-white" />

                      <span>Check Reference</span>

                      <ArrowUpRight size={15} strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="flex min-h-[78px] items-start justify-center px-2 pt-4 text-center">
                  <h3 className="font-[family-name:var(--font-host-grotesk)] text-[17px] font-normal leading-[1.35] text-white lg:text-[18px]">
                    {episode.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* =========================
          MOBILE
      ========================== */}

      <div className="relative md:hidden">
        {/* Background */}
        <div className="absolute inset-x-0 top-0 h-[720px]">
          <Image
            src="/assets/series/microdramabackground.avif"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[48%_center]"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="pointer-events-none absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-[#040404] to-transparent" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[260px] bg-gradient-to-b from-transparent to-[#040404]" />
        </div>

        <div className="relative z-10 px-5 pb-16 pt-20 sm:px-8">
          {/* Top line */}
          <div className="flex items-center justify-between">
            <span className="font-[family-name:var(--font-inter)] text-[12px] font-normal text-white/45">
              Series
            </span>

            <span className="font-[family-name:var(--font-inter)] text-[12px] font-medium text-white">
              04 <span className="text-white/35">/ 05</span>
            </span>
          </div>

          {/* Heading */}
          <div className="mt-10">
            <div className="flex flex-wrap items-end gap-x-3 gap-y-2">
              <h2 className="font-[family-name:var(--font-host-grotesk)] text-[42px] font-normal leading-[0.98] tracking-[-0.04em] text-white sm:text-[50px]">
                Micro Drama:
                <br />
                The New Normal
              </h2>

              <span className="pb-1 font-[family-name:var(--font-host-grotesk)] text-[16px] font-normal text-white">
                Series
              </span>
            </div>

            <p className="mt-4 font-[family-name:var(--font-host-grotesk)] text-[17px] font-normal text-white">
              Cinema concept/Drama
            </p>
          </div>

          {/* Episodes */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {episodes.map((episode, index) => (
              <a
                key={episode.title}
                href={episode.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block ${
                  index === episodes.length - 1
                    ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-16px)]"
                    : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[0.83] w-full overflow-hidden border-[3px] border-white">
                  <Image
                    src={episode.image}
                    alt={episode.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="px-3 pt-3 text-center font-[family-name:var(--font-host-grotesk)] text-[18px] font-normal leading-[1.35] text-white">
                  {episode.title}
                </h3>

                {/* Mobile button */}
                <div className="mt-3">
                  <div className="flex h-[52px] w-full items-center justify-center gap-2 bg-[#252525] font-[family-name:var(--font-inter)] text-[15px] font-semibold text-white transition-colors duration-200 active:bg-[#303030] sm:text-[16px]">
                    <span>Check Reference</span>

                    <ArrowUpRight size={17} strokeWidth={2} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
