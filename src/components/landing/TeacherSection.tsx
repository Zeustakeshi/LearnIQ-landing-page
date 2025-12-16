"use client";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Brain, FileText, Presentation, Users } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const features = [
  {
    icon: FileText,
    title: "Soạn bài giảng thông minh",
    description: "Tạo kế hoạch bài dạy theo chuẩn Bộ Giáo dục, tìm kiếm tài liệu và minh họa trong một giao diện duy nhất."
  },
  {
    icon: Presentation,
    title: "Slide tương tác & Mô hình 3D",
    description: "Thiết kế bài giảng sinh động với trò chơi, câu hỏi tương tác và mô hình 3D trực quan."
  },
  {
    icon: Brain,
    title: "Sơ đồ tư duy & Bài kiểm tra",
    description: "Tạo sơ đồ tư duy và bài kiểm tra trắc nghiệm, tự luận, hoặc tương tác để đánh giá học sinh."
  },
  {
    icon: Bot,
    title: "Trợ giảng ảo AI cá nhân hóa",
    description: "AI học hỏi phong cách giảng dạy của bạn, hỗ trợ trả lời câu hỏi học sinh đúng \"giọng\" của thầy cô."
  },
  {
    icon: Users,
    title: "Quản lý lớp học trực tuyến",
    description: "Quản lý danh sách học sinh, điểm số, bài kiểm tra và ghi nhật ký lớp học tập trung."
  }
];

export default function TeacherSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          {...fadeInUp}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]"></div>
            <span className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide">
              Dành cho Giáo viên
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl heading-editorial text-[var(--color-text)] mb-6">
            <span className="link-underline">Trợ giảng ảo</span> hiểu{" "}
            <span className="italic">phong cách</span> của bạn
          </h2>
          
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed">
            Mỗi giáo viên có một cách dạy riêng. Trợ giảng ảo AI của LearnIQ học hỏi phương pháp sư phạm, 
            kiến thức chuyên môn và ngữ cảnh lớp học của bạn — từ khâu soạn bài đến trả lời câu hỏi học sinh 
            đúng "giọng" của thầy cô.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-warm p-6 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-alt)] flex items-center justify-center text-[var(--color-accent)] mb-4 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="font-semibold text-[var(--color-text)] mb-2">{feature.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="card-accent p-6 flex flex-col justify-between text-white group cursor-pointer"
          >
            <div>
              <h3 className="font-semibold text-white mb-2">Bắt đầu ngay</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Trải nghiệm miễn phí và khám phá cách AI thay đổi công việc giảng dạy của bạn.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 font-medium">
              Đăng ký dùng thử <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-[var(--color-border)]"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <blockquote className="font-serif text-2xl md:text-3xl text-[var(--color-text)] leading-relaxed">
                "Với AI, bạn không cần phải là chuyên gia công nghệ để có một trợ giảng xuất sắc — 
                hiểu bạn, hỗ trợ bạn, và làm việc theo cách của bạn."
              </blockquote>
              <p className="text-[var(--color-text-muted)]">
                — Triết lý của LearnIQ
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card-cream p-6 text-center">
                <div className="text-4xl font-serif text-[var(--color-text)] mb-2">90%</div>
                <p className="text-sm text-[var(--color-text-muted)]">Giảm thời gian soạn bài</p>
              </div>
              <div className="card-cream p-6 text-center">
                <div className="text-4xl font-serif text-[var(--color-text)] mb-2">3D</div>
                <p className="text-sm text-[var(--color-text-muted)]">Mô hình tương tác</p>
              </div>
              <div className="card-cream p-6 text-center">
                <div className="text-4xl font-serif text-[var(--color-text)] mb-2">AI</div>
                <p className="text-sm text-[var(--color-text-muted)]">Trợ giảng thông minh</p>
              </div>
              <div className="card-cream p-6 text-center">
                <div className="text-4xl font-serif text-[var(--color-text)] mb-2">24/7</div>
                <p className="text-sm text-[var(--color-text-muted)]">Hỗ trợ liên tục</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
