"use client";
import TeacherCTA from "@/components/landing/teacher/TeacherCTA";
import TeacherFeatures from "@/components/landing/teacher/TeacherFeatures";
import TeacherHeader from "@/components/landing/teacher/TeacherHeader";
import TeacherQuote from "@/components/landing/teacher/TeacherQuote";

export default function TeacherSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto">
        <TeacherHeader />
        <TeacherFeatures />
        <TeacherCTA />
        <TeacherQuote />
      </div>
    </section>
  );
}
