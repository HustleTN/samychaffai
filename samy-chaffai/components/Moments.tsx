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

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % moments.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const selectMoment = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="moments"
      className="relative w-full overflow-hidden bg-[#040404]"
    >
      {/* =========================
          MAIN IMAGE AREA
      ========================== */}

      <div
        className="
          relative
          w-full
          overflow-hidden

          aspect-[4/5]
          sm:aspect-[16/10]
          lg:aspect-[16/9]
        "
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* =========================
            BLURRED BACKGROUND FILL
        ========================== */}

        {moments.map((moment, index) => (
          <Image
            key={`background-${moment.image}`}
            src={moment.image}
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
            className={`
              object-cover
              object-center
              scale-[1.08]
              blur-[20px]
              transition-opacity
              duration-700
              ease-out
              ${
                index === activeIndex
                  ? "opacity-35"
                  : "pointer-events-none opacity-0"
              }
            `}
          />
        ))}

        {/* Background dark overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/45" />

        {/* =========================
            REAL IMAGE
            Full width feel + no cropping
        ========================== */}

        {moments.map((moment, index) => (
          <div
            key={moment.image}
            className={`
              absolute
              inset-0
              transition-opacity
              duration-700
              ease-out
              ${
                index === activeIndex
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }
            `}
          >
            <Image
              src={moment.image}
              alt={moment.alt}
              fill
              sizes="100vw"
              priority={index === 0}
              className="
                object-contain
                object-center
              "
            />
          </div>
        ))}

        {/* Overall subtle overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/10" />

        {/* =========================
            TOP GRADIENT
        ========================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            z-[2]
            h-[90px]
            bg-gradient-to-b
            from-[#040404]
            via-[#040404]/65
            to-transparent

            sm:h-[110px]
            lg:h-[130px]
          "
        />

        {/* =========================
            BOTTOM GRADIENT
        ========================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-[2]
            h-[220px]
            bg-gradient-to-t
            from-[#040404]
            via-[#040404]/72
            to-transparent

            sm:h-[245px]
            lg:h-[280px]
          "
        />

        {/* Side darkening */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[8%] bg-gradient-to-r from-[#040404]/60 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-[8%] bg-gradient-to-l from-[#040404]/60 to-transparent" />

        {/* =========================
            CONTENT
        ========================== */}

        <div className="absolute inset-x-0 bottom-[20px] z-10 sm:bottom-[26px] lg:bottom-[34px]">
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
                    w-[72px]
                    shrink-0
                    overflow-hidden
                    border
                    bg-[#191919]
                    transition-all
                    duration-200

                    sm:w-[84px]
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
                    sizes="(max-width: 1024px) 90px, 120px"
                    className="object-cover"
                  />

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      bg-black
                      transition-opacity
                      duration-200
                      ${activeIndex === index ? "opacity-0" : "opacity-15"}
                    `}
                  />
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-4 h-px w-full bg-white/65 lg:mt-5" />

            {/* Bottom text */}
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between lg:mt-5">
              <h2 className="font-[family-name:var(--font-host-grotesk)] text-[20px] font-normal leading-none text-white sm:text-[22px] lg:text-[24px]">
                <span className="text-white/80">[</span>
                <span className="mx-3">People &amp; Moments</span>
                <span className="text-white/80">]</span>
              </h2>

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
