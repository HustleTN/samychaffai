"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const moments = Array.from({ length: 12 }, (_, index) => ({
  image: `/assets/moments/picture${index + 1}.avif`,
  alt: `Samy Chaffai moment ${index + 1}`,
}));

export default function Moments() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* Auto change every 3 seconds */
  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % moments.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isPaused, activeIndex]);

  const selectMoment = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="moments"
      className="relative w-full overflow-hidden bg-[#040404]"
    >
      {/* =========================
          MAIN IMAGE
      ========================== */}

      <div
        className="relative h-[620px] w-full sm:h-[700px] lg:h-[760px] xl:h-[820px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Active image */}
        {moments.map((moment, index) => (
          <Image
            key={moment.image}
            src={moment.image}
            alt={moment.alt}
            fill
            sizes="100vw"
            priority={index === 0}
            className={`
              object-cover object-center
              transition-opacity duration-700 ease-out
              ${
                index === activeIndex
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }
            `}
          />
        ))}

        {/* Overall dark overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/25" />

        {/* Top gradient */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[160px] bg-gradient-to-b from-[#040404]/80 via-[#040404]/25 to-transparent" />

        {/* Bottom gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[330px] bg-gradient-to-b from-transparent via-[#040404]/45 to-[#040404]/90" />

        {/* Side subtle darkening */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[12%] bg-gradient-to-r from-black/30 to-transparent" />

        <div className="pointer-events-none absolute inset-y-0 right-0 w-[12%] bg-gradient-to-l from-black/25 to-transparent" />

        {/* =========================
            CONTENT
        ========================== */}

        <div className="absolute inset-x-0 bottom-[50px] z-10 lg:bottom-[55px]">
          <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            {/* =========================
                THUMBNAILS
            ========================== */}

            <div
              className="
                flex
                w-full
                gap-[8px]
                overflow-x-auto
                pb-2

                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden

                lg:grid
                lg:grid-cols-12
                lg:overflow-visible
                lg:pb-0
              "
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {moments.map((moment, index) => (
                <button
                  key={moment.image}
                  type="button"
                  onClick={() => selectMoment(index)}
                  onMouseEnter={() => selectMoment(index)}
                  onFocus={() => {
                    setIsPaused(true);
                    selectMoment(index);
                  }}
                  onBlur={() => setIsPaused(false)}
                  aria-label={`Show moment ${index + 1}`}
                  className={`
                    relative
                    aspect-square
                    w-[78px]
                    shrink-0
                    overflow-hidden
                    border
                    bg-[#191919]
                    transition-all
                    duration-200

                    sm:w-[88px]

                    lg:w-full

                    ${
                      activeIndex === index
                        ? "border-white opacity-100"
                        : "border-white/45 opacity-80 hover:border-white hover:opacity-100"
                    }
                  `}
                >
                  <Image
                    src={moment.image}
                    alt=""
                    fill
                    sizes="
                      (max-width: 1024px) 90px,
                      120px
                    "
                    className="object-cover"
                  />

                  {/* subtle thumbnail overlay */}
                  <div
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      bg-black
                      transition-opacity
                      duration-200
                      ${
                        activeIndex === index
                          ? "opacity-0"
                          : "opacity-15"
                      }
                    `}
                  />
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-5 h-px w-full bg-white/70 lg:mt-6" />

            {/* Bottom text */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:mt-7">
              {/* Left */}
              <h2 className="font-[family-name:var(--font-host-grotesk)] text-[20px] font-normal leading-none text-white sm:text-[22px] lg:text-[24px]">
                <span className="text-white/80">[</span>
                <span className="mx-3">People &amp; Moments</span>
                <span className="text-white/80">]</span>
              </h2>

              {/* Right */}
              <p className="font-[family-name:var(--font-host-grotesk)] text-[18px] font-normal leading-tight text-white sm:text-right lg:text-[24px]">
                Events · Collaborations · Community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}