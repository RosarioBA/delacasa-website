"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Button from "@/components/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/bonita", label: "Bonita Café" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
            onClick={() => setOpen(true)}
            className="text-white text-2xl"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

        {/* Center - Logo */}
        <div className="flex-none">
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="De La Casa logo"
              width={120}
              height={120}
              className="block object-contain"
            />
          </Link>
        </div>

        {/* Right - Book Table + Social */}
        <div className="flex-1 flex justify-end items-center gap-4">
        <Button href="/reservation" label="Book Table" />
        <a
            href="https://instagram.com/delacasa_pastabar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl"
            style={{ color: "white" }}
        >
            <FaInstagram />
        </a>
        <a
            href="https://www.facebook.com/delacasaioslo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl"
        >
            <FaFacebook />
        </a>
        </div>
      </nav>

      {/* Drawer overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex"
          onClick={() => setOpen(false)}
        >
          {/* Menu panel */}
          <div
            style={{ backgroundColor: "#000000" }}
            className="w-72 h-full flex flex-col px-8 py-10 gap-8"
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
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white text-xl tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
            <Button
              href="/reservation"
              label="Book Table"
              onClick={() => setOpen(false)}
            />
            </div>
          </div>
          {/* Dimmed backdrop */}
          <div className="flex-1 bg-black/50" />
        </div>
      )}
    </>
  );
}
