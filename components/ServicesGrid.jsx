"use client";

import { useState } from "react";
import { branches, services } from "@/data/services";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";

export default function ServicesGrid() {
  const [selectedBranch, setSelectedBranch] = useState("all");

  const filteredServices =
    selectedBranch === "all"
      ? services
      : services.filter((service) => service.branches.includes(selectedBranch));

  const rows = [];

  for (let i = 0; i < filteredServices.length; i += 3) {
    rows.push(filteredServices.slice(i, i + 3));
  }

  return (
    <section id="services" className="services-section">
      <Reveal className="section-heading">
        <p>სერვისები</p>
        <h2>აირჩიეთ ფილიალი და ნახეთ ხელმისაწვდომი სერვისები</h2>

        <div className="branch-filter">
          <button
            className={selectedBranch === "all" ? "active" : ""}
            onClick={() => setSelectedBranch("all")}
          >
            ყველა ფილიალი
          </button>

          {branches.map((branch) => (
            <button
              key={branch.slug}
              className={selectedBranch === branch.slug ? "active" : ""}
              onClick={() => setSelectedBranch(branch.slug)}
            >
              {branch.name}
            </button>
          ))}
        </div>
      </Reveal>

      {rows.map((row, rowIndex) => (
        <div className="services-row" key={rowIndex}>
          {row.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.08} y={45}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      ))}

      {filteredServices.length === 0 && (
        <div className="empty-services">
          ამ ფილიალში სერვისები ჯერ დამატებული არ არის.
        </div>
      )}
    </section>
  );
}