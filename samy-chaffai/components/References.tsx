"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const references = [
  {
    title: "Against the Top",
    subtitle: "2WTATennis – Women Ons Jabeur",
    image: "/assets/references/reference1.avif",
    href: "https://www.instagram.com/samy.chaffai/reel/CkVwpSwqTeq/",
  },
  {
    title: "Thor, Marvel Movie",
    subtitle: "Premiere",
    image: "/assets/references/reference2.avif",
    href: "https://www.instagram.com/samy.chaffai/reel/Cf1Yle5K_85/",
  },
  {
    title: "Cannes Film Festival",
    subtitle: "",
    image: "/assets/references/reference3.avif",
    href: "https://www.instagram.com/samy.chaffai/reel/CsgKjotKg18/",
  },
  {
    title: "Visit Qatar With Kaka",
    subtitle: "Football player",
    image: "/assets/references/reference4.avif",
    href: "https://www.instagram.com/p/C3sFQoYMV11/",
  },
  {
    title: "Fifa World Cup",
    subtitle: "",
    image: "/assets/references/reference5.avif",
    href: "https://www.instagram.com/samy.chaffai/reel/ClQsFWEqyrk/",
  },
];

export default function References() {
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const [visibleCards, setVisibleCards] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  /* =========================================
     TRIGGER WHEN CARDS AREA ENTERS VIEWPORT
  ========================================= */

  useEffect(() => {
    const trigger = triggerRef.current;

    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(trigger);

    return () => observer.disconnect();
  }, []);

  /* =========================================
     QUICK CARD CASCADE
  ========================================= */

  useEffect(() => {
    if (!hasAnimated) return;

    const timers = references.map((_, index) =>
      window.setTimeout(() => {
        setVisibleCards(index + 1);
      }, index * 110)
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [hasAnimated]);

  return (
    <section
      id="references"
      className="w-full bg-[#040404] px-5 py-20 sm:px-8 md:py-24 lg:px-12 lg:py-28 xl:px-16"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {/* =========================
            TOP LABEL
        ========================== */}

        <div className="flex items-center justify-between">
          <span className="font-[family-name:var(--font-inter)] text-[12px] font-normal text-white/45 sm:text-[13px]">
            References
          </span>

          <span className="font-[family-name:var(--font-inter)] text-[12px] font-medium text-white sm:text-[13px]">
            02 <span className="text-white/35">/ 05</span>
          </span>
        </div>

        {/* =========================
            TITLE
        ========================== */}

        <h2 className="mt-12 font-[family-name:var(--font-host-grotesk)] text-[46px] font-normal leading-none tracking-[-0.04em] text-white sm:text-[56px] lg:mt-14 lg:text-[64px]">
          References
        </h2>

        {/* Animation trigger */}
        <div ref={triggerRef} className="h-px w-full" />

        {/* =========================
            CARDS
        ========================== */}

        <div className="mt-14 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5 lg:gap-4">
          {references.map((reference, index) => {
            const isVisible = index < visibleCards;

            return (
              <a
                key={reference.title}
                href={reference.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group
                  flex
                  h-full
                  min-w-0
                  flex-col
                  transition-all
                  duration-500
                  ease-out

                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[24px] opacity-0"
                  }
                `}
              >
                {/* =========================
                    IMAGE
                ========================== */}

                <div className="relative h-[520px] w-full overflow-hidden bg-[#111] sm:h-[500px] lg:h-[390px] xl:h-[430px]">
                  <Image
                    src={reference.image}
                    alt={reference.title}
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      20vw
                    "
                    className="object-cover transition-all duration-300 group-hover:scale-[1.015] group-hover:opacity-40"
                  />

                  {/* Desktop hover overlay */}
                  <div className="pointer-events-none absolute inset-0 hidden bg-black/0 transition-colors duration-300 group-hover:bg-black/25 lg:block" />

                  {/* =========================
                      DESKTOP HOVER BUTTON
                  ========================== */}

                  <div className="pointer-events-none absolute inset-0 hidden items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:flex">
                    <div className="relative flex h-[48px] min-w-[180px] items-center justify-center gap-2 bg-[#C20000] px-5 font-[family-name:var(--font-inter)] text-[14px] font-semibold text-white">
                      {/* corners */}

                      <span className="absolute left-0 top-0 h-[9px] w-[9px] border-l-2 border-t-2 border-white" />

                      <span className="absolute right-0 top-0 h-[9px] w-[9px] border-r-2 border-t-2 border-white" />

                      <span className="absolute bottom-0 left-0 h-[9px] w-[9px] border-b-2 border-l-2 border-white" />

                      <span className="absolute bottom-0 right-0 h-[9px] w-[9px] border-b-2 border-r-2 border-white" />

                      <span>Check Reference</span>

                      <ArrowUpRight size={16} strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* =========================
                    TEXT
                ========================== */}

                <div className="flex min-h-[72px] flex-col items-center justify-start px-2 pt-3 text-center sm:min-h-[82px] lg:min-h-[105px] lg:pt-5">
                  <h3 className="font-[family-name:var(--font-host-grotesk)] text-[18px] font-normal leading-tight text-white lg:text-[16px] xl:text-[18px]">
                    {reference.title}
                  </h3>

                  {reference.subtitle && (
                    <p className="mt-1 font-[family-name:var(--font-host-grotesk)] text-[16px] font-normal leading-snug text-white lg:text-[15px] xl:text-[17px]">
                      {reference.subtitle}
                    </p>
                  )}
                </div>

                {/* =========================
                    RED STROKE
                ========================== */}

                <div className="mt-2 h-[4px] w-full bg-[#C20000] transition-opacity duration-300 group-hover:opacity-50 lg:mt-auto" />

                {/* =========================
                    MOBILE BUTTON
                ========================== */}

                <div className="mt-2 lg:hidden">
                  <div className="flex h-[52px] w-full items-center justify-center gap-2 bg-[#252525] font-[family-name:var(--font-inter)] text-[15px] font-semibold text-white transition-colors duration-200 active:bg-[#303030] min-[390px]:text-[16px]">
                    <span>Check Reference</span>

                    <ArrowUpRight size={17} strokeWidth={2} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
