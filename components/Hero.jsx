"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="hero-label">თბილისის მრავალფუნქციური საზოგადოებრივი ცენტრი</p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          იზრუნე შენს სხეულზე 
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          ძალა, ენერგია და დისციპლინა ერთ სივრცეში - შენი ახალი საყვარელი ადგილი აქტიური ცხოვრებისთვის.
          
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a href="#services" className="primary-btn">
            აღმოაჩინე სერვისები
          </a>
          <a href="#contact" className="secondary-btn">
            დაგვიკავშირდით
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}