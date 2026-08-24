"use client";

import Image from "next/image";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

const EMAIL = "chaffai.samyav@gmail.com";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <footer
      id="contact"
      className="w-full bg-[#040404] px-5 py-14 sm:px-8 md:py-16 lg:px-12 lg:py-20 xl:px-16"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Top row */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
          {/* Logo */}
          <div>
            <Image
              src="/assets/samylogo.svg"
              alt="Samy Chaffai"
              width={132}
              height={60}
              className="h-auto w-[110px] sm:w-[120px] lg:w-[132px]"
            />
          </div>

          {/* Contact */}
          <div className="md:justify-self-end md:w-full md:max-w-[360px]">
            <p className="font-[family-name:var(--font-inter)] text-[12px] font-normal text-white/45 sm:text-[13px]">
              Contact
            </p>

            <div className="mt-3 h-px w-full bg-white/10" />

            {/* Email / copy interaction */}
            <div className="group relative mt-3 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={copyEmail}
                className="min-w-0 cursor-pointer text-left font-[family-name:var(--font-inter)] text-[15px] font-medium text-white transition-opacity duration-200 hover:opacity-70 sm:text-[16px] lg:text-[17px]"
                aria-label={`Copy ${EMAIL} to clipboard`}
              >
                {EMAIL}
              </button>

              {/* Desktop hover button / Mobile always visible */}
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="
                  flex shrink-0 items-center gap-1.5
                  border border-white/15
                  bg-white/[0.05]
                  px-3 py-2
                  font-[family-name:var(--font-inter)]
                  text-[10px] font-medium
                  text-white
                  transition-all duration-200

                  md:translate-x-2
                  md:opacity-0
                  md:group-hover:translate-x-0
                  md:group-hover:opacity-100
                  md:focus:translate-x-0
                  md:focus:opacity-100
                "
              >
                {copied ? (
                  <>
                    <Check size={13} strokeWidth={2} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} strokeWidth={1.8} />
                    <span>Click to copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-20 flex flex-col gap-4 sm:mt-24 md:mt-28 md:flex-row md:items-center md:justify-between lg:mt-32">
          <p className="font-[family-name:var(--font-inter)] text-[12px] font-normal text-white/80 sm:text-[13px]">
            ©2026 Samy Chaffai, All Rights Reserved
          </p>

          <p className="font-[family-name:var(--font-inter)] text-[12px] font-normal text-white/80 sm:text-[13px]">
            Website by{" "}
            <a
              href="https://novirastudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-60"
            >
              Novira Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
