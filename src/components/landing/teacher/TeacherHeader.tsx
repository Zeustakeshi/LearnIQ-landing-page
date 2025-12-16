import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function TeacherHeader() {
  return (
    <motion.div {...fadeInUp} className="mb-16 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]"></div>
        <span className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide">
          Dành cho Giáo viên
        </span>
      </div>
      <h2 className="font-serif text-3xl md:text-3xl lg:text-4xl heading-editorial text-[var(--color-text)] mb-6">
        <span className="link-underline">Trợ giảng ảo</span> hiểu{" "}
        <span className="italic">phong cách</span> của bạn
      </h2>
      <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed">
        Mỗi giáo viên có một cách dạy riêng. Trợ giảng ảo AI của LearnIQ học hỏi phương pháp sư phạm, 
        kiến thức chuyên môn và ngữ cảnh lớp học của bạn — từ khâu soạn bài đến trả lời câu hỏi học sinh 
        đúng "giọng" của thầy cô.
      </p>
    </motion.div>
  );
}
