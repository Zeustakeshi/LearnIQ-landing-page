"use client";

import StudentFeatures from "@/components/landing/student/StudentFeatures";
import StudentHero from "@/components/landing/student/StudentHero";
import StudentPricing from "@/components/landing/student/StudentPricing";
import StudentValueProp from "@/components/landing/student/StudentValueProp";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function StudentsLandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden font-sans bg-[var(--color-bg)]">
      
      {/* Navbar */}
      <Header currentPage="students" />

      {/* Hero Section */}
      <StudentHero />

      {/* Features Section */}
      <StudentFeatures />

      {/* Value Proposition Section */}
      <StudentValueProp />

      {/* Pricing Section */}
      <StudentPricing />

      {/* Footer */}
      <Footer />
    </main>
  );
}
