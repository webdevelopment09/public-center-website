"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 3,
    suffix: "",
    label: "ფილიალი თბილისში",
  },
  {
    number: 10,
    suffix: "+",
    label: "სპორტული სივრცე",
  },
  {
    number: 15,
    suffix: "+",
    label: "სერვისი",
  },
  {
    number: 1000,
    suffix: "+",
    label: "ვიზიტორი",
  },
];

function Counter({ number, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, number, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (latest) => {
        setValue(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, number]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            className="stat-card"
            key={stat.label}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3>
              <Counter number={stat.number} suffix={stat.suffix} />
            </h3>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}