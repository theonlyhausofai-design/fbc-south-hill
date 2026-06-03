"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function GivingPage() {
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
              Generosity
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-display text-white text-5xl md:text-7xl lg:text-8xl mb-6"
          >
            Give <span className="text-gold">Online</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl"
          >
            Your generosity fuels every ministry, every outreach, and every life
            changed through First Baptist Church.
          </motion.p>
        </div>
      </section>

      {/* Scripture */}
      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <blockquote className="text-display-light text-charcoal text-2xl md:text-3xl mb-4">
              &ldquo;Each of you should give what you have decided in your heart
              to give, not reluctantly or under compulsion, for God loves a
              cheerful giver.&rdquo;
            </blockquote>
            <cite className="text-gold text-sm tracking-[0.2em] uppercase not-italic">
              2 Corinthians 9:7
            </cite>
          </AnimatedSection>
        </div>
      </section>

      {/* Giving Options */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-display text-charcoal text-4xl md:text-5xl mb-4">
                Ways to Give
              </h2>
              <p className="text-warm-gray/80 text-lg max-w-2xl mx-auto">
                Choose the method that works best for you. Every gift, no matter
                the size, makes a difference.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Online Giving",
                description:
                  "Give securely through our online portal. Set up one-time or recurring gifts from anywhere.",
                action: "Give Now",
                featured: true,
              },
              {
                title: "In Person",
                description:
                  "Place your offering during Sunday worship service or drop it by the church office during business hours.",
                action: "Visit Us",
                featured: false,
              },
              {
                title: "By Mail",
                description:
                  "Mail your gift to First Baptist Church, South Hill, VA 23970. Include your name for tax receipt.",
                action: "Get Address",
                featured: false,
              },
            ].map((option, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className={`p-8 lg:p-10 rounded-sm h-full flex flex-col ${
                    option.featured
                      ? "bg-charcoal text-white"
                      : "bg-cream"
                  }`}
                >
                  {option.featured && (
                    <span className="text-gold text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">
                      Recommended
                    </span>
                  )}
                  <h3
                    className={`text-display text-2xl mb-4 ${
                      option.featured ? "text-white" : "text-charcoal"
                    }`}
                  >
                    {option.title}
                  </h3>
                  <p
                    className={`leading-relaxed mb-8 flex-1 ${
                      option.featured ? "text-white/60" : "text-warm-gray/80"
                    }`}
                  >
                    {option.description}
                  </p>
                  <a
                    href={option.featured ? "https://fbcsouthhill.com/donate/" : "#"}
                    target={option.featured ? "_blank" : undefined}
                    rel={option.featured ? "noopener noreferrer" : undefined}
                    className={
                      option.featured
                        ? "btn-primary w-full justify-center text-center"
                        : "btn-outline w-full justify-center text-center text-charcoal border-charcoal hover:bg-charcoal hover:text-white"
                    }
                  >
                    {option.action}
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-charcoal grain-overlay relative">
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-display text-white text-4xl md:text-5xl mb-4">
                Your Impact
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Every dollar given supports real ministry, real people, real
                change.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "30+", label: "Active Ministries" },
              { number: "140+", label: "Years of Service" },
              { number: "100s", label: "Lives Touched" },
              { number: "1", label: "Community" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-display text-gold text-4xl md:text-5xl mb-2">
                    {stat.number}
                  </p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
