import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function TeacherCTA() {
  return (
    <motion.a
      href="/teachers"
      {...fadeInUp}
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
  );
}
