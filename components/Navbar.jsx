"use client";

import { useState } from "react";
import Link from "next/link";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <Link href="/" className="logo" onClick={closeMenu}>
          საზოგადოებრივი ცენტრი
        </Link>

        <nav className="nav-links">
          <Link href="/">საწყისი</Link>
          <Link href="/#services">სერვისები</Link>
          <Link href="/#branches">ფილიალები</Link>
          <Link href="/#subscriptions">აბონიმენტები</Link>
          <Link href="/#contact">კონტაქტი</Link>
        </nav>

        <a href="tel:+995555123456" className="nav-cta desktop-call">
          დაგვირეკეთ
        </a>

        <button
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link href="/" onClick={closeMenu}>საწყისი</Link>
        <Link href="/#services" onClick={closeMenu}>სერვისები</Link>
        <Link href="/#branches" onClick={closeMenu}>ფილიალები</Link>
        <Link href="/#subscriptions" onClick={closeMenu}>აბონიმენტები</Link>
        <Link href="/#contact" onClick={closeMenu}>კონტაქტი</Link>

        <a href="tel:+995555123456" className="mobile-call" onClick={closeMenu}>
          დაგვირეკეთ
        </a>
      </div>
    </>
  );
}