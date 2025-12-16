"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Brain,
  Check,
  FileText,
  Presentation,
  Search,
  Sparkles,
  Users,
  X
} from "lucide-react";
import { useState } from "react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Feature data
const features = [
  {
    icon: FileText,
    title: "Soạn thảo bài giảng thông minh",
    description: "Tạo kế hoạch bài dạy theo chuẩn Bộ Giáo dục, tìm kiếm tài liệu và minh họa trong một giao diện duy nhất.",
    color: "bg-amber-500"
  },
  {
    icon: Presentation,
    title: "Slide tương tác & Mô hình 3D",
    description: "Thiết kế bài giảng sinh động với trò chơi, câu hỏi tương tác và mô hình 3D trực quan.",
    color: "bg-orange-500"
  },
  {
    icon: Brain,
    title: "Sơ đồ tư duy & Bài kiểm tra",
    description: "Tạo sơ đồ tư duy và bài kiểm tra trắc nghiệm, tự luận, hoặc tương tác để đánh giá học sinh.",
    color: "bg-yellow-600"
  },
  {
    icon: Bot,
    title: "Trợ giảng ảo AI cá nhân hóa",
    description: "AI học hỏi phong cách giảng dạy của bạn, hỗ trợ trả lời câu hỏi học sinh đúng \"giọng\" của thầy cô.",
    color: "bg-rose-500"
  },
  {
    icon: Users,
    title: "Quản lý lớp học trực tuyến",
    description: "Quản lý danh sách học sinh, điểm số, bài kiểm tra và ghi nhật ký lớp học tập trung.",
    color: "bg-teal-500"
  },
  {
    icon: Search,
    title: "Research AI Agent",
    description: "Hỗ trợ nghiên cứu và thu thập tài liệu giáo dục tự động.",
    color: "bg-indigo-500",
    badge: "Đang phát triển"
  }
];

// Pricing data
const pricingPlans = [
  {
    name: "Educator Start",
    badge: "Phổ Biến",
    target: "Giáo viên cá nhân",
    price: "99.000",
    period: "/tháng",
    promo: "Miễn phí 3 tháng đầu",
    limit: "50 bài giảng/slide/đề thi/tháng",
    overLimit: "5.000 VND/bài khi vượt",
    features: [
      "Soạn bài AI cơ bản",
      "Quản lý lớp học",
      "Chấm trắc nghiệm tự động"
    ],
    limitations: [
      "Không hỗ trợ 3D/tương tác nâng cao",
      "Không có trợ giảng bản sao AI"
    ],
    cta: "Dùng thử miễn phí",
    featured: true
  },
  {
    name: "Master Teacher",
    badge: null,
    target: "Giáo viên cá nhân",
    price: "199.000",
    period: "/tháng",
    promo: null,
    limit: "Unlimited bài giảng/slide/đề thi",
    overLimit: null,
    features: [
      "Tất cả tính năng Educator Start",
      "3D/slide tương tác",
      "Trợ giảng bản sao AI",
      "Research agent",
      "Quản lý lớp chat"
    ],
    limitations: [],
    cta: "Đăng ký ngay",
    featured: false
  }
];

export default function TeacherLandingPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <main className="min-h-screen overflow-x-hidden font-sans bg-[var(--color-bg)]">
      
      {/* Navbar */}
      <Header currentPage="teachers" />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[var(--color-border)] text-[var(--color-text-muted)] text-sm font-medium mb-8">
              <Sparkles size={16} className="text-amber-500" />
              <span>Dành riêng cho giáo viên Việt Nam</span>
            </div>

            <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl heading-editorial text-[var(--color-text)] leading-[1.1] mb-6">
              <span className="link-underline">Trợ giảng ảo AI</span> hiểu{" "}
              <span className="text-[var(--color-accent)] italic">phong cách</span>{" "}
              <br className="hidden sm:block" />
              giảng dạy của bạn
            </h1>

            <p className="text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-2xl mx-auto mb-8">
              LearnIQ không áp đặt AI chung chung. Trợ giảng ảo của chúng tôi học hỏi 
              <span className="font-medium text-[var(--color-text)]"> phương pháp sư phạm</span>, 
              kiến thức chuyên môn và ngữ cảnh lớp học riêng của bạn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center gap-2">
                Dùng thử miễn phí <ArrowRight size={18} />
              </button>
              <button className="btn-secondary">
                Xem bảng giá
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Animated */}
      <section className="py-20 px-6 bg-[var(--color-bg-alt)]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]"></div>
              <span className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide">
                Công cụ AI toàn diện
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl heading-editorial text-[var(--color-text)]">
              Mọi thứ bạn cần để{" "}
              <span className="italic">giảng dạy hiệu quả</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Feature List */}
            <motion.div 
              className="lg:col-span-7 space-y-3"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  layout // Add layout for smooth height changes
                  variants={staggerItem}
                  onClick={() => setActiveFeature(index)}
                  className={`group p-4 rounded-xl cursor-pointer border transition-all duration-300 ${
                    activeFeature === index 
                      ? "bg-[var(--color-card-bg)] border-[var(--color-accent)]/30 shadow-lg scale-[1.02]" 
                      : "bg-transparent border-transparent hover:bg-[var(--color-card-bg)]/50 hover:border-[var(--color-border)]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon size={22} />
                    </div>
                    <div className="flex-1 min-w-0 pt-1">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <div className="flex items-center gap-2">
                            <h3 className={`font-semibold text-lg transition-colors ${activeFeature === index ? "text-[var(--color-accent)]" : "text-[var(--color-text)]"}`}>
                                {feature.title}
                            </h3>
                            {feature.badge && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium whitespace-nowrap">
                                {feature.badge}
                            </span>
                            )}
                        </div>
                        <ArrowRight 
                            size={18} 
                            className={`shrink-0 transition-all duration-300 ${
                                activeFeature === index ? "rotate-90 text-[var(--color-accent)]" : "text-[var(--color-text-muted)] group-hover:translate-x-1"
                            }`}
                        />
                      </div>
                      <AnimatePresence mode="wait">
                        {activeFeature === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed pb-2">
                              {feature.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Feature Preview - Fixed Sticky on Desktop */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
                <motion.div
                {...fadeInUp}
                className="relative w-full aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl"
                >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-bg)]" />
                
                {/* Decorative circles */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl" />

                <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center">
                    <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFeature}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        <div className={`w-24 h-24 rounded-3xl ${features[activeFeature].color} flex items-center justify-center text-white mb-8 shadow-xl shadow-orange-500/20`}>
                        {(() => {
                            const IconComponent = features[activeFeature].icon;
                            return <IconComponent size={48} />;
                        })()}
                        </div>
                        <h3 className="font-serif text-3xl text-[var(--color-text)] mb-4">
                        {features[activeFeature].title}
                        </h3>
                        <p className="text-[var(--color-text-muted)] text-lg leading-relaxed max-w-sm">
                        {features[activeFeature].description}
                        </p>
                    </motion.div>
                    </AnimatePresence>
                </div>
                </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 px-6 bg-[var(--color-bg)]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl heading-editorial text-[var(--color-text)]">
                Điểm nổi bật của{" "}
                <span className="link-underline">LearnIQ</span>
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                Giải pháp của chúng tôi tôn trọng và đề cao phong cách giảng dạy cá nhân của mỗi giáo viên.
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  "Trợ giảng ảo học hỏi phương pháp sư phạm riêng của bạn",
                  "Trả lời câu hỏi học sinh đúng \"giọng\" của thầy cô",
                  "Hỗ trợ từ khâu soạn bài đến tạo tài liệu tương tác",
                  "Tối ưu hóa thời gian và nâng cao hiệu quả công việc"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <p className="text-[var(--color-text)]">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card-warm p-8 space-y-6">
                <blockquote className="font-serif text-2xl md:text-3xl text-[var(--color-text)] leading-relaxed">
                  "Với AI, bạn không cần phải là chuyên gia công nghệ để có một trợ giảng xuất sắc — hiểu bạn, hỗ trợ bạn, và làm việc theo cách của bạn."
                </blockquote>
                <p className="text-[var(--color-text-muted)]">
                  — Triết lý của LearnIQ
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-[var(--color-bg-alt)]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]"></div>
              <span className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide">
                Bảng giá
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl heading-editorial text-[var(--color-text)] mb-4">
              Chọn gói phù hợp với bạn
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Bắt đầu miễn phí và nâng cấp khi bạn sẵn sàng
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative card-warm p-8 ${
                  plan.featured 
                    ? "ring-2 ring-[var(--color-accent)] shadow-xl" 
                    : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium flex items-center gap-1">
                      <Sparkles size={14} /> {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6 pt-2">
                  <h3 className="font-serif text-2xl text-[var(--color-text)] mb-2">{plan.name}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{plan.target}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-[var(--color-text)]">{plan.price}</span>
                    <span className="text-lg text-[var(--color-text-muted)]">đ{plan.period}</span>
                  </div>
                  {plan.promo && (
                    <p className="text-sm text-[var(--color-accent)] font-medium mt-2">{plan.promo}</p>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="p-3 rounded-lg bg-[var(--color-bg)]">
                    <p className="text-sm text-[var(--color-text-muted)]">Hạn mức:</p>
                    <p className="font-medium text-[var(--color-text)]">{plan.limit}</p>
                  </div>
                  
                  {plan.overLimit && (
                    <div className="p-3 rounded-lg bg-[var(--color-bg)]">
                      <p className="text-sm text-[var(--color-text-muted)]">Phí vượt hạn mức:</p>
                      <p className="font-medium text-[var(--color-text)]">{plan.overLimit}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-sm font-medium text-[var(--color-text)]">Tính năng:</p>
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2">
                      <Check size={16} className="text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--color-text-muted)]">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, lIndex) => (
                    <div key={lIndex} className="flex items-start gap-2">
                      <X size={16} className="text-red-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--color-text-muted)]">{limitation}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-full font-medium transition-all ${
                  plan.featured
                    ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]"
                    : "bg-[var(--color-text)] text-white hover:bg-[var(--color-text)]/90"
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
