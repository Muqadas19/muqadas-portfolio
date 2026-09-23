"use client";

// Contact — last section matches Codium “Got an Idea?” (title + underline form + submit).
import { useState, type FormEvent } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { site } from "@/data/site";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const fieldClass =
  "mt-3 w-full border-0 border-b border-white/80 bg-transparent pb-3 pt-1 text-base text-white outline-none transition-colors placeholder:text-transparent focus:border-[var(--color-accent)] sm:mt-4 sm:pb-3.5 sm:text-lg";

export function Contact() {
  const { contact, email } = site;
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [projectValue, setProjectValue] = useState("");
  const [error, setError] = useState("");

  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.from("[data-contact='title']", {
      y: reduceMotion ? 0 : 36,
      autoAlpha: 0,
      duration: reduceMotion ? 0.01 : 0.9,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: { trigger: "#contact", start: "top 80%", once: true },
    });

    if (reduceMotion) return;

    gsap.from("[data-contact='form']", {
      y: 28,
      autoAlpha: 0,
      duration: 0.75,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 78%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!nameValue.trim() || !emailValue.trim() || !projectValue.trim()) {
      setError("Please fill in name, email, and project details.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(`Project inquiry from ${nameValue.trim()}`);
    const body = encodeURIComponent(
      `Name: ${nameValue.trim()}\nEmail: ${emailValue.trim()}\n\nProject:\n${projectValue.trim()}`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden px-3 py-16 sm:px-4 sm:py-20 lg:px-6 lg:py-24">
      <div className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-[28px] sm:rounded-[36px]">
        {/* Panel background — same as reference */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/contact/idea-bg.png"
            alt=""
            fill
            priority={false}
            quality={95}
            className="contact-idea-bg object-cover object-center"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-[rgba(1,12,15,0.22)]" />
        </div>

        <div className="relative z-[1] px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <h2
            data-contact="title"
            className="font-display text-[clamp(3.5rem,10vw,7.25rem)] leading-none text-white"
          >
            {contact.title}
          </h2>

          <form
            data-contact="form"
            onSubmit={onSubmit}
            className="mt-12 space-y-11 sm:mt-14 sm:space-y-12 lg:mt-16"
            noValidate
          >
            <div className="grid gap-9 sm:grid-cols-2 sm:gap-10 lg:gap-14">
              <label className="block">
                <span className="text-base text-white sm:text-lg">Write Name</span>
                <input
                  type="text"
                  name="name"
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  autoComplete="name"
                  className={fieldClass}
                  placeholder="Write Name"
                  aria-label="Write Name"
                />
              </label>
              <label className="block">
                <span className="text-base text-white sm:text-lg">Write Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  autoComplete="email"
                  className={fieldClass}
                  placeholder="Write Email Address"
                  aria-label="Write Email Address"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-base text-white sm:text-lg">Write Project Description</span>
              <textarea
                name="project"
                rows={2}
                value={projectValue}
                onChange={(e) => setProjectValue(e.target.value)}
                className={`${fieldClass} min-h-[2.75rem] resize-none`}
                placeholder="Write Project Description"
                aria-label="Write Project Description"
              />
            </label>

            {error ? <p className="text-sm text-red-300">{error}</p> : null}

            <button
              type="submit"
              className="btn-gloss rounded-2xl px-9 py-3.5 text-base font-semibold text-[#07141a] sm:px-10 sm:py-4 sm:text-lg"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
