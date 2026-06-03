import { branches } from "@/data/services";
import Reveal from "./Reveal";

export default function BranchesSection() {
  return (
    <section id="branches" className="branches-section">
      <Reveal className="branches-heading">
        <p>ფილიალები</p>
        <h2>სამი ფილიალი თბილისში</h2>
        <span>
          თითოეული ფილიალი შექმნილია კომფორტული, თანამედროვე და სანდო
          გარემოსთვის, სადაც მომხმარებლებს შეუძლიათ აქტიური
          ცხოვრების წესის განვითარება.
        </span>
      </Reveal>

      <div className="branches-list">
        {branches.map((branch, index) => (
          <Reveal key={branch.slug} delay={index * 0.12} y={60}>
            <article className="branch-card">
              <div className="branch-media-stack">
                <div className="branch-photo">
                  <img
                    src={branch.image}
                    alt={`${branch.name} ფოტო`}
                    className="branch-photo-bg"
                    aria-hidden="true"
                  />

                  <img
                    src={branch.image}
                    alt={`${branch.name} ფოტო`}
                    className="branch-photo-main"
                  />
                </div>

                <div className="branch-map-placeholder">
                  <iframe
                    src={branch.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${branch.name} map`}
                  />
                </div>
              </div>

              <div className="branch-info">
                <span className="branch-number">0{index + 1}</span>

                <h3>{branch.name}</h3>

                <p>{branch.description}</p>

                <div className="branch-details">
                  <div>
                    <strong>მისამართი</strong>
                    <span>{branch.location}</span>
                  </div>

                  <div>
                    <strong>სამუშაო დრო</strong>
                    <span>{branch.hours}</span>
                  </div>

                  
                </div>

                <a href="tel:+9950322008011" className="branch-call-btn">
                დარეკვა
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}