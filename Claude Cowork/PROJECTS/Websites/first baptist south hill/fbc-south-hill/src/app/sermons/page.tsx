"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { AnimatedSection } from "@/components/AnimatedSection";

const featuredSermons = [
  {
    id: "v8Qf2DXaFWU",
    title: "Sunday Worship Service",
    speaker: "Pastor Reginald E. Wise",
  },
  {
    id: "jtXW8xxsyVg",
    title: "Sunday Worship Service",
    speaker: "Pastor Reginald E. Wise",
  },
  {
    id: "eV_KFM-LP8o",
    title: "Sunday Worship Service",
    speaker: "Pastor Reginald E. Wise",
  },
];

export default function SermonsPage() {
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
              The Word
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-display text-white text-5xl md:text-7xl lg:text-8xl mb-6"
          >
            Sermons
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl"
          >
            Watch live every Sunday at 10:30 AM or catch up on recent messages
            from Pastor Wise.
          </motion.p>
        </div>
      </section>

      {/* Live Stream CTA */}
      <section className="bg-charcoal-light border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full animate-ping" />
              </div>
              <div>
                <p className="text-white font-medium">Watch Live</p>
                <p className="text-white/50 text-sm">
                  Sundays at 10:30 AM EST
                </p>
              </div>
            </div>
            <a
              href="https://www.facebook.com/fbcsouthhill"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Join Live Stream
            </a>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1.5px] bg-gold" />
                <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                  Latest Message
                </span>
              </div>
              <h2 className="text-display text-charcoal text-4xl md:text-5xl">
                Most Recent Sermon
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative aspect-video bg-charcoal rounded-sm overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${featuredSermons[0].id}`}
                title={featuredSermons[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* More Sermons */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="mb-12">
              <h2 className="text-display text-charcoal text-3xl md:text-4xl">
                More Messages
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredSermons.slice(1).map((sermon, i) => (
              <AnimatedSection key={sermon.id} delay={i * 0.15}>
                <div className="group">
                  <div className="relative aspect-video bg-charcoal rounded-sm overflow-hidden mb-4">
                    <iframe
                      src={`https://www.youtube.com/embed/${sermon.id}`}
                      title={sermon.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <h3 className="text-display text-charcoal text-xl group-hover:text-gold-dark transition-colors">
                    {sermon.title}
                  </h3>
                  <p className="text-warm-gray/80 text-sm mt-1">
                    {sermon.speaker}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
