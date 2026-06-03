"use client";

import { motion } from "motion/react";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

const flyers = [
  {
    title: "GriefShare",
    date: "May 17",
    image: "/images/flyers/grief-share.png",
  },
  {
    title: "FBCSH Scholarship Applications",
    date: "",
    image: "/images/flyers/scholarship.png",
  },
  {
    title: "Graduation Recognition Service",
    date: "Jun 28",
    image: "/images/flyers/graduation-recognition.jpeg",
  },
  {
    title: "Juneteenth Celebration",
    date: "Jun 19",
    image: "/images/flyers/juneteenth.png",
  },
  {
    title: "Text Alerts \u2014 Text FBCSH to 77948",
    date: "",
    image: "/images/flyers/text-alerts.png",
  },
  {
    title: "Volunteer for the Food Pantry",
    date: "",
    image: "/images/flyers/volunteer-food-pantry.png",
  },
  {
    title: "Community Food Pantry",
    date: "Thursdays",
    image: "/images/flyers/community-food-pantry.png",
  },
  {
    title: "Baptism Class on Zoom",
    date: "",
    image: "/images/flyers/baptism-class.png",
  },
];

const events = [
  {
    date: "Jun 7",
    day: "Saturday",
    title: "Golden Vessel Retreat",
    time: "9:00 AM - 3:00 PM",
    description:
      "A day of rest, reflection, and renewal for our senior ministry. Includes worship, fellowship meal, and guest speaker.",
    category: "Retreat",
  },
  {
    date: "Jun 8",
    day: "Sunday",
    title: "Sunday Worship Service",
    time: "10:30 AM",
    description:
      "Weekly worship with Pastor Wise. Message, praise, and fellowship. All are welcome.",
    category: "Worship",
  },
  {
    date: "Jun 11",
    day: "Wednesday",
    title: "Midweek Bible Study",
    time: "7:00 PM",
    description:
      "Dive deeper into the Word with our midweek study. Currently in the book of Ephesians.",
    category: "Study",
  },
  {
    date: "Jun 15",
    day: "Sunday",
    title: "Impact Sunday",
    time: "10:30 AM",
    description:
      "Special service focused on community impact and outreach. Bring a friend and be part of something bigger.",
    category: "Special",
  },
  {
    date: "Jun 19",
    day: "Thursday",
    title: "Juneteenth Celebration",
    time: "11:00 AM - 4:00 PM",
    description:
      "Community celebration honoring freedom and heritage. Food, music, activities, and fellowship for the whole family.",
    category: "Community",
  },
  {
    date: "Jun 21",
    day: "Saturday",
    title: "Men's Fellowship Breakfast",
    time: "8:00 AM",
    description:
      "Monthly men's gathering with devotion, breakfast, and real conversation. Bring a brother.",
    category: "Fellowship",
  },
];

const categoryColors: Record<string, string> = {
  Retreat: "bg-gold/20 text-gold-dark",
  Worship: "bg-charcoal/10 text-charcoal",
  Study: "bg-gold/10 text-gold-dark",
  Special: "bg-gold/30 text-charcoal",
  Community: "bg-charcoal/10 text-charcoal",
  Fellowship: "bg-gold/10 text-gold-dark",
};

function FlyerSlideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % flyers.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + flyers.length) % flyers.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-12 lg:py-16 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-[1.5px] bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
            Event Flyers
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="relative">
          {/* Flyer Image */}
          <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden bg-charcoal">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 100 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={flyers[current].image}
                alt={flyers[current].title}
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Nav Arrows */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors z-20"
            aria-label="Previous flyer"
          >
            <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors z-20"
            aria-label="Next flyer"
          >
            <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {flyers.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-gold w-6" : "bg-charcoal/20 hover:bg-charcoal/40"
              }`}
              aria-label={`Go to flyer ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-charcoal overflow-hidden grain-overlay">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/church-building.jpeg"
            alt="First Baptist Church South Hill"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1.5px] bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
              Mark Your Calendar
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-display text-white text-5xl md:text-7xl lg:text-8xl mb-6"
          >
            Events
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl"
          >
            From worship to fellowship to community celebrations — there&apos;s
            always something happening at First Baptist.
          </motion.p>
        </div>
      </section>

      {/* Flyer Slideshow */}
      <FlyerSlideshow />

      {/* Events List */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-12">
              <h2 className="text-display text-charcoal text-3xl">
                June 2026
              </h2>
              <div className="flex-1 h-[1px] bg-charcoal/10" />
            </div>
          </AnimatedSection>

          <div className="space-y-0">
            {events.map((event, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8 py-8 border-b border-charcoal/10 hover:border-gold/30 transition-colors">
                  <div className="flex md:flex-col items-baseline md:items-start gap-2">
                    <p className="text-display text-charcoal text-3xl md:text-4xl">
                      {event.date.split(" ")[1]}
                    </p>
                    <p className="text-warm-gray/70 text-sm">
                      {event.day}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-display text-charcoal text-xl md:text-2xl group-hover:text-gold-dark transition-colors">
                        {event.title}
                      </h3>
                      <span
                        className={`px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase ${
                          categoryColors[event.category] || "bg-charcoal/10 text-charcoal"
                        }`}
                      >
                        {event.category}
                      </span>
                    </div>
                    <p className="text-gold text-sm font-medium mb-2">
                      {event.time}
                    </p>
                    <p className="text-warm-gray/80 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Recurring */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-display text-charcoal text-3xl md:text-4xl">
                Weekly Schedule
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                day: "Sunday",
                events: [
                  { name: "Sunday Worship", time: "10:30 AM" },
                ],
              },
              {
                day: "Wednesday",
                events: [
                  { name: "Bible Study", time: "7:00 PM" },
                  { name: "Youth Night", time: "7:00 PM" },
                ],
              },
              {
                day: "Saturday",
                events: [
                  { name: "Prayer Service", time: "8:00 AM (1st Sat)" },
                  { name: "Men's Breakfast", time: "8:00 AM (3rd Sat)" },
                ],
              },
            ].map((schedule, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-sm border border-charcoal/5">
                  <h3 className="text-display text-charcoal text-2xl mb-6 pb-4 border-b border-gold/20">
                    {schedule.day}
                  </h3>
                  <div className="space-y-4">
                    {schedule.events.map((ev, ei) => (
                      <div key={ei}>
                        <p className="text-charcoal font-medium">{ev.name}</p>
                        <p className="text-warm-gray/80 text-sm">{ev.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
