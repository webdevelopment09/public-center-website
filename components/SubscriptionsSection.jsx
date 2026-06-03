"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { subscriptionGroups } from "@/data/subscriptions";

export default function SubscriptionsSection() {
  const [selectedGroup, setSelectedGroup] = useState(null);

  return (
    <section id="subscriptions" className="subscriptions-section">
      <div className="subscriptions-heading">
        <p>აბონიმენტები</p>
        <h2>სერვისების ტარიფები და აბონიმენტები</h2>
        <span>
          აირჩიეთ სასურველი სერვისი და იხილეთ სრული ინფორმაცია ვიზიტების
          რაოდენობის, ხანგრძლივობისა და ღირებულების შესახებ.
        </span>
      </div>

      <div className="senior-program-card">
  <div className="senior-program-icon">60+</div>

  <div className="senior-program-content">
    <p>სპეციალური პროგრამა</p>

    <h3>60+ პროგრამა</h3>

    <span>
      60+ პროგრამის ფარგლებში ბენეფიციარებს შეუძლიათ საზოგადოებრივი ცენტრის
      სერვისებით უფასოდ სარგებლობა.
    </span>

    <div className="senior-documents">
      <strong>საჭირო დოკუმენტები:</strong>

      <ul>
        <li>ჯანმრთელობის ცნობა — ფორმა 100</li>
        <li>საჯარო რეესტრიდან რეგისტრაციის ცნობა საცხოვრებელი ადგილის შესახებ</li>
        <li>პირადობის დამადასტურებელი მოწმობის ასლი</li>
      </ul>
    </div>
  </div>
</div>

      <div className="subscriptions-grid">
        {subscriptionGroups.map((group) => (
          <article className="subscription-card" key={group.id}>
            <div className="subscription-card-icon">{group.icon}</div>

            <div>
              <h3>{group.title}</h3>
              <p>{group.shortText}</p>
            </div>

            <div className="subscription-card-bottom">
              <span>{group.plans.length} აბონიმენტი</span>

              <button onClick={() => setSelectedGroup(group)}>
                აბონიმენტების ნახვა
              </button>
            </div>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {selectedGroup && (
          <motion.div
            className="subscription-modal-backdrop"
            onClick={() => setSelectedGroup(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="subscription-modal"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedGroup(null)}
                aria-label="Close subscription modal"
              >
                ×
              </button>

              <div className="modal-header">
                <div className="modal-icon">{selectedGroup.icon}</div>

                <div>
                  <p>{selectedGroup.subtitle}</p>
                  <h3>{selectedGroup.title} — აბონიმენტები</h3>
                </div>
              </div>

              <div className="subscription-table-wrap">
                <table className="subscription-table">
                  <thead>
                    <tr>
                      <th>აბონიმენტი</th>
                      <th>ვიზიტების რაოდენობა</th>
                      <th>დროები</th>
                      <th>ღირებულება</th>
                      <th>მომსახურების პაკეტი</th>
                    </tr>
                  </thead>

                  <tbody>
                    {selectedGroup.plans.map((plan, index) => (
                      <tr key={index}>
                        <td>{plan.name}</td>
                        <td>{plan.visits}</td>
                        <td>{plan.duration}</td>
                        <td>{plan.price}</td>
                        <td>{plan.package || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="subscription-notes">
                {selectedGroup.notes.map((note, index) => (
                  <div key={index}>
                    <span>{index + 1}</span>
                    <p>{note}</p>
                  </div>
                ))}
              </div>

              <div className="subscription-modal-footer">
                <div>
                  <strong>სამუშაო საათები</strong>
                  <p>{selectedGroup.workingHours}</p>
                </div>

                <a href={`tel:${selectedGroup.phone}`}>
                  დარეკვა: {selectedGroup.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}