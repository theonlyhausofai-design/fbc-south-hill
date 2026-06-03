"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

const serveDivisions = [
  {
    name: "Ministry Teams",
    teams: [
      {
        name: "Drama Team",
        description:
          "Utilizes creativity and imagination to write, score, act, and build sets that illustrate biblical principles through skits, plays, and other productions.",
        leader: "Dalphne Creecy",
      },
      {
        name: "Extended Hands",
        description:
          "Provides comfort, support, spiritual guidance, and community to those experiencing grief and navigating through loss.",
        leader: "Rev. Barbara Dolgia",
      },
      {
        name: "Family Team",
        description:
          "Equips and supports families through seminars, events, and activities that encourage whole and healthy families rooted in faith, unity, love, and community.",
        leader: "",
      },
      {
        name: "Food Services",
        description:
          "Provides delicious and appetizing foods for meetings, outreaches, and church services. Always seeking experienced certified chefs, bakers, and cooks.",
        leader: "Melvin Hayes",
      },
      {
        name: "Health Team",
        description:
          "Offers health-related assistance and limited medical support at regular church services. Regularly provides health information and sponsors an annual health fair.",
        leader: "",
      },
      {
        name: "Missionaries",
        description:
          "Assists and supports the needs of people locally through outreach.",
        leader: "Darlene Moore",
      },
      {
        name: "Pastor Care Team",
        description:
          "Provides support and administers to the needs of the pastor and his family.",
        leader: "Donna Washington",
      },
      {
        name: "Prayer Team",
        description:
          "Prays and intercedes for the Church, pastors, members, guests, ministries, staff, and the individual needs of others.",
        leader: "Shelia Bullock",
      },
      {
        name: "Student & Family Team",
        description:
          "Engages and teaches our youth about the love of Jesus Christ and helps them grow a personal relationship with Him. Includes Hill's Kidz (Pre-K\u20135th), Hill Students (6th\u201312th), and Hill College.",
        leader: "",
      },
      {
        name: "Security Team",
        description:
          "Provides and ensures a safe environment during Sunday services, worship services, and other church events.",
        leader: "",
      },
    ],
  },
  {
    name: "Guest Experience",
    teams: [
      {
        name: "Greeters",
        description:
          "Welcomes guests and members with heartfelt and cheerful smiles that create an inviting and joy-filled atmosphere.",
        leader: "Sheila Mason",
      },
      {
        name: "Hospitality",
        description:
          "Extends the official welcome during Sunday service and helps guests.",
        leader: "Renaye Freeman",
      },
      {
        name: "Ushers",
        description:
          "Greet and assist individuals with finding seats while maintaining order and flow throughout the church service. Five usher boards rotate by Sunday.",
        leader: "Josette Sarden",
      },
      {
        name: "Connect Team",
        description:
          "Connects guests and members to church resources and serve teams by fostering community and building relationships.",
        leader: "Sandra Tyree",
      },
    ],
  },
  {
    name: "Worship & Production",
    teams: [
      {
        name: "Worship",
        description:
          "Ministers through music and song for worship services and other events.",
        leader: "Min. Cynthia Jacko-Wise",
      },
      {
        name: "Media / Production Team",
        description:
          "Utilizes lights, video, cameras, screens, sound, and ProPresenter to support Sunday services, worship services, and other events.",
        leader: "Chris Foster",
      },
      {
        name: "Photography Team",
        description:
          "Utilizes cameras to capture highlights and candid moments during Sunday Services and other church events.",
        leader: "",
      },
    ],
  },
  {
    name: "Life Groups",
    teams: [
      {
        name: "Couples Life Group",
        description:
          "Married and engaged couples committed to building respectful and loving relationships through group studies, themed sessions, and group activities.",
        leader: "Rev. Dorteo Davis & Deaconess Letitia Davis",
      },
      {
        name: "Men\u2019s Life Group",
        description:
          "Men committed to developing and growing spiritually through small groups, fellowship, activities, and book studies that build disciples.",
        leader: "Durante Footman",
      },
      {
        name: "Women\u2019s Life Group",
        description:
          "Women committed to becoming healed, empowered, and relevant in the Kingdom of God through monthly sessions, activities, and outreaches.",
        leader: "Renaye Freeman & Sandra Tyree",
      },
      {
        name: "Cub Scouts & Scouts BSA",
        description:
          "Prepares young people to make ethical and moral choices over their lifetimes by instilling in them the values of the Scout Oath and Law.",
        leader: "Rev. James Washington",
      },
      {
        name: "Golden Vessels",
        description:
          "Seniors doing life together through monthly meetings, events, and travel opportunities to enhance quality of life and spiritual growth.",
        leader: "Rev. Joyce Nyhaug",
      },
    ],
  },
];

export default function VolunteerPage() {
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
              Sign Up to Serve
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-display text-white text-5xl md:text-7xl lg:text-8xl mb-6"
          >
            Volunteer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl"
          >
            We have a culture code of service. We use our hands to show our
            hearts. Find your place to serve and make a difference.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-charcoal text-lg md:text-xl leading-relaxed">
              First Baptist South Hill is a service-centered congregation of
              believers seeking to better the communities in which they live.
              We do this through a multitude of church ministries, outreaches,
              and life groups. Browse through each area below and find where
              you&apos;d like to serve.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Serve Divisions */}
      {serveDivisions.map((division, di) => (
        <section
          key={di}
          className={`section-padding ${
            di % 2 === 0 ? "bg-warm-white" : "bg-cream"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-12">
                <div className="w-12 h-[1.5px] bg-gold" />
                <h2 className="text-display text-charcoal text-3xl md:text-4xl">
                  {division.name}
                </h2>
                <div className="flex-1 h-[1px] bg-charcoal/10" />
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {division.teams.map((team, ti) => (
                <AnimatedSection key={ti} delay={ti * 0.06}>
                  <div className="bg-white p-6 rounded-sm border border-charcoal/5 h-full flex flex-col group hover:border-navy/20 transition-colors">
                    <h3 className="text-display text-charcoal text-xl mb-3 group-hover:text-navy transition-colors">
                      {team.name}
                    </h3>
                    <p className="text-warm-gray/80 text-sm leading-relaxed flex-1 mb-4">
                      {team.description}
                    </p>
                    {team.leader && (
                      <p className="text-navy text-sm font-medium border-t border-charcoal/5 pt-3">
                        Leader: {team.leader}
                      </p>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-navy grain-overlay relative">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-display text-white text-3xl md:text-4xl mb-4">
              Ready to Serve?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              We look forward to serving with you. Reach out and let us know
              where you&apos;d like to get involved.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-block"
            >
              Contact Us
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
