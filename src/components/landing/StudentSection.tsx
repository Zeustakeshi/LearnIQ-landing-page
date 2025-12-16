"use client";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Map, MessageCircle, Shield, Sparkles } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

export default function StudentSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white border-y border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          {...fadeInUp}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]"></div>
            <span className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide">
              Dành cho Học sinh
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl heading-editorial text-[var(--color-text)] mb-6">
            <span className="link-underline">Bạn học ảo</span> — Người bạn{" "}
            <span className="italic">đồng hành tâm lý</span>
          </h2>
          
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed">
            Mỗi học sinh sẽ có một "người bạn" AI không chỉ định hướng học tập, mà còn là điểm tựa tinh thần — 
            lắng nghe mọi tâm sự, thấu hiểu những áp lực tuổi học trò, và kịp thời cảnh báo cho nhà trường và phụ huynh 
            về những bất ổn tâm lý tiềm ẩn.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Large Feature Card - Bạn học ảo AI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2"
          >
            <div className="card-accent p-8 md:p-10 h-full flex flex-col justify-between text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <MessageCircle size={28} />
                </div>
                
                <h3 className="font-serif text-3xl md:text-4xl mb-4">
                  Không chỉ là trợ lý học tập
                </h3>
                
                <p className="text-white/80 leading-relaxed max-w-lg mb-6 text-lg">
                  Bạn học ảo được thiết kế như một người bạn thực sự — lắng nghe, ghi nhận những tâm tư, 
                  cảm xúc của bạn. Khi phát hiện dấu hiệu bất ổn, hệ thống sẽ thận trọng cảnh báo cho 
                  nhà trường và phụ huynh để can thiệp kịp thời.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Điểm tựa tinh thần</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Cảnh báo sớm tâm lý</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Bạn đồng hành 24/7</span>
                </div>
              </div>

              <div className="relative z-10 mt-8">
                <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-full font-medium hover:bg-white/90 transition-colors">
                  Gặp bạn học ảo <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Sơ đồ tri thức cá nhân */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="card-warm p-6 h-full">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-alt)] flex items-center justify-center text-[var(--color-accent)] mb-4">
                <Map size={24} />
              </div>
              <h4 className="font-semibold text-[var(--color-text)] mb-2">Sơ đồ tri thức cá nhân</h4>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Bản đồ tư duy sống động, trực quan hóa toàn bộ kiến thức, lỗ hổng và sự tiến bộ của bạn — 
                tự động cập nhật liên tục theo từng bài học.
              </p>
            </div>
          </motion.div>

          {/* Định hướng nghề nghiệp */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-warm p-6 h-full">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-alt)] flex items-center justify-center text-[var(--color-accent)] mb-4">
                <Compass size={24} />
              </div>
              <h4 className="font-semibold text-[var(--color-text)] mb-2">Định hướng nghề nghiệp từ sớm</h4>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Dựa trên dữ liệu học tập và sơ đồ tri thức, hệ thống phân tích năng lực nổi trội để 
                gợi ý nghề nghiệp phù hợp với tiềm năng thực sự của bạn.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Feature Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 grid md:grid-cols-3 gap-6"
        >
          {/* AI theo phong cách giáo viên */}
          <div className="card-cream p-6">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-accent)] mb-4">
              <Sparkles size={24} />
            </div>
            <h4 className="font-semibold text-[var(--color-text)] mb-2">AI trả lời theo "giọng" thầy cô</h4>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Thắc mắc về bài học? AI trả lời theo đúng phong cách của giáo viên chủ nhiệm — 
              như thể thầy cô đang ngồi cạnh bạn.
            </p>
          </div>

          {/* Bảo vệ tâm lý */}
          <div className="card-cream p-6">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-accent)] mb-4">
              <Shield size={24} />
            </div>
            <h4 className="font-semibold text-[var(--color-text)] mb-2">Vòng tay bảo vệ</h4>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Khi AI nhận thấy bất ổn tâm lý tiềm ẩn, hệ thống sẽ thận trọng thông báo để 
              gia đình và nhà trường can thiệp sớm, đúng lúc.
            </p>
          </div>

          {/* Stats Card */}
          <div className="card-warm p-6 flex flex-col justify-center text-center">
            <div className="text-5xl font-serif text-[var(--color-text)] mb-2">∞</div>
            <p className="text-sm text-[var(--color-text-muted)]">Lộ trình cá nhân hóa — không phải lộ trình chuẩn hóa</p>
          </div>
        </motion.div>

        {/* Link Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap gap-8 border-t border-[var(--color-border)] pt-8"
        >
          <a href="#" className="arrow-link text-[var(--color-text)]">
            Xem sơ đồ tri thức mẫu
          </a>
          <a href="#" className="arrow-link text-[var(--color-text)]">
            Cách AI cá nhân hóa học tập
          </a>
          <a href="#" className="arrow-link text-[var(--color-text)]">
            Câu chuyện học sinh
          </a>
        </motion.div>

      </div>
    </section>
  );
}
