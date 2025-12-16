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
  Users
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

// Waitlist Form Component
function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setEmail("");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Nhập địa chỉ email của bạn"
          className="w-full px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-md border-2 border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] transition-all shadow-lg"
          required
          disabled={isSubmitting || submitStatus === "success"}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || submitStatus === "success"}
        className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-[var(--color-accent)] to-orange-500 text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Đang xử lý...</span>
          </>
        ) : submitStatus === "success" ? (
          <>
            <Check size={20} />
            <span>Đã đăng ký thành công!</span>
          </>
        ) : (
          <>
            <span>Tham gia hàng đợi</span>
          </>
        )}
      </button>

      {submitStatus === "success" && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-600 text-sm font-medium text-center"
        >
          ✓ Cảm ơn bạn! Chúng tôi sẽ thông báo cho bạn khi sản phẩm ra mắt.
        </motion.p>
      )}

      {submitStatus === "error" && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm font-medium text-center"
        >
          ✗ Vui lòng nhập địa chỉ email hợp lệ.
        </motion.p>
      )}

      <p className="text-sm text-[var(--color-text-muted)] text-center">
        Đăng ký để nhận thông báo sớm nhất về ngày ra mắt và ưu đãi đặc biệt dành cho người dùng đầu tiên.
      </p>
    </form>
  );
}

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

      {/* Pricing Section - Coming Soon */}
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
              Sắp ra mắt trong thời gian tới
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Chúng tôi đang hoàn thiện sản phẩm để mang đến trải nghiệm tốt nhất cho giáo viên
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="card-warm p-12 text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 backdrop-blur-md border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-sm font-semibold shadow-lg">
                <Sparkles size={18} className="animate-pulse" />
                <span>Coming Soon</span>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-text)]">
                Đang trong giai đoạn phát triển
              </h3>
              
              <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
                Sản phẩm của chúng tôi hiện đang được phát triển và hoàn thiện. 
                Tham gia hàng đợi để nhận thông báo sớm nhất khi ra mắt và nhận được 
                <span className="font-semibold text-[var(--color-accent)]"> ưu đãi đặc biệt dành cho người dùng đầu tiên</span>.
              </p>

              <div className="pt-4">
                <a 
                  href="#waitlist" 
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--color-accent)] to-orange-500 text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
                >
                  <span>Tham gia hàng đợi</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 px-6 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl heading-editorial text-[var(--color-text)] mb-6">
              Tham gia hàng đợi ngay hôm nay
            </h2>
            <p className="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-2xl mx-auto">
              Đăng ký để nhận thông báo sớm nhất về ngày ra mắt và các ưu đãi đặc biệt
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-lg">
                1
              </div>
              <h3 className="font-semibold text-xl text-[var(--color-text)]">
                Ưu đãi đặc biệt
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Người dùng đầu tiên sẽ nhận được <span className="font-semibold text-[var(--color-accent)]">miễn phí 6 tháng đầu</span> và các ưu đãi độc quyền
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-lg">
                2
              </div>
              <h3 className="font-semibold text-xl text-[var(--color-text)]">
                Truy cập sớm
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Trải nghiệm sản phẩm trước khi ra mắt chính thức và đóng góp ý kiến để cải thiện
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-lg">
                3
              </div>
              <h3 className="font-semibold text-xl text-[var(--color-text)]">
                Cập nhật mới nhất
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Nhận thông tin về tính năng mới, lộ trình phát triển và ngày ra mắt chính thức
              </p>
            </motion.div>
          </div>

          {/* Email Signup Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-xl mx-auto"
          >
            <WaitlistForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
