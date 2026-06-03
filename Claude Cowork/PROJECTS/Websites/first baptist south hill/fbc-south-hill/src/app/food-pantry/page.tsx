"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function FoodPantryPage() {
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
              Community Outreach
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-display text-white text-5xl md:text-7xl lg:text-8xl mb-6"
          >
            Food <span className="text-gold">Pantry</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl"
          >
            Serving our community with compassion. Open to everyone — all are
            welcome.
          </motion.p>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-display text-charcoal text-3xl md:text-4xl mb-6">
                  Community Food Pantry
                </h2>
                <p className="text-warm-gray/80 text-lg leading-relaxed mb-6">
                  First Baptist Church South Hill operates a community food
                  pantry to help families in need. No questions asked, no
                  requirements — just neighbors helping neighbors.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold text-sm font-bold">📅</span>
                    </div>
                    <div>
                      <h3 className="text-charcoal font-medium text-lg">
                        When
                      </h3>
                      <p className="text-warm-gray/80">
                        Every 2nd, 3rd, 4th &amp; 5th Thursday
                      </p>
                      <p className="text-warm-gray/80">11:00 AM - 1:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold text-sm font-bold">📍</span>
                    </div>
                    <div>
                      <h3 className="text-charcoal font-medium text-lg">
                        Where
                      </h3>
                      <p className="text-warm-gray/80">
                        First Baptist Church South Hill
                      </p>
                      <p className="text-warm-gray/80">
                        3633 Galberry Road, Chesapeake, VA 23323
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://fbcsouthhill.com/food-pantry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Learn More
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[16/9] rounded-sm overflow-hidden">
                <Image
                  src="/images/flyers/community-food-pantry.png"
                  alt="Community Food Pantry"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="section-padding bg-navy grain-overlay relative">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-display text-white text-3xl md:text-4xl mb-4">
              Volunteer With Us
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              We need volunteers to help sort, pack, and distribute food to
              families in our community. Every hand makes a difference.
            </p>
            <a
              href="https://fbcsouthhill.com/ministries-v2/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Sign Up to Volunteer
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Flyer */}
      <section className="section-padding bg-cream">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="relative aspect-[16/9] rounded-sm overflow-hidden">
              <Image
                src="/images/flyers/volunteer-food-pantry.png"
                alt="Sign Up to Volunteer for the Food Pantry"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
