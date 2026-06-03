"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "https://fbcsouthhill.com/live-stream/", label: "Watch Live", external: true },
  { href: "/ministries", label: "Ministries" },
  { href: "/events", label: "Events" },
  { href: "/food-pantry", label: "Food Pantry" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-charcoal/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/images/logo-FBCSH-75.png"
              alt="First Baptist Church South Hill"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-white text-sm font-semibold tracking-widest uppercase">
                First Baptist
              </span>
              <span className="text-gold text-[10px] tracking-[0.25em] uppercase">
                South Hill
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-gold text-sm font-medium tracking-wide uppercase transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-gold text-sm font-medium tracking-wide uppercase transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
            <a href="https://fbcsouthhill.com/donate/" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs ml-4">
              Donate
            </a>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                isMobileOpen
                  ? { rotate: 45, y: 6, width: 24 }
                  : { rotate: 0, y: 0, width: 24 }
              }
              className="block h-[2px] bg-white origin-center"
              style={{ width: 24 }}
            />
            <motion.span
              animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[2px] w-4 bg-gold"
            />
            <motion.span
              animate={
                isMobileOpen
                  ? { rotate: -45, y: -6, width: 24 }
                  : { rotate: 0, y: 0, width: 24 }
              }
              className="block h-[2px] bg-white origin-center"
              style={{ width: 24 }}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileOpen(false)}
                      className="text-display text-white text-4xl hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="text-display text-white text-4xl hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="https://fbcsouthhill.com/donate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileOpen(false)}
                  className="btn-primary mt-4"
                >
                  Donate
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
