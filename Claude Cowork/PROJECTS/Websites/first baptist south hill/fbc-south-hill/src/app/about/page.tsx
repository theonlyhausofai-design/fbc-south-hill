"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

const timeline = [
  { year: "1883", text: "First Baptist Church founded in South Hill, Virginia" },
  { year: "1920s", text: "Church grows as a pillar of the South Hill community" },
  { year: "1960s", text: "Active role in community service and civil rights" },
  { year: "2000s", text: "Expanded ministries and youth programs" },
  { year: "2024", text: "Pastor Reginald E. Wise installed as the 19th pastor" },
  { year: "Today", text: "30+ active ministries serving every age and season of life" },
];

const values = [
  {
    title: "Faith",
    description: "Grounded in Scripture, guided by the Holy Spirit, committed to the Gospel.",
  },
  {
    title: "Family",
    description: "Building stronger homes, deeper bonds, and a church that feels like home.",
  },
  {
    title: "Service",
    description: "Meeting needs in South Hill and beyond with hands that heal and hearts that care.",
  },
  {
    title: "Growth",
    description: "Every member equipped, every gift developed, every life transformed.",
  },
];

export default function AboutPage() {
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
              Our Story
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-display text-white text-5xl md:text-7xl lg:text-8xl mb-6"
          >
            About <span className="text-gold">Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl"
          >
            Over 140 years of faith, service, and community in South Hill,
            Virginia.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <AnimatedSection>
              <div className="border-l-2 border-gold pl-8">
                <h3 className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                  Our Mission
                </h3>
                <p className="text-display text-charcoal text-2xl md:text-3xl leading-snug">
                  To spread the Gospel of Jesus Christ through worship,
                  teaching, fellowship, and service to all people.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="border-l-2 border-charcoal/20 pl-8">
                <h3 className="text-warm-gray/80 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                  Our Vision
                </h3>
                <p className="text-display text-charcoal text-2xl md:text-3xl leading-snug">
                  A thriving community where every person discovers their
                  purpose, develops their gifts, and serves with excellence.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pastor Feature */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/20 rounded-sm" />
                <div className="relative overflow-hidden rounded-sm bg-charcoal aspect-[3/4]">
                  <Image
                    src="/images/pastor.png"
                    alt="Pastor Reginald E. Wise"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent h-1/3" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-[1.5px] bg-gold" />
                  <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                    Senior Pastor
                  </span>
                </div>

                <h2 className="text-display text-charcoal text-4xl md:text-5xl mb-6">
                  Pastor Reginald E.
                  <br />
                  Wise
                </h2>

                <div className="space-y-4 text-warm-gray leading-relaxed">
                  <p>
                    Pastor Reginald E. Wise answered his ministerial calling in
                    August 2008 and holds ordination within the Baptist
                    tradition. In 2024, he became First Baptist Church South
                    Hill&apos;s 19th pastor — an appointment he views as
                    divinely timed for his life&apos;s purpose.
                  </p>
                  <p>
                    He earned a Bachelor of Science in Psychology from Edward
                    Waters College, Florida&apos;s oldest historically Black
                    university, and a Master of Divinity from Duke Divinity
                    School. He also completed the Executive Leadership Institute
                    for Ministers at Howard University School of Business.
                  </p>
                  <p>
                    Before coming to South Hill, Pastor Wise served Baptist
                    Grove Church in Raleigh for six years as Minister of
                    Discipleship. He and his wife, Minister Cynthia Jacko-Wise,
                    share a vision for meaningful Kingdom impact worldwide.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-navy-dark relative grain-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-[1.5px] bg-gold" />
                <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                  What We Stand For
                </span>
                <div className="w-12 h-[1.5px] bg-gold" />
              </div>
              <h2 className="text-display text-white text-4xl md:text-5xl lg:text-6xl">
                Our Values
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold/30 flex items-center justify-center">
                    <span className="text-display text-gold text-2xl">
                      {value.title[0]}
                    </span>
                  </div>
                  <h3 className="text-display text-white text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-display text-charcoal text-4xl md:text-5xl">
                Our History
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gold/20" />

            {timeline.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className={`relative flex items-start gap-8 mb-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-warm-white z-10" />
                  <div className="pl-16 md:pl-0 md:w-1/2 md:px-8">
                    <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                      {item.year}
                    </p>
                    <p className="text-charcoal">{item.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 gold-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-display text-charcoal text-4xl md:text-5xl mb-6">
              Come See for Yourself
            </h2>
            <p className="text-charcoal/90 text-lg max-w-xl mx-auto mb-10">
              We&apos;d love to welcome you this Sunday. No dress code, no
              pressure — just a community ready to embrace you.
            </p>
            <Link href="/contact" className="btn-primary bg-charcoal text-white hover:bg-warm-gray">
              Plan Your Visit
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
