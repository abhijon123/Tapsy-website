"use client";

import { siteLinks } from "@/lib/content";

export function TrustBanner() {
  return (
    <section className="bg-white px-4 py-6 sm:px-6 sm:py-8">
      <div className="relative mx-auto flex max-w-5xl min-h-[160px] items-center justify-center overflow-hidden rounded-[28px] px-6 py-8 text-center text-white sm:min-h-[180px] sm:px-12 sm:py-9">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4C1D95] via-[#A21CAF] to-[#FB923C]" />

        <div className="relative z-10">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.04em] leading-[1.15] text-white">
            Be seen. Be heard. Be shared.
          </h2>
          <p className="mx-auto mt-2.5 max-w-xl text-[15px] leading-relaxed text-white/85 sm:text-[16px]">
            Turn personal experiences into stories people trust and share.
          </p>

          <div className="mt-6 flex items-center justify-center gap-8">
            <a
              href={siteLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:opacity-80"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={siteLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:opacity-80"
              aria-label="Twitter / X"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={siteLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:opacity-80"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor" aria-hidden>
                <path d="M23.5 6.2a3.03 3.03 0 0 0-2.13-2.15C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.37.55A3.03 3.03 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.03 3.03 0 0 0 2.13 2.15C4.5 20.5 12 20.5 12 20.5s7.5 0 9.37-.55a3.03 3.03 0 0 0 2.13-2.15A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
