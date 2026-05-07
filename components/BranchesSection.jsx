import Reveal from "./Reveal";
import { branches } from "@/data/services";

export default function BranchesSection() {
  return (
    <section id="branches" className="branches-section">
      <Reveal className="branches-heading">
        <p>ფილიალები </p>
        <h2>სამი ლოკაცია თბილისის მასშტაბით</h2>
        <span>
          თითოეული ფილიალი შექმნილია იმისთვის, რომ სტუმრებს შესთავაზოს კომფორტული,
          თანამედროვე და სანდო გარემო სპორტისთვისა და ყოველდღიური აქტივობებისთვის.
        </span>
      </Reveal>

      <div className="branches-list">
        {branches.map((branch, index) => (
          <Reveal key={branch.slug} delay={index * 0.12} y={60}>
            <article className="branch-card">
              <div className="branch-media-stack">
                <div
                  className="branch-photo"
                  style={{ backgroundImage: `url(${branch.image})` }}
                />

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
                    <strong>ლოკაცია</strong>
                    <span>{branch.location}</span>
                  </div>

                  <div>
                    <strong>სამუშაო დრო</strong>
                    <span>ორშ - კვი: 08:00 - 23:00</span>
                  </div>

                  <div>
                    <strong>ტელეფონი</strong>
                    <span>{branch.phone}</span>
                  </div>
                </div>

                <a href={`tel:${branch.phone}`} className="branch-call-btn">
                  ფილიალთან დაკავშირება
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}