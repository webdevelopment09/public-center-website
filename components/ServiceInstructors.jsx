import { instructors } from "@/data/instructors";

export default function ServiceInstructors({ serviceSlug, branchSlug }) {
  const relatedInstructors = instructors.filter(
    (instructor) =>
      instructor.serviceSlug === serviceSlug &&
      instructor.branches.includes(branchSlug)
  );

  if (relatedInstructors.length === 0) {
    return null;
  }

  return (
    <section className="service-instructors-section">
      <div className="service-instructors-heading">
        <p>ინსტრუქტორები</p>
        <h2>პროფესიონალი მწვრთნელები</h2>
        <span>
          ჩვენი ინსტრუქტორები დაგეხმარებიან სწორი ვარჯიშის ტექნიკის, უსაფრთხო
          დატვირთვისა და ინდივიდუალური მიზნების მიღწევაში.
        </span>
      </div>

      <div className="service-instructors-grid">
        {relatedInstructors.map((instructor, index) => (
          <article className="instructor-card" key={index}>
            <div
              className="instructor-photo"
              style={{ backgroundImage: `url(${instructor.image})` }}
            />

            <div className="instructor-info">
              <span>{instructor.role}</span>
              <h3>{instructor.name}</h3>

              <p className="instructor-experience">
                {instructor.experience}
              </p>

              <p>{instructor.description}</p>

              <div className="instructor-specialties">
                {instructor.specialties.map((specialty) => (
                  <small key={specialty}>{specialty}</small>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}