"use client";

import { useState } from "react";
import { branches } from "@/data/services";
import Reveal from "./Reveal";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    branch: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    type: "",
    message: "",
  });

  function handleChange(event) {
    const { id, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus({
      loading: true,
      type: "",
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus({
          loading: false,
          type: "error",
          message: result.message || "შეტყობინება ვერ გაიგზავნა.",
        });
        return;
      }

      setStatus({
        loading: false,
        type: "success",
        message: "შეტყობინება წარმატებით გაიგზავნა.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        branch: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        type: "error",
        message: "დაფიქსირდა შეცდომა. გთხოვთ სცადოთ თავიდან.",
      });
    }
  }

  return (
    <section id="contact" className="contact-section">
      <Reveal className="contact-heading">
        <p>კონტაქტი</p>
        <h2>კითხვა გაქვს?</h2>
        <span>
          დაუკავშირდით ცენტრს, აირჩიეთ უახლოესი ფილიალი ან გამოგვიგზავნეთ
          შეტყობინება. ჩვენი გუნდი დაგეხმარებათ მომსახურების, გრაფიკისა და
          ხელმისაწვდომობის საკითხებში.
        </span>
      </Reveal>

      <div className="contact-layout">
        <Reveal className="contact-info-panel" y={60}>
          <div className="contact-main-card">
            <h3>მთავარი საკონტაქტო</h3>

            <div className="contact-info-list">
              <div>
                <strong>ტელეფონი</strong>
                <a href="tel:+995555123456">+995 032 200 80 11</a>
              </div>

              <div>
                <strong>Email</strong>
                <a href="mailto:dididigomicenter@gmail.com">
                  dididigomicenter@gmail.com
                </a>
              </div>

              <div>
                <strong>სამუშაო დრო</strong>
               <span>{"ორშ-შაბ: 07:00 - 23:00\nკვირა: 09:00 - 21:00"}</span>
              </div>
            </div>
          </div>

          <div className="contact-branch-cards">
            {branches.map((branch) => (
              <div className="contact-branch-card" key={branch.slug}>
                <h4>{branch.name}</h4>
                <p>{branch.location}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal y={60} delay={0.15}>
  <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">სახელი *</label>
            <input
              id="name"
              type="text"
              placeholder="თქვენი სახელი"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="phone">ტელეფონი *</label>
            <input
              id="phone"
              type="tel"
              placeholder="+995..."
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email მისამართი *</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="branch">სასურველი ფილიალი *</label>
            <select
              id="branch"
              value={formData.branch}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                აირჩიეთ ფილიალი
              </option>
              {branches.map((branch) => (
                <option value={branch.name} key={branch.slug}>
                  {branch.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="service">სერვისი</label>
            <input
              id="service"
              type="text"
              placeholder="მაგ: ფეხბურთი, ცურვა, ჯიმი..."
              value={formData.service}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="message">შეტყობინება *</label>
            <textarea
              id="message"
              rows="6"
              placeholder="თქვენი კითხვა..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="contact-submit-btn"
            disabled={status.loading}
          >
            {status.loading ? "იგზავნება..." : "გაგზავნა"}
          </button>

          {status.message && (
            <p className={`form-status ${status.type}`}>{status.message}</p>
          )}

          <p className="form-note">
            შეტყობინების გაგზავნის შემდეგ ჩვენი გუნდი დაგიკავშირდებათ
            მითითებულ საკონტაქტო მისამართზე.
          </p>
        </form>
        </Reveal>
      </div>
    </section>
  );
}