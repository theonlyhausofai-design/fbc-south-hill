"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/sermons", label: "Sermons" },
  { href: "/ministries", label: "Ministries" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
  { href: "/giving", label: "Give Online" },
];

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white relative grain-overlay">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/logo-FBCSH-75.png"
                  alt="First Baptist Church South Hill"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="text-white font-semibold tracking-widest uppercase text-sm">
                    First Baptist
                  </p>
                  <p className="text-gold text-[10px] tracking-[0.25em] uppercase">
                    South Hill, Virginia
                  </p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Rooted in faith since 1883. Growing in grace. Serving with
                purpose.
              </p>
            </div>

            <div>
              <h4 className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-gold text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                Service Times
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-white text-sm font-medium">
                    Sunday Worship
                  </p>
                  <p className="text-white/50 text-sm">10:30 AM</p>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    Bible Study
                  </p>
                  <p className="text-white/50 text-sm">Wednesday 7:00 PM</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                Visit Us
              </h4>
              <div className="space-y-3 text-sm">
                <p className="text-white/60">
                  First Baptist Church
                  <br />
                  South Hill, VA 23970
                </p>
                <p className="text-white/60">
                  Phone:{" "}
                  <a
                    href="tel:+14344474472"
                    className="text-gold hover:text-gold-light transition-colors"
                  >
                    (434) 447-4472
                  </a>
                </p>
                <p className="text-white/60">
                  Email:{" "}
                  <a
                    href="mailto:info@fbcsouthhill.com"
                    className="text-gold hover:text-gold-light transition-colors"
                  >
                    info@fbcsouthhill.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-xs">
              &copy; {new Date().getFullYear()} First Baptist Church South Hill.
              All rights reserved.
            </p>
            <p className="text-white/50 text-xs">
              Built by{" "}
              <a
                href="https://thewebsitedepartment.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold/60 hover:text-gold transition-colors"
              >
                The Website Department
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
