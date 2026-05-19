import Link from "next/link";
import { subscriptionGroups } from "@/data/subscriptions";

export default function ServiceSubscriptionsPreview({ serviceSlug }) {
  const relatedSubscriptions = subscriptionGroups.filter(
    (group) => group.serviceSlug === serviceSlug
  );

  if (relatedSubscriptions.length === 0) {
    return null;
  }

  return (
    <section className="service-subscriptions-preview">
      <div className="service-subscriptions-heading">
        <p>აბონიმენტები</p>
        <h2>ამ სერვისის ტარიფები</h2>
        <span>
          ქვემოთ მოცემულია ამ სერვისთან დაკავშირებული ძირითადი აბონიმენტები.
          სრული დეტალური ინფორმაციის ნახვა შეგიძლიათ აბონიმენტების სექციაში.
        </span>
      </div>

      <div className="service-subscriptions-grid">
        {relatedSubscriptions.map((group) => (
          <article className="service-subscription-card" key={group.id}>
            <div className="service-subscription-top">
              <div className="service-subscription-icon">{group.icon}</div>

              <div>
                <h3>{group.title}</h3>
                <p>{group.shortText}</p>
              </div>
            </div>

            <div className="service-subscription-plans">
              {group.plans.slice(0, 4).map((plan, index) => (
                <div className="service-subscription-plan" key={index}>
                  <div>
                    <strong>{plan.name}</strong>
                    <span>{plan.visits}</span>
                  </div>

                  <b>{plan.price}</b>
                </div>
              ))}
            </div>

            <Link href="/#subscriptions" className="service-subscription-btn">
              სრული აბონიმენტების ნახვა
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}