import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceMatrix from './components/ServiceMatrix';
import ProjectEstimator from './components/ProjectEstimator';
import FeaturedWork from './components/FeaturedWork';
import ComparisonMatrix from './components/ComparisonMatrix';
import GrowthProcess from './components/GrowthProcess';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Web & App Development');

  const handleOpenModal = (serviceName = 'Web & App Development') => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen text-white selection:bg-[#FF1E56] selection:text-white relative">
      {/* Full-Website Background Video */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0.38 }}
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay — keeps video as ambient texture, not dominant */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(8,9,12,0.72) 0%, rgba(8,9,12,0.60) 40%, rgba(8,9,12,0.78) 100%)',
          }}
        />
      </div>

      {/* Header Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Flow — each section scrolls in */}
      <main>
        {/* Hero loads immediately, no scroll reveal needed */}
        <Hero onOpenModal={handleOpenModal} />

        <ScrollReveal direction="up" delay="0ms" duration="750ms">
          <ServiceMatrix onOpenModal={handleOpenModal} />
        </ScrollReveal>

        <ScrollReveal direction="up" delay="0ms" duration="750ms">
          <ProjectEstimator onOpenModal={handleOpenModal} />
        </ScrollReveal>

        <ScrollReveal direction="up" delay="0ms" duration="750ms">
          <FeaturedWork onOpenModal={handleOpenModal} />
        </ScrollReveal>

        <ScrollReveal direction="up" delay="0ms" duration="750ms">
          <ComparisonMatrix onOpenModal={handleOpenModal} />
        </ScrollReveal>

        <ScrollReveal direction="up" delay="0ms" duration="750ms">
          <GrowthProcess onOpenModal={handleOpenModal} />
        </ScrollReveal>

        <ScrollReveal direction="up" delay="0ms" duration="750ms">
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal direction="up" delay="0ms" duration="750ms">
          <FAQSection onOpenModal={handleOpenModal} />
        </ScrollReveal>

        <ScrollReveal direction="up" delay="0ms" duration="750ms">
          <ContactSection />
        </ScrollReveal>
      </main>

      {/* Footer scrolls in from bottom */}
      <ScrollReveal direction="up" delay="0ms" duration="600ms">
        <Footer onOpenModal={handleOpenModal} />
      </ScrollReveal>

      {/* Global Project Consultation Modal */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultService={selectedService}
      />
    </div>
  );
}
