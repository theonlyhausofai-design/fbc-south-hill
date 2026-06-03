"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { AnimatedSection } from "@/components/AnimatedSection";

const ministries = [
  {
    category: "Worship & Music",
    items: [
      { name: "Mass Choir", leader: "Sis. Cynthia Washington" },
      { name: "Male Chorus", leader: "Deacon Ronald Jefferson" },
      { name: "Praise Team", leader: "Min. Kevin Gilliam" },
      { name: "Youth Choir", leader: "Sis. Tiffany Green" },
    ],
  },
  {
    category: "Youth & Young Adults",
    items: [
      { name: "Youth Ministry", leader: "Min. Tevin Coleman" },
      { name: "Young Adult Ministry", leader: "Sis. Ashley Wise" },
      { name: "Children's Church", leader: "Sis. Pamela Boyd" },
      { name: "Vacation Bible School", leader: "Sis. Gloria Edmonds" },
    ],
  },
  {
    category: "Men & Women",
    items: [
      { name: "Men's Ministry", leader: "Deacon Willie Edmonds" },
      { name: "Women's Ministry", leader: "Sis. Brenda Jefferson" },
      { name: "Couples Ministry", leader: "Pastor & Min. Wise" },
      { name: "Golden Vessels (Seniors)", leader: "Mother Annie Green" },
    ],
  },
  {
    category: "Service & Outreach",
    items: [
      { name: "Community Outreach", leader: "Deacon James Boyd" },
      { name: "Food Pantry", leader: "Sis. Dorothy Washington" },
      { name: "Prison Ministry", leader: "Min. Robert Coleman" },
      { name: "Benevolence Ministry", leader: "Sis. Helen Gilliam" },
    ],
  },
  {
    category: "Church Operations",
    items: [
      { name: "Deacon Board", leader: "Deacon Ronald Jefferson" },
      { name: "Trustee Board", leader: "Trustee James Edmonds" },
      { name: "Usher Board", leader: "Sis. Patricia Green" },
      { name: "Media & Technology", leader: "Bro. Marcus Boyd" },
    ],
  },
];

export default function MinistriesPage() {
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
              Get Involved
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-display text-white text-5xl md:text-7xl lg:text-8xl mb-6"
          >
            Ministries
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl"
          >
            Over 30 active ministries serving every age, every season, every
            calling. Find where you belong.
          </motion.p>
        </div>
      </section>

      {/* Ministry Groups */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto">
          {ministries.map((group, gi) => (
            <div key={gi} className="mb-16 last:mb-0">
              <AnimatedSection>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <h2 className="text-display text-charcoal text-3xl md:text-4xl">
                    {group.category}
                  </h2>
                  <div className="flex-1 h-[1px] bg-charcoal/10" />
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.items.map((ministry, mi) => (
                  <AnimatedSection key={mi} delay={mi * 0.08}>
                    <div className="group bg-cream hover:bg-navy p-6 rounded-sm transition-all duration-500 cursor-pointer relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      <h3 className="text-charcoal group-hover:text-white font-medium text-lg mb-2 transition-colors duration-500">
                        {ministry.name}
                      </h3>
                      <p className="text-warm-gray/80 group-hover:text-white/50 text-sm transition-colors duration-500">
                        {ministry.leader}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 gold-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-display text-charcoal text-4xl md:text-5xl mb-6">
              Ready to Serve?
            </h2>
            <p className="text-charcoal/90 text-lg max-w-xl mx-auto mb-10">
              Every gift matters. Every hand helps. Contact us to find the
              ministry that fits your calling.
            </p>
            <a href="/contact" className="btn-primary bg-charcoal text-white hover:bg-warm-gray">
              Connect With Us
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
