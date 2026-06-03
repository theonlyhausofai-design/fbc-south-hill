"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function ContactPage() {
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
              Reach Out
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-display text-white text-5xl md:text-7xl lg:text-8xl mb-6"
          >
            Contact <span className="text-gold">Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl"
          >
            We&apos;d love to hear from you. Whether you have a question,
            prayer request, or want to plan a visit — reach out.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                      Visit Us
                    </h3>
                    <p className="text-charcoal text-lg leading-relaxed">
                      First Baptist Church
                      <br />
                      South Hill, VA 23970
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                      Office Hours
                    </h3>
                    <p className="text-charcoal/90">
                      Monday - Friday
                      <br />
                      9:00 AM - 3:00 PM
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                      Phone
                    </h3>
                    <a
                      href="tel:+14344474472"
                      className="text-charcoal text-lg hover:text-gold transition-colors"
                    >
                      (434) 447-4472
                    </a>
                  </div>

                  <div>
                    <h3 className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                      Email
                    </h3>
                    <a
                      href="mailto:info@fbcsouthhill.com"
                      className="text-charcoal text-lg hover:text-gold transition-colors"
                    >
                      info@fbcsouthhill.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                      Service Times
                    </h3>
                    <div className="space-y-2">
                      <p className="text-charcoal/90">
                        <span className="text-charcoal font-medium">
                          Sunday Worship:
                        </span>{" "}
                        10:30 AM
                      </p>
                      <p className="text-charcoal/90">
                        <span className="text-charcoal font-medium">
                          Bible Study:
                        </span>{" "}
                        Wednesday 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.2}>
                <div className="bg-cream p-8 lg:p-12 rounded-sm">
                  <h2 className="text-display text-charcoal text-3xl mb-2">
                    Send a Message
                  </h2>
                  <p className="text-warm-gray/80 mb-8">
                    Fill out the form below and we&apos;ll get back to you soon.
                  </p>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-charcoal text-sm font-medium mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-white border border-charcoal/10 rounded-sm text-charcoal placeholder:text-warm-gray/70 focus:outline-none focus:border-gold transition-colors"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-charcoal text-sm font-medium mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-white border border-charcoal/10 rounded-sm text-charcoal placeholder:text-warm-gray/70 focus:outline-none focus:border-gold transition-colors"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-charcoal text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white border border-charcoal/10 rounded-sm text-charcoal placeholder:text-warm-gray/70 focus:outline-none focus:border-gold transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-charcoal text-sm font-medium mb-2">
                        Subject
                      </label>
                      <select className="w-full px-4 py-3 bg-white border border-charcoal/10 rounded-sm text-charcoal focus:outline-none focus:border-gold transition-colors">
                        <option value="">Select a subject</option>
                        <option value="visit">Planning a Visit</option>
                        <option value="prayer">Prayer Request</option>
                        <option value="membership">Membership</option>
                        <option value="ministry">Join a Ministry</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-charcoal text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 bg-white border border-charcoal/10 rounded-sm text-charcoal placeholder:text-warm-gray/70 focus:outline-none focus:border-gold transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center">
                      Send Message
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-96 bg-charcoal-light relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <p className="text-white/60 text-sm">
              Embed Google Maps here
            </p>
            <p className="text-white/50 text-xs mt-1">
              South Hill, VA 23970
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
