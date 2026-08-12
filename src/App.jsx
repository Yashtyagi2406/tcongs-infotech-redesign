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
    <div className="min-h-screen bg-[#08090C] text-white selection:bg-[#FF1E56] selection:text-white relative">
      {/* Header Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Flow */}
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <ServiceMatrix onOpenModal={handleOpenModal} />
        <ProjectEstimator onOpenModal={handleOpenModal} />
        <FeaturedWork onOpenModal={handleOpenModal} />
        <ComparisonMatrix onOpenModal={handleOpenModal} />
        <GrowthProcess onOpenModal={handleOpenModal} />
        <Testimonials />
        <FAQSection onOpenModal={handleOpenModal} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Global Project Consultation Modal */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultService={selectedService}
      />
    </div>
  );
}
