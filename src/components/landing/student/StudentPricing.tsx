"use client";
import { motion } from "framer-motion";
import { Check, Sparkles, X } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const pricingPlans = [
  {
    name: "Khởi Đầu Miễn Phí",
    badge: null,
    target: "Học sinh/Giáo viên cá nhân",
    price: "0",
    period: "/tháng",
    promo: null,
    limit: "50 lượt hỏi/tháng",
    overLimit: null,
    features: [
      "Học khóa học cơ bản",
      "Hỏi đáp giới hạn",
      "Kiểm tra trắc nghiệm cơ bản"
    ],
    limitations: [
      "Không AI chấm tự luận",
      "Không có sơ đồ tri thức",
      "Không định hướng nghề nghiệp"
    ],
    cta: "Dùng ngay",
    featured: false
  },
  {
    name: "Smart Learner",
    badge: null,
    target: "Học sinh cá nhân",
    price: "29.000",
    period: "/tháng",
    promo: null,
    limit: "200 lượt hỏi/tháng",
    overLimit: "200 VND/lượt vượt",
    features: [
      "Học khóa học đầy đủ",
      "Lộ trình cá nhân hóa cơ bản",
      "Chấm trắc nghiệm tự động"
    ],
    limitations: [
      "Không AI chấm tự luận",
      "Sơ đồ tri thức giới hạn"
    ],
    cta: "Dùng thử miễn phí",
    featured: false
  },
  {
    name: "AI Genius",
    badge: "PHỔ BIẾN",
    target: "Học sinh cá nhân",
    price: "79.000",
    period: "/tháng",
    promo: null,
    limit: "Unlimited hỏi đáp + 10 bài tự luận/tháng",
    overLimit: "200 VND/lượt hỏi; 5000 VND/bài luận vượt",
    features: [
      "Tất cả Smart Learner",
      "Sơ đồ tri thức đầy đủ",
      "Chấm tự luận AI",
      "Định hướng nghề nghiệp",
      "Bạn học ảo cá nhân hóa"
    ],
    limitations: [],
    cta: "Dùng thử miễn phí",
    featured: true
  },
  {
    name: "Family Boost",
    badge: null,
    target: "2-3 học sinh",
    price: "149.000",
    period: "/tháng",
    promo: null,
    limit: "Unlimited + 30 bài tự luận/tháng",
    overLimit: "200 VND/lượt hỏi; 5000 VND/bài luận vượt",
    features: [
      "Tất cả AI Genius",
      "Ưu đãi gia đình (3 HS)",
      "Quota cao hơn 50%",
      "Học tập nhóm hợp tác"
    ],
    limitations: [],
    cta: "Dùng thử miễn phí",
    featured: false
  }
];

export default function StudentPricing() {
  return (
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative card-warm p-6 flex flex-col ${
                plan.featured 
                  ? "ring-2 ring-[var(--color-accent)] shadow-xl md:scale-105" 
                  : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-white text-xs font-medium flex items-center gap-1">
                    <Sparkles size={12} /> {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <h3 className="font-serif text-xl text-[var(--color-text)] mb-1">{plan.name}</h3>
                <p className="text-xs text-[var(--color-text-muted)]">{plan.target}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-[var(--color-text)]">{plan.price}</span>
                  <span className="text-sm text-[var(--color-text-muted)]">đ{plan.period}</span>
                </div>
                {plan.promo && (
                  <p className="text-xs text-[var(--color-accent)] font-medium mt-2">{plan.promo}</p>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <div className="p-3 rounded-lg bg-[var(--color-bg)]">
                  <p className="text-xs text-[var(--color-text-muted)] mb-1">Hạn mức sử dụng</p>
                  <p className="font-medium text-sm text-[var(--color-text)]">{plan.limit}</p>
                </div>
                
                {plan.overLimit && (
                  <div className="p-3 rounded-lg bg-[var(--color-bg)]">
                    <p className="text-xs text-[var(--color-text-muted)] mb-1">Phí vượt hạn mức</p>
                    <p className="font-medium text-sm text-[var(--color-text)]">{plan.overLimit}</p>
                  </div>
                )}
              </div>

              <div className="space-y-2 mb-6 flex-1">
                <p className="text-xs font-medium text-[var(--color-text)] mb-3">Tính năng nổi bật</p>
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2">
                    <Check size={14} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-[var(--color-text-muted)]">{feature}</span>
                  </div>
                ))}
                {plan.limitations.length > 0 && (
                  <div className="pt-2">
                    <p className="text-xs font-medium text-[var(--color-text-muted)] mb-2">Giới hạn</p>
                    {plan.limitations.map((limitation, lIndex) => (
                      <div key={lIndex} className="flex items-start gap-2 mb-1">
                        <X size={14} className="text-red-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-[var(--color-text-muted)]">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button className={`w-full py-2.5 rounded-full font-medium text-sm transition-all ${
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
  );
}
