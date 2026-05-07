"use client";

import { useState } from "react";
import Link from "next/link";
import { branches } from "@/data/services";

export default function ServiceCard({ service }) {
  const [open, setOpen] = useState(false);

  const availableBranches = branches.filter((branch) =>
    service.branches.includes(branch.slug)
  );

  return (
    <article className={`service-card ${open ? "branch-open" : ""}`}>
      <div
        className="service-image"
        style={{ backgroundImage: `url(${service.cardImage})` }}
      >
       
      </div>

      <div className="service-content">
        <div>
          <h3>{service.title}</h3>
          <p>{service.shortDescription}</p>
        </div>

        <div className="service-actions">
          <div className={`branch-buttons ${open ? "show" : ""}`}>
            {availableBranches.map((branch, index) => (
              <Link
                key={branch.slug}
                href={`/services/${service.slug}/${branch.slug}`}
                className="branch-link"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <span>{branch.name}</span>
                <small>View branch →</small>
              </Link>
            ))}
          </div>

          <button className="branch-main-btn" onClick={() => setOpen(!open)}>
            {open ? "დახურვა" : "ფილიალის არჩევა"}
          </button>
        </div>
      </div>
    </article>
  );
}