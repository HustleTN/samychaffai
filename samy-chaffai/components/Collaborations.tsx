"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const brands = [
  {
    name: "Warner Bros",
    logo: "/assets/brands/warnerbros.svg",
  },
  {
    name: "1 BF Summit",
    logo: "/assets/brands/1BillionFollowersSummit.svg",
  },
  {
    name: "Pixar",
    logo: "/assets/brands/Pixar.svg",
  },
  {
    name: "DAZN",
    logo: "/assets/brands/dazn.svg",
  },
  {
    name: "Avene",
    logo: "/assets/brands/avene.svg",
  },
  {
    name: "Match4Hope Visit Qatar",
    logo: "/assets/brands/visitqatar.svg",
  },
  {
    name: "Formula 1 Doha Qatar",
    logo: "/assets/brands/formula1.svg",
  },
  {
    name: "Warner Bros",
    logo: "/assets/brands/comiccon.svg",
  },
  {
    name: "FIFA",
    logo: "/assets/brands/fifa.svg",
  },
  {
    name: "KIA",
    logo: "/assets/brands/kia.svg",
  },
  {
    name: "Pathé",
    logo: "/assets/brands/Dubai.svg",
  },
  {
    name: "Sennheiser",
    logo: "/assets/brands/sennheiser.svg",
  },
  {
    name: "LG",
    logo: "/assets/brands/lg.svg",
  },
];

export default function Collaborations() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [desktopVisible, setDesktopVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDesktopVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="collaborations"
      className="
        w-full
        bg-[#040404]
        px-5
        py-8
        sm:px-8
        sm:py-10
        md:py-12
        lg:px-12
        lg:py-12
        xl:px-16
      "
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Top label */}
        <div className="flex items-center justify-between">
          <span className="font-[family-name:var(--font-inter)] text-[12px] font-normal text-white/45 sm:text-[13px]">
            Selected Partners
          </span>

          <span className="font-[family-name:var(--font-inter)] text-[12px] font-medium text-white sm:text-[13px]">
            03 <span className="text-white/35">/ 05</span>
          </span>
        </div>

        {/* Title */}
        <h2
          className={`mt-8 font-[family-name:var(--font-host-grotesk)] text-[46px] font-normal leading-none tracking-[-0.04em] text-white transition-all duration-700 ease-out sm:text-[56px] md:${
            desktopVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          } lg:mt-10 lg:text-[64px] motion-reduce:transition-none`}
        >
          Brand Collaborations
        </h2>

        {/* Desktop grid */}
        <div className="mt-10 hidden grid-cols-5 gap-[3px] md:grid lg:mt-14">
          {/* Red statement block */}
          <div
            className={`col-span-2 flex min-h-[154px] items-center justify-center bg-[#C20000] px-8 text-center transition-all duration-700 ease-out motion-reduce:transition-none ${
              desktopVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{
              transitionDelay: desktopVisible ? "120ms" : "0ms",
            }}
          >
            <p className="font-[family-name:var(--font-inter)] text-[18px] font-semibold uppercase leading-tight text-white lg:text-[20px]">
              We did crazy things with them
            </p>
          </div>

          {/* First row */}
          {brands.slice(0, 3).map((brand, index) => (
            <div
              key={`${brand.name}-${brand.logo}`}
              className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
                desktopVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{
                transitionDelay: desktopVisible
                  ? `${180 + index * 70}ms`
                  : "0ms",
              }}
            >
              <BrandCard name={brand.name} logo={brand.logo} />
            </div>
          ))}

          {/* Remaining rows */}
          {brands.slice(3).map((brand, index) => (
            <div
              key={`${brand.name}-${brand.logo}`}
              className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
                desktopVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{
                transitionDelay: desktopVisible
                  ? `${390 + index * 55}ms`
                  : "0ms",
              }}
            >
              <BrandCard name={brand.name} logo={brand.logo} />
            </div>
          ))}
        </div>

        {/* =========================
            MOBILE
        ========================== */}

        <div className="mt-8 md:hidden">
          {/* Red statement block */}
          <div className="flex min-h-[110px] items-center justify-center bg-[#C20000] px-6 text-center">
            <p className="font-[family-name:var(--font-inter)] text-[16px] font-semibold uppercase leading-tight text-white">
              We did crazy things with them
            </p>
          </div>

          {/* Mobile logo grid */}
          <div className="mt-[3px] grid grid-cols-2 gap-[3px]">
            {brands.map((brand) => (
              <BrandCard
                key={`${brand.name}-${brand.logo}`}
                name={brand.name}
                logo={brand.logo}
                mobile
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandCard({
  name,
  logo,
  mobile = false,
}: {
  name: string;
  logo: string;
  mobile?: boolean;
}) {
  return (
    <div
      className={`group flex h-full flex-col overflow-hidden bg-[#191919] ${
        mobile ? "min-h-[145px]" : "min-h-[154px]"
      }`}
    >
      {/* Label strip */}
      <div className="flex h-[30px] shrink-0 items-center justify-center bg-white/[0.05] px-2 transition-colors duration-300 ease-out md:group-hover:bg-[#C20000]">
        <span className="truncate text-center font-[family-name:var(--font-inter)] text-[9px] font-normal uppercase tracking-[0.04em] text-white/80 transition-colors duration-300 md:group-hover:text-white sm:text-[10px] lg:text-[11px]">
          {name}
        </span>
      </div>

      {/* Logo area */}
      <div className="flex flex-1 items-center justify-center px-6 py-7">
        <div className="relative h-[58px] w-full max-w-[150px]">
          <Image
            src={logo}
            alt={name}
            fill
            sizes="180px"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
