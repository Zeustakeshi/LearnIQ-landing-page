"use client";

import HeroSection from "@/components/landing/HeroSection";
import ParentSection from "@/components/landing/ParentSection";
import StudentSection from "@/components/landing/StudentSection";
import TeacherSection from "@/components/landing/TeacherSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden font-sans bg-[var(--color-bg)]">
      
      {/* Navbar */}
      <Header currentPage="home" />

      {/* Hero Section - Personalized AI Brain Logic */}
      <HeroSection />

      {/* Featured Announcement Card */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-warm p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-sm font-medium text-[var(--color-accent)]">Điểm khác biệt</span>
                <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-text)]">
                  Cá nhân hóa sâu sắc — không phải lộ trình chuẩn hóa
                </h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Trong khi các nền tảng khác chỉ số hóa nội dung, LearnIQ hướng đến giải pháp toàn diện: 
                  AI thấu hiểu phong cách giảng dạy, đồng hành tâm lý học sinh, và cập nhật Sơ đồ tri thức liên tục.
                </p>
                <a href="#" className="arrow-link text-[var(--color-text)] inline-flex pt-2">
                  Xem tính năng nổi bật
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/teachers" className="p-4 bg-[var(--color-bg)] rounded-lg hover:bg-[var(--color-bg-alt)] transition-colors group">
                  <p className="text-sm text-[var(--color-text-muted)] mb-1">Trợ giảng ảo</p>
                  <p className="font-medium text-[var(--color-text)] flex items-center gap-2">
                    Dành cho Giáo viên <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </p>
                </Link>
                <a href="#students" className="p-4 bg-[var(--color-bg)] rounded-lg hover:bg-[var(--color-bg-alt)] transition-colors group">
                  <p className="text-sm text-[var(--color-text-muted)] mb-1">Bạn học ảo</p>
                  <p className="font-medium text-[var(--color-text)] flex items-center gap-2">
                    Dành cho Học sinh <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </p>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teacher Section */}
      <div id="teachers">
        <TeacherSection />
      </div>

      {/* Student Section */}
      <div id="students">
        <StudentSection />
      </div>

      {/* Parent Section */}
      <div id="parents">
        <ParentSection />
      </div>

      {/* Mission Statement Section */}
      <section className="py-24 md:py-32 px-6 bg-[var(--color-bg)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl heading-editorial text-[var(--color-text)]">
                Chúng tôi xây dựng LearnIQ vì{" "}
                <span className="link-underline">một nền giáo dục tốt đẹp hơn</span>
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                Công nghệ AI sẽ có tác động lớn đến giáo dục trong những năm tới. Chúng tôi tin rằng việc thiết kế công nghệ AI có trách nhiệm đòi hỏi sự thấu hiểu sâu sắc về nhu cầu của người học.
              </p>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                Đó là lý do chúng tôi tập trung xây dựng công cụ mang lại giá trị thực sự cho giáo viên, học sinh và phụ huynh - những người nắm giữ tương lai của nền giáo dục Việt Nam.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Row */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-4 gap-6"
          >
            <a href="#" className="card-cream p-6 group cursor-pointer">
              <div className="aspect-square rounded-lg bg-[var(--color-bg)] flex items-center justify-center mb-4 overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  <circle cx="50" cy="50" r="30" fill="none" stroke="#D97706" strokeWidth="2" />
                  <circle cx="50" cy="50" r="10" fill="#D97706" />
                </svg>
              </div>
              <h3 className="font-medium text-[var(--color-text)] mb-1">Quan điểm về AI</h3>
              <p className="text-sm text-[var(--color-text-muted)]">An toàn và có trách nhiệm</p>
            </a>
            
            <a href="#" className="card-accent p-6 text-white group cursor-pointer">
              <div className="aspect-square rounded-lg bg-white/10 flex items-center justify-center mb-4 overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  <rect x="25" y="30" width="50" height="40" fill="none" stroke="white" strokeWidth="2" rx="4" />
                  <line x1="35" y1="45" x2="65" y2="45" stroke="white" strokeWidth="2" />
                  <line x1="35" y1="55" x2="55" y2="55" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-medium text-white mb-1">Chính sách minh bạch</h3>
              <p className="text-sm text-white/70">Trách nhiệm với cộng đồng</p>
            </a>
            
            <a href="#" className="card-cream p-6 group cursor-pointer">
              <div className="aspect-square rounded-lg bg-[var(--color-bg)] flex items-center justify-center mb-4 overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  <path d="M30 70 L50 30 L70 70" fill="none" stroke="#D97706" strokeWidth="2" />
                  <circle cx="50" cy="30" r="5" fill="#D97706" />
                </svg>
              </div>
              <h3 className="font-medium text-[var(--color-text)] mb-1">LearnIQ Academy</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Học cách sử dụng AI</p>
            </a>

            <a href="#" className="card-warm p-6 group cursor-pointer">
              <div className="aspect-square rounded-lg bg-[var(--color-bg)] flex items-center justify-center mb-4 overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  <circle cx="35" cy="50" r="8" fill="#D97706" />
                  <circle cx="50" cy="35" r="8" fill="#D97706" opacity="0.7" />
                  <circle cx="65" cy="50" r="8" fill="#D97706" opacity="0.5" />
                </svg>
              </div>
              <h3 className="font-medium text-[var(--color-text)] mb-1">Đội ngũ</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Gặp gỡ nhóm phát triển</p>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Blog / Featured Section */}
      <section id="blog" className="py-16 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center mb-8"
          >
            <h2 className="font-serif text-2xl text-[var(--color-text)]">Tin tức & Nghiên cứu</h2>
          </motion.div>

          <div className="border-t border-[var(--color-border)]">
            {[
              { title: "Giới thiệu LearnIQ 2.0", category: "Thông báo", date: "17 Th12, 2024" },
              { title: "AI đang thay đổi lớp học như thế nào?", category: "Nghiên cứu", date: "15 Th12, 2024" },
              { title: "5 kỹ thuật ghi nhớ đỉnh cao", category: "Phương pháp học", date: "10 Th12, 2024" },
              { title: "Làm sao để làm bạn cùng con tuổi dậy thì?", category: "Nuôi dạy con", date: "05 Th12, 2024" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col md:flex-row md:items-center justify-between py-5 border-b border-[var(--color-border)] hover:bg-[var(--color-bg-alt)] -mx-4 px-4 transition-colors group"
              >
                <div className="flex items-start md:items-center gap-4 md:gap-8">
                  <span className="text-sm text-[var(--color-text-muted)] w-32 shrink-0">{item.category}</span>
                  <span className="font-medium text-[var(--color-text)] group-hover:underline">{item.title}</span>
                </div>
                <span className="text-sm text-[var(--color-text-muted)] mt-2 md:mt-0">{item.date}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}