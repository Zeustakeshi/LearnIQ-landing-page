import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function TeacherQuote() {
  return (
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
          <p className="text-[var(--color-text-muted)]">— Triết lý của LearnIQ</p>
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
  );
}
