"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

const ministryHighlights = [
  {
    title: "Youth Ministry",
    description:
      "Empowering the next generation through mentorship, fellowship, and faith-building experiences.",
    icon: "01",
  },
  {
    title: "Music & Worship",
    description:
      "Lifting voices and spirits through powerful praise that moves hearts and transforms worship.",
    icon: "02",
  },
  {
    title: "Community Outreach",
    description:
      "Serving South Hill and beyond with compassion, meeting real needs with real action.",
    icon: "03",
  },
  {
    title: "Men & Women",
    description:
      "Building strength through fellowship, accountability, and spiritual growth for every season.",
    icon: "04",
  },
];

const upcomingEvents = [
  {
    date: "Jun 7",
    day: "SAT",
    title: "Golden Vessel Retreat",
    time: "9:00 AM - 3:00 PM",
  },
  {
    date: "Jun 15",
    day: "SUN",
    title: "Impact Sunday",
    time: "10:30 AM",
  },
  {
    date: "Jun 19",
    day: "THU",
    title: "Juneteenth Celebration",
    time: "11:00 AM",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/church-building.jpeg"
            alt="First Baptist Church South Hill"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[1.5px] bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                Est. 1883 &middot; Chesapeake, Virginia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-display text-white text-5xl md:text-7xl lg:text-8xl mb-8"
            >
              Where Faith
              <br />
              <span className="text-gold">Meets Purpose</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              Join us every Sunday at 10:30 AM. A community rooted in heritage,
              growing in grace, and building something that lasts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/about" className="btn-primary">
                Plan Your Visit
              </Link>
              <a href="https://fbcsouthhill.com/live-stream/" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Watch Live
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] h-8 bg-gradient-to-b from-gold to-transparent"
          />
        </motion.div>
      </section>

      {/* ═══════════════ SERVICE TIMES BAR ═══════════════ */}
      <section className="bg-navy relative grain-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {[
              {
                label: "Sunday Worship",
                time: "10:30 AM",
                detail: "In-Person & Online",
              },
              {
                label: "Bible Study",
                time: "Wednesday 7 PM",
                detail: "Midweek Renewal",
              },
              {
                label: "Location",
                time: "Chesapeake, VA",
                detail: "All Are Welcome",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="py-8 md:py-10 md:px-8 text-center">
                  <p className="text-gold text-[10px] font-semibold tracking-[0.3em] uppercase mb-2">
                    {item.label}
                  </p>
                  <p className="text-display text-white text-2xl md:text-3xl mb-1">
                    {item.time}
                  </p>
                  <p className="text-white/40 text-sm">{item.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PASTOR SECTION ═══════════════ */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/20 rounded-sm" />
                <div className="relative overflow-hidden rounded-sm bg-charcoal aspect-[3/4]">
                  <Image
                    src="/images/pastor.png"
                    alt="Pastor Reginald E. Wise"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent h-1/3" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gold px-6 py-4">
                  <p className="text-charcoal text-xs font-semibold tracking-[0.2em] uppercase">
                    Senior Pastor
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-[1.5px] bg-gold" />
                  <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                    Meet Our Pastor
                  </span>
                </div>

                <h2 className="text-display text-charcoal text-4xl md:text-5xl lg:text-6xl mb-6">
                  Pastor Reginald E.
                  <br />
                  <span className="text-gold-dark">Wise</span>
                </h2>

                <p className="text-warm-gray text-lg leading-relaxed mb-6">
                  Pastor Reginald E. Wise became First Baptist Church South
                  Hill&apos;s 19th pastor in 2024. A graduate of Duke Divinity
                  School and Howard University&apos;s Executive Leadership
                  Institute, he brings depth, vision, and a heart for Kingdom
                  impact to every message.
                </p>

                <p className="text-warm-gray/80 leading-relaxed mb-8">
                  His philosophy is simple: &ldquo;A preacher should always speak
                  what God is speaking, when God is speaking, the way that God is
                  speaking.&rdquo; Whether you&apos;re a lifelong member or
                  walking through the doors for the first time, you are welcome
                  here.
                </p>

                <Link href="/about" className="btn-primary bg-charcoal text-white hover:bg-warm-gray">
                  Learn More
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ MINISTRIES ═══════════════ */}
      <section className="section-padding bg-warm-white relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16 lg:mb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-[1.5px] bg-gold" />
                <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                  Get Involved
                </span>
                <div className="w-12 h-[1.5px] bg-gold" />
              </div>
              <h2 className="text-display text-charcoal text-4xl md:text-5xl lg:text-6xl mb-4">
                Our Ministries
              </h2>
              <p className="text-warm-gray/80 max-w-2xl mx-auto text-lg">
                Over 30 active ministries serving every age and season of life.
                Find where you belong.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {ministryHighlights.map((ministry, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group relative bg-cream hover:bg-navy p-8 lg:p-10 rounded-sm transition-all duration-500 cursor-pointer overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-500" />

                  <span className="text-display text-gold/30 group-hover:text-gold/20 text-6xl absolute top-4 right-6 transition-colors duration-500">
                    {ministry.icon}
                  </span>

                  <h3 className="text-display text-charcoal group-hover:text-white text-2xl mb-3 transition-colors duration-500 relative">
                    {ministry.title}
                  </h3>
                  <p className="text-warm-gray/80 group-hover:text-white/60 leading-relaxed transition-colors duration-500 relative">
                    {ministry.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 relative">
                    Learn More
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <Link href="/ministries" className="btn-outline text-charcoal border-charcoal hover:bg-charcoal hover:text-white">
                View All Ministries
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════ SCRIPTURE BANNER ═══════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy grain-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/40 via-transparent to-gold/10" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="w-16 h-[1.5px] bg-gold mx-auto mb-8" />
            <blockquote className="text-display-light text-white text-3xl md:text-4xl lg:text-5xl mb-8">
              &ldquo;For I know the plans I have for you,&rdquo; declares the
              Lord, &ldquo;plans to prosper you and not to harm you, plans to
              give you hope and a future.&rdquo;
            </blockquote>
            <cite className="text-gold text-sm tracking-[0.2em] uppercase not-italic">
              Jeremiah 29:11
            </cite>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════ EVENTS ═══════════════ */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-[1.5px] bg-gold" />
                  <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                    Upcoming
                  </span>
                </div>
                <h2 className="text-display text-charcoal text-4xl md:text-5xl mb-6">
                  What&apos;s
                  <br />
                  Happening
                </h2>
                <p className="text-warm-gray/80 leading-relaxed mb-8">
                  Stay connected with everything happening at First Baptist.
                  From retreats to celebrations, there&apos;s always a place for
                  you.
                </p>
                <Link href="/events" className="btn-primary">
                  Full Calendar
                </Link>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-0">
                {upcomingEvents.map((event, i) => (
                  <AnimatedSection key={i} delay={i * 0.12}>
                    <div className="group flex items-start gap-6 py-8 border-b border-charcoal/10 hover:border-gold/30 transition-colors cursor-pointer">
                      <div className="flex-shrink-0 text-center w-16">
                        <p className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase">
                          {event.day}
                        </p>
                        <p className="text-display text-charcoal text-3xl">
                          {event.date.split(" ")[1]}
                        </p>
                        <p className="text-warm-gray/70 text-xs uppercase">
                          {event.date.split(" ")[0]}
                        </p>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-display text-charcoal text-xl md:text-2xl group-hover:text-gold-dark transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-warm-gray/70 text-sm mt-1">
                          {event.time}
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-gold/0 group-hover:text-gold transition-all mt-2 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS STRIP ═══════════════ */}
      <section className="bg-navy py-16 relative grain-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/60 via-transparent to-navy-dark/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "141+", label: "Years of Faith" },
              { number: "30+", label: "Active Ministries" },
              { number: "19th", label: "Senior Pastor" },
              { number: "1", label: "Family" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.p
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1, type: "spring", stiffness: 200 }}
                    className="text-display text-gold text-4xl md:text-5xl mb-2"
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-white/70 text-sm tracking-wide uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 gold-gradient opacity-90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-display text-charcoal text-4xl md:text-5xl lg:text-6xl mb-6">
              You Belong Here
            </h2>
            <p className="text-charcoal/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you&apos;re taking your first steps in faith or looking for
              a church home, our doors are open. Come as you are.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary bg-charcoal text-white hover:bg-warm-gray">
                Plan Your Visit
              </Link>
              <a
                href="https://fbcsouthhill.com/live-stream/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
              >
                Watch Live
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
