"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BusinessChallenges from "@/components/BusinessChallenges";
import Solutions from "@/components/Solutions";
import TransformationJourney from "@/components/TransformationJourney";
import Industries from "@/components/Industries";
import UseCases from "@/components/UseCases";
import OurApproach from "@/components/OurApproach";
import WhyHaSolutions from "@/components/WhyHaSolutions";
import DigitalMaturityQuiz from "@/components/DigitalMaturityQuiz";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (topic?: string) => {
    setSelectedTopic(topic);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setSelectedTopic(undefined);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#070b14] text-slate-100 overflow-x-hidden">
      {/* Sticky Enterprise Navigation Bar with Lang Switcher */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* 1. Hero Section / Main Introduction */}
      <Hero onOpenConsultation={() => handleOpenConsultation()} />

      {/* 2. Business Challenges — Understand the Customer */}
      <BusinessChallenges onOpenConsultation={() => handleOpenConsultation("Khảo Sát Quy Trình Vận Hành")} />

      {/* 3. Our Solutions — What We Deliver */}
      <Solutions onOpenConsultation={(serviceTitle) => handleOpenConsultation(serviceTitle)} />

      {/* 4. How We Transform Your Business (Transformation Journey) */}
      <TransformationJourney />

      {/* 5. Industries We Serve */}
      <Industries onOpenConsultation={(industryName) => handleOpenConsultation(`Ngành: ${industryName}`)} />

      {/* 6. Business Use Cases */}
      <UseCases onOpenConsultation={(caseTitle) => handleOpenConsultation(`Kịch Bản: ${caseTitle}`)} />

      {/* 7. Our Approach — How We Work */}
      <OurApproach />

      {/* 8. Why HA-SOLUTIONS */}
      <WhyHaSolutions />

      {/* Interactive CRO Assessment: Digital Maturity Diagnostic */}
      <DigitalMaturityQuiz onOpenConsultation={(customNote) => handleOpenConsultation(customNote)} />

      {/* 9. Final Call to Action */}
      <FinalCTA />

      {/* 10. Footer */}
      <Footer />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        preselectedTopic={selectedTopic}
      />
    </main>
  );
}
