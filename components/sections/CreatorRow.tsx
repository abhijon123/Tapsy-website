"use client";

import { useState } from "react";
import Image from "next/image";
import { TypewriterText } from "@/components/ui/hero-4";
import { Marquee } from "@/components/ui/marquee";

const people = [
  {
    name: "Marcus",
    role: "Gym reviewer",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Aisha",
    role: "Travel creator",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Leo",
    role: "Nightlife",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Studio 12",
    role: "Salon",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Jordan",
    role: "Local guide",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Harbor House",
    role: "Venue",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=80",
  },
];

function PersonCard({
  person,
  following,
  onToggle,
}: {
  person: (typeof people)[number];
  following: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="relative h-[280px] w-[210px] shrink-0 overflow-hidden rounded-[22px] bg-zinc-100 transition duration-300 hover:-translate-y-1.5 sm:h-[320px] sm:w-[230px]">
      <Image src={person.image} alt={person.name} fill className="object-cover" />
      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl bg-white px-3 py-2 shadow-lg">
        <div className="min-w-0">
          <p className="truncate text-[14px] font-bold text-zinc-900">{person.name}</p>
          <p className="text-[11px] text-zinc-400">{person.role}</p>
        </div>
        <button
          onClick={onToggle}
          className={`shrink-0 rounded-full px-3 py-1 text-[12px] font-bold text-white transition ${
            following ? "bg-zinc-800" : "bg-gradient-tapsy"
          }`}
        >
          {following ? "Following" : "Follow"}
        </button>
      </div>
    </article>
  );
}

export function CreatorRow() {
  const [following, setFollowing] = useState<Record<string, boolean>>({});

  return (
    <section id="creators" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="overflow-visible text-center text-[clamp(2rem,4vw,3.1rem)] font-extrabold tracking-[-0.04em] leading-[1.2] text-zinc-950">
          Why type when you can{" "}
          <TypewriterText texts={["tap?", "film?", "post?", "glow?"]} />
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-zinc-500 sm:text-[16px]">
          Forget outdated text and long paragraphs. With Tapsy, recording a review is as easy as
          hitting play — restaurants, gyms, hotels, salons, nightlife. One tap shares your take.
        </p>

        <div className="mt-7 overflow-hidden">
          <div className="live-ticker flex w-max gap-3">
            {[...Array(2)].map((_, loop) => (
              <div key={loop} className="flex gap-3">
                {[
                  "Maya tapped a take at Peak Fitness",
                  "Verified visit · 0:28",
                  "Leo is recording at Sky Lounge",
                  "12 people nearby are watching now",
                  "Jordan dropped Outstanding at Harbor House",
                  "New reel · Studio 12 · salon vibe",
                ].map((line) => (
                  <span
                    key={`${loop}-${line}`}
                    className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3.5 py-1.5 text-[12px] font-semibold text-violet-700"
                  >
                    <span className="live-dot h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
                    {line}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-16" />
        <Marquee pauseOnHover repeat={2} className="[--duration:45s] [--gap:1rem] p-0">
          {people.map((person) => (
            <PersonCard
              key={person.name}
              person={person}
              following={!!following[person.name]}
              onToggle={() =>
                setFollowing((s) => ({ ...s, [person.name]: !s[person.name] }))
              }
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
