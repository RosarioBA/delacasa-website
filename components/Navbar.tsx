"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/#takeaway", label: "Takeaway" },
  { href: "https://givn.no/en/shop/delacasa", label: "Gift Cards", external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const useDark = !scrolled && !isHome;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 flex items-center px-6 py-4 transition-colors duration-300 ${
          scrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        {/* Left - Hamburger */}
        <div className="flex-1">
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center gap-[5px] w-6"
            aria-label="Toggle menu"
          >
            <motion.span
              className={`block h-[3px] rounded transition-colors duration-300 ${useDark ? "bg-black" : "bg-white"}`}
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className={`block h-[3px] rounded transition-colors duration-300 ${useDark ? "bg-black" : "bg-white"}`}
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={`block h-[3px] rounded transition-colors duration-300 ${useDark ? "bg-black" : "bg-white"}`}
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>

        {/* Center - Logo */}
        <div className="flex-none">
          <Link href="/">
            <Image
              src="/DeLaCasa_black.png"
              alt="De La Casa logo"
              width={120}
              height={120}
              className="block object-contain"
            />
          </Link>
        </div>

        {/* Right - Social */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <a
            href="https://instagram.com/delacasa_pastabar/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-3xl transition-colors duration-300 ${useDark ? "text-black" : "text-white"}`}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/delacasaioslo/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl transition-colors duration-300 ${useDark ? "text-black" : "text-white"}`}
          >
            <FaFacebook />
          </a>
        </div>
      </nav>

      {/* Drawer overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
          >
            {/* Menu panel */}
            <motion.div
              className="w-72 h-full flex flex-col px-8 py-10 gap-8 bg-black"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="text-white text-2xl self-end"
                aria-label="Close menu"
              >
                ✕
              </button>

              {/* Nav links */}
              <nav className="flex flex-col gap-6">
                {links.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="text-white text-xl tracking-wide uppercase transition-all duration-200 hover:italic hover:font-bold hover:pl-2"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`text-white text-xl tracking-wide uppercase transition-all duration-200 hover:italic hover:font-bold hover:pl-2 ${pathname === link.href ? "underline underline-offset-4" : ""}`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>
              <div className="w-fit">
                <Button
                  href="/reservation"
                  label="Book Table"
                  onClick={() => setOpen(false)}
                />
              </div>

              {/* Bonita Café strip */}
              <div className="mt-auto border-t border-white/10 pt-6 origin-left scale-75">
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Also from the Bonita family</p>
                <p className="text-[#A06811] text-xs font-semibold tracking-wide">Bonita Café</p>
              </div>
            </motion.div>

            {/* Dimmed backdrop */}
            <div className="flex-1 bg-black/50" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
