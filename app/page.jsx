import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import BranchesSection from "@/components/BranchesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StatsSection from "@/components/StatsSection";

export default function HomePage() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <StatsSection />
        <ServicesGrid />
        <BranchesSection />

        <section id="subscriptions" className="future-section">
          <p>Subscriptions section coming next.</p>
        </section>

        <ContactSection />
        <Footer />
      </main>
    </PageTransition>
  );
}