import Link from "next/link";
import { notFound } from "next/navigation";
import { branches, services } from "@/data/services";
import PageTransition from "@/components/PageTransition";

export function generateStaticParams() {
  const params = [];

  services.forEach((service) => {
    service.branches.forEach((branchSlug) => {
      params.push({
        serviceSlug: service.slug,
        branchSlug: branchSlug,
      });
    });
  });

  return params;
}

export default async function ServiceBranchPage({ params }) {
  const { serviceSlug, branchSlug } = await params;

  const service = services.find((item) => item.slug === serviceSlug);
  const branch = branches.find((item) => item.slug === branchSlug);

  if (!service || !branch || !service.branches.includes(branch.slug)) {
    notFound();
  }

  return (
  <PageTransition>
    <main className="service-detail-page">
      <section
        className="detail-hero"
        style={{
  backgroundImage: `url(${service.branchHeroImages?.[branch.slug] || service.cardImage})`,
}}
      >
        <div className="detail-overlay" />

        <div className="detail-hero-content">
          <p>{branch.name}</p>
          <h1>{service.title}</h1>
          <span>Professional facilities for a healthier lifestyle.</span>
        </div>
      </section>

      <section className="detail-content">
        <div className="detail-text">
          <p className="small-title">About this service</p>
          <h2>
            {service.title} at {branch.name}
          </h2>
          <p>
            This page is prepared for your future content. You can add real
            descriptions, schedules, trainers, prices, rules, and more details
            about this service in this specific branch.
          </p>

          <a href={`tel:${branch.phone}`} className="primary-btn">
            Call {branch.name}
          </a>
        </div>

        <div className="gallery">
  {(service.galleryImages?.[branch.slug] || []).map((image, index) => (
    <a
      key={index}
      href={image}
      target="_blank"
      rel="noopener noreferrer"
      className="gallery-image"
      style={{ backgroundImage: `url(${image})` }}
      aria-label={`Open gallery image ${index + 1}`}
    />
  ))}
</div>

        <Link href="/#services" className="back-link">
          ← Back to Services
        </Link>
      </section>
        </main>
  </PageTransition>
);
}