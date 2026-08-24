"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

const navLinks = [
  { label: "About", href: "#about", external: false },
  { label: "References", href: "#references", external: false },
  { label: "Series", href: "#series", external: false },
  { label: "Collaborations", href: "#collaborations", external: false },
  { label: "Contact", href: "#contact", external: false },
  {
    label: "Masterclass",
    href: "https://learning.samychaffai.com/",
    external: true,
  },
];

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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="relative mx-auto flex h-[82px] w-full max-w-[1920px] items-center justify-between px-5 sm:px-8 lg:h-[100px] lg:px-12 xl:px-16">
        {/* Logo */}
        <a
          href="#"
          className="relative z-50"
          aria-label="Samy Chaffai home"
          onClick={closeMenu}
        >
          <Image
            src="/assets/samylogo.svg"
            alt="Samy Chaffai"
            width={86}
            height={42}
            priority
            className="h-auto w-[72px] lg:w-[86px]"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-11 2xl:gap-[62px]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-[14px] font-normal text-white transition-opacity duration-200 hover:opacity-60 xl:text-[15px]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop socials */}
        <div className="hidden items-center gap-4 lg:flex xl:gap-[20px]">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="transition-opacity duration-200 hover:opacity-60"
            >
              <Image
                src={social.icon}
                alt=""
                width={22}
                height={22}
                className="h-[19px] w-[19px] xl:h-[22px] xl:w-[22px]"
              />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative z-50 flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          {menuOpen ? (
            <X size={27} strokeWidth={1.8} />
          ) : (
            <Menu size={29} strokeWidth={1.8} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`
          fixed inset-0 z-40 bg-[#040404]
          transition-all duration-300 lg:hidden
          ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-4 opacity-0"
          }
        `}
      >
        <div className="flex min-h-screen flex-col px-6 pb-8 pt-[110px] sm:px-10 sm:pb-10 sm:pt-[120px]">
          {/* Menu links */}
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={closeMenu}
                className="border-b border-white/10 py-[14px] font-[family-name:var(--font-host-grotesk)] text-[30px] font-normal leading-none tracking-[-0.03em] text-white transition-opacity duration-200 hover:opacity-60 sm:py-4 sm:text-[38px]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Join course button */}
          <Button
            href="https://learning.samychaffai.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-8 h-[56px] w-full font-[family-name:var(--font-host-grotesk)] text-[18px] font-medium sm:h-[60px] sm:text-[20px]"
          >
            Join the Course
          </Button>

          {/* Mobile socials */}
          <div className="mt-auto flex items-center justify-between pt-10 sm:justify-start sm:gap-7 sm:pt-12">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="transition-opacity duration-200 hover:opacity-60"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="h-[22px] w-auto sm:h-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
