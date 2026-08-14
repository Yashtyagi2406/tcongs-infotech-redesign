import React, { useState, useMemo, lazy, Suspense } from 'react';
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

// Lazy-load the heavy WebGL Hyperspeed component so it doesn't block initial paint
const Hyperspeed = lazy(() => import('./components/Hyperspeed'));

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

  // Memoized so WebGL scene is never recreated on re-renders
  const hyperspeedOptions = useMemo(() => ({
    onSpeedUp: () => {},
    onSlowDown: () => {},
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xFFFFFF,
      brokenLines: 0xFFFFFF,
      // Left lane: brand crimson tones
      leftCars: [0xFF1E56, 0xE51A4B, 0xC247AC],
      // Right lane: brand lime + teal accent
      rightCars: [0xD4FF00, 0x8EB800, 0x03B3C3],
      // Side sticks: crimson
      sticks: 0xFF1E56,
    },
  }), []);

  return (
    <div className="min-h-screen text-white selection:bg-[#FF1E56] selection:text-white relative">
      {/* Full-Website Hyperspeed Background */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none -z-10"
        style={{ opacity: 0.42 }}
      >
        <Suspense fallback={null}>
          <Hyperspeed effectOptions={hyperspeedOptions} />
        </Suspense>
        {/* Overlay: dims the scene so content is readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(8,9,12,0.70) 0%, rgba(8,9,12,0.55) 40%, rgba(8,9,12,0.75) 100%)',
            zIndex: 1,
          }}
        />
      </div>

      {/* Header Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Flow */}
      <main>
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

      <ScrollReveal direction="up" delay="0ms" duration="600ms">
        <Footer onOpenModal={handleOpenModal} />
      </ScrollReveal>

      <ProjectModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultService={selectedService}
      />
    </div>
  );
}
