import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const containerVariants = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.1 },
  },
};


const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

const features = [
  {
    icon: require("lucide-react").FileText,
    title: "Soạn bài giảng thông minh",
    description:
      "Tạo kế hoạch bài dạy theo chuẩn Bộ Giáo dục, tìm kiếm tài liệu và minh họa trong một giao diện duy nhất.",
    color: "bg-[var(--color-accent)]",
  },
  {
    icon: require("lucide-react").Presentation,
    title: "Slide tương tác & Mô hình 3D",
    description:
      "Thiết kế bài giảng sinh động với trò chơi, câu hỏi tương tác và mô hình 3D trực quan.",
    color: "bg-amber-600",
  },
  {
    icon: require("lucide-react").Brain,
    title: "Sơ đồ tư duy & Bài kiểm tra",
    description:
      "Tạo sơ đồ tư duy và bài kiểm tra trắc nghiệm, tự luận, hoặc tương tác để đánh giá học sinh.",
    color: "bg-indigo-600",
  },
  {
    icon: require("lucide-react").Bot,
    title: "Trợ giảng ảo AI cá nhân hóa",
    description:
      "AI học hỏi phong cách giảng dạy của bạn, hỗ trợ trả lời câu hỏi học sinh đúng \"giọng\" của thầy cô.",
    color: "bg-emerald-600",
  },
  {
    icon: require("lucide-react").Users,
    title: "Quản lý lớp học trực tuyến",
    description:
      "Quản lý danh sách học sinh, điểm số, bài kiểm tra và ghi nhật ký lớp học tập trung.",
    color: "bg-rose-600",
  },
];

export default function TeacherFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
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
            Mọi thứ bạn cần để <span className="italic">giảng dạy hiệu quả</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Feature List */}
          <motion.div
            className="lg:col-span-7 space-y-3"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                layout
                variants={staggerItem}
                onClick={() => setActiveFeature(index)}
                className={`group p-4 rounded-xl cursor-pointer border transition-all duration-300 ${
                  activeFeature === index
                    ? "bg-[var(--color-card-bg)] border-[var(--color-accent)]/30 shadow-lg scale-[1.02]"
                    : "bg-transparent border-transparent hover:bg-[var(--color-card-bg)]/50 hover:border-[var(--color-border)]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon size={22} />
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2">
                        <h3
                          className={`font-semibold text-lg transition-colors ${
                            activeFeature === index ? "text-[var(--color-accent)]" : "text-[var(--color-text)]"
                          }`}
                        >
                          {feature.title}
                        </h3>
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

          {/* Feature Preview */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              {...fadeInUp}
              className="relative w-full aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-bg)]" />
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
                    <div
                      className={`w-24 h-24 rounded-3xl ${features[activeFeature].color} flex items-center justify-center text-white mb-8 shadow-xl shadow-orange-500/20`}
                    >
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
  );
}
