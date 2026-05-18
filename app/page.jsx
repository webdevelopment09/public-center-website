import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import BranchesSection from "@/components/BranchesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StatsSection from "@/components/StatsSection";
import SubscriptionsSection from "@/components/SubscriptionsSection";

export default function HomePage() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <StatsSection />
        <ServicesGrid />
        <BranchesSection />
        <SubscriptionsSection />
        <ContactSection />
        <Footer />
      </main>
    </PageTransition>
  );
}