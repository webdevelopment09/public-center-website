import { serviceGroups } from "@/data/serviceGroups";

export default function ServiceGroupsSection({ serviceSlug, branchSlug }) {
  const groups = serviceGroups.filter(
    (group) =>
      group.serviceSlug === serviceSlug && group.branchSlug === branchSlug
  );

  if (groups.length === 0) {
    return null;
  }

  return (
    <section className="service-groups-section">
      <div className="service-groups-heading">
        <p>ჯგუფური / ინდივიდუალური მომზადება</p>
        <h2>სპორტული ჯგუფები და მწვრთნელები</h2>
        <span>
          გაეცანით ამ ფილიალში არსებულ ვარჯიშის ჯგუფებს, მწვრთნელებს და
          სავარჯიშო პირობებს.
        </span>
      </div>

      <div className="service-groups-grid">
        {groups.map((group) => (
          <article className="service-group-card" key={group.title}>
            <div className="service-group-content">
              <span className="service-group-label">
            {group.serviceName}
            {group.age ? ` • ${group.age}` : ""}
            </span>

              <h3>{group.title}</h3>

              <p>{group.description}</p>

              <div className="service-group-coaches">
                <strong>მწვრთნელები</strong>

                <div>
                  {group.coaches.map((coach) => (
                    <span key={coach}>{coach}</span>
                  ))}
                </div>
              </div>

              <div className="service-group-qualification">
                {group.qualification}
              </div>

              <ul className="service-group-benefits">
                {group.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>

              <div className="service-group-actions">
              <a href={`tel:${group.phone}`} className="service-group-call-btn">
                დარეკვა: {group.phone}
              </a>

              {group.registrationLink && (
              <a
              href={group.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="service-group-register-btn"
            >
            რეგისტრაცია
            </a>
            )}
            </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}