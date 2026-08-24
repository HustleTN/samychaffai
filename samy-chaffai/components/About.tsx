"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/samy.chaffai",
    icon: "/assets/instagram.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/samychaffaiofficiel",
    icon: "/assets/facebook.svg",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UC7KgyaMqLwDFnn7MlO_Bi1w",
    icon: "/assets/youtube.svg",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@samy.chaffai",
    icon: "/assets/tiktok.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/samy-chaffa%C3%AF/",
    icon: "/assets/linkedin.svg",
  },
];

const awards = [
  "/assets/about/award1.svg",
  "/assets/about/award2.svg",
  "/assets/about/award3.svg",
  "/assets/about/award4.svg",
  "/assets/about/award5.svg",
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [followers, setFollowers] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1500;
    const target = 3.5;
    const startTime = performance.now();

    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = target * easedProgress;

      setFollowers(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setFollowers(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasAnimated]);

  const followerText = followers >= 3.5 ? "3.5M+" : `${followers.toFixed(1)}M+`;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full overflow-hidden bg-[#040404]"
    >
      {/* =========================
          DESKTOP / TABLET
      ========================== */}

      <div className="relative hidden min-h-[760px] md:block lg:min-h-[820px] xl:min-h-[860px]">
        {/* Background */}
        <Image
          src="/assets/about/spidermansamy.avif"
          alt="Samy Chaffai"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Top fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[130px] bg-gradient-to-b from-[#040404] to-transparent" />

        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[150px] bg-gradient-to-b from-transparent to-[#040404]" />

        {/* =========================
            RIGHT CONTENT
        ========================== */}

        <div className="absolute right-[7%] top-[12%] z-10 w-[42%] max-w-[680px] lg:right-[8%] xl:right-[10%]">
          {/* Name */}
          <h2 className="font-[family-name:var(--font-host-grotesk)] text-[clamp(30px,2.4vw,42px)] font-normal leading-none tracking-[-0.03em] text-white">
            Samy Chaffai
          </h2>

          {/* Role */}
          <p className="mt-3 font-[family-name:var(--font-host-grotesk)] text-[clamp(20px,1.7vw,31px)] font-normal leading-tight text-white/55">
            Film Director &amp; Content Creator
          </p>

          {/* Followers */}
          <div className="mt-10 inline-flex items-center gap-4 bg-[#C20000] px-6 py-5 lg:px-7 xl:px-8">
            <span className="min-w-[145px] shrink-0 font-[family-name:var(--font-host-grotesk)] text-[clamp(36px,3vw,56px)] font-semibold leading-none tracking-[-0.04em] text-white">
              {followerText}
            </span>

            <span className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[clamp(13px,1vw,18px)] font-semibold leading-none text-white">
              followers across platforms
            </span>
          </div>

          {/* Socials */}
          <div className="mt-7 flex items-center gap-7 xl:gap-9">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="transition-all duration-300 hover:-translate-y-1 hover:opacity-70"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="h-[34px] w-auto lg:h-[40px] xl:h-[48px]"
                />
              </a>
            ))}
          </div>
        </div>

        {/* =========================
            AWARDS
        ========================== */}

        <div className="absolute bottom-[14%] left-1/2 z-10 flex w-[76%] -translate-x-1/2 items-end justify-between gap-4">
          {awards.map((award, index) => (
            <div
              key={award}
              className="
                group
                flex
                flex-1
                items-center
                justify-center
                transition-transform
                duration-300
                ease-out
                hover:-translate-y-[6px]
                hover:scale-[1.055]
              "
            >
              <Image
                src={award}
                alt={`Award ${index + 1}`}
                width={250}
                height={150}
                className="
                  h-auto
                  w-full
                  max-w-[230px]
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* =========================
          MOBILE
      ========================== */}

      <div className="relative md:hidden">
        {/* Mobile image */}
        <div className="relative h-[560px] w-full sm:h-[650px]">
          <Image
            src="/assets/about/spidermansamy.avif"
            alt="Samy Chaffai"
            fill
            sizes="100vw"
            className="object-cover object-[42%_center]"
          />

          <div className="absolute inset-0 bg-black/15" />

          <div className="pointer-events-none absolute inset-x-0 top-0 h-[90px] bg-gradient-to-b from-[#040404] to-transparent" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-b from-transparent to-[#040404]" />
        </div>

        {/* Mobile content */}
        <div className="relative z-10 -mt-14 px-5 pb-14 sm:px-8">
          {/* Name */}
          <h2 className="font-[family-name:var(--font-host-grotesk)] text-[34px] font-normal leading-none tracking-[-0.03em] text-white sm:text-[40px]">
            Samy Chaffai
          </h2>

          {/* Role */}
          <p className="mt-2 font-[family-name:var(--font-host-grotesk)] text-[18px] font-normal leading-tight text-white/55 sm:text-[20px]">
            Film Director &amp; Content Creator
          </p>

          {/* Followers */}
          <div className="mt-7 flex w-full items-center gap-3 bg-[#C20000] px-5 py-5">
            <span className="min-w-[110px] shrink-0 font-[family-name:var(--font-host-grotesk)] text-[40px] font-semibold leading-none tracking-[-0.04em] text-white sm:min-w-[130px] sm:text-[46px]">
              {followerText}
            </span>

            <span className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[11px] font-semibold leading-none text-white min-[390px]:text-[12px] sm:text-[14px]">
              followers across platforms
            </span>
          </div>

          {/* Socials */}
          <div className="mt-6 flex items-center justify-between">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="transition-opacity duration-200 active:opacity-60"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="h-[30px] w-auto sm:h-[34px]"
                />
              </a>
            ))}
          </div>

          {/* Awards */}
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-7">
            {awards.map((award, index) => (
              <div
                key={award}
                className={`
                  flex
                  items-center
                  justify-center
                  transition-transform
                  duration-300
                  active:scale-[1.04]

                  ${index === awards.length - 1 ? "col-span-2" : ""}
                `}
              >
                <Image
                  src={award}
                  alt={`Award ${index + 1}`}
                  width={220}
                  height={130}
                  className="h-auto w-full max-w-[180px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
