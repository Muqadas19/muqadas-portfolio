"use client";

import Image from "next/image";
import { site } from "@/content/site";

const techLoop = [...site.stackLogos, ...site.stackLogos];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100dvh-1.25rem)] overflow-hidden bg-black"
    >
      <Image
        src="/images/hero-plate.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-plate object-cover object-center"
      />
      <div className="hero-copy-bg" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-copy-streaks.png"
          alt=""
          className="h-full w-full object-cover object-left"
        />
      </div>
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <filter id="heroShutter" x="-30%" y="-10%" width="160%" height="120%">
          <feGaussianBlur stdDeviation="18 0" />
        </filter>
      </svg>
      <div className="hero-hair-smear" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-plate.png" alt="" />
      </div>
      <div className="hero-jacket-smear" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-plate.png" alt="" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-1.25rem)] max-w-[1360px] flex-col justify-end px-6 pb-28 pt-32 sm:px-10 lg:px-12 lg:pb-32">
        <div className="w-full max-w-[54rem]">
          <p className="mb-1.5 text-[28px] font-semibold italic leading-none tracking-[-0.02em] text-white sm:text-[36px] lg:text-[42px]">
            {site.hero.intro}
          </p>
          <h1 className="font-display text-[48px] font-extrabold uppercase leading-[0.9] tracking-[-0.035em] sm:text-[72px] lg:text-[92px]">
            <span className="text-violet-sheen block">{site.roleLine1}</span>
            <span className="mt-1 flex items-center gap-4 sm:mt-2 sm:gap-5">
              <a
                href="#contact"
                aria-label={site.hero.cta}
                className="hero-arrow inline-flex shrink-0 items-center justify-center text-white"
              >
                <svg
                  width="34"
                  height="18"
                  viewBox="0 0 34 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9h26M22 3.5 31.5 9 22 14.5"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <span className="text-orange-sheen tracking-[-0.045em]">{site.roleLine2}</span>
            </span>
          </h1>
        </div>
      </div>

      <div className="hero-tech-slider" aria-label="Tech stack">
        <div className="hero-tech-track">
          {techLoop.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="hero-tech-item"
              aria-hidden={index >= site.stackLogos.length}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt="" width={22} height={22} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
