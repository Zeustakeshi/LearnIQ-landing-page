"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

export default function StudentValueProp() {
  return (
    <section className="py-24 px-6 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl heading-editorial text-[var(--color-text)]">
              Tại sao chọn{" "}
              <span className="link-underline">LearnIQ</span>?
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
              Không chỉ là nền tảng học tập. LearnIQ là người bạn đồng hành thực sự — 
              hiểu bạn, lắng nghe bạn, và tùy chỉnh mọi thứ theo cách riêng của bạn.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                "AI cá nhân hóa theo cách hiểu của từng học sinh",
                "Bạn học ảo đồng hành tâm lý 24/7",
                "Cảnh báo sớm những bất ổn để gia đình kịp thời can thiệp",
                "Lộ trình học tập linh hoạt — không ép theo khuôn mẫu"
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
                "Học không phải là điền đầy kiến thức vào đầu — mà là thắp sáng ngọn lửa tò mò và cho phép mỗi người học theo cách của riêng mình."
              </blockquote>
              <p className="text-[var(--color-text-muted)]">
                — Triết lý LearnIQ với học sinh
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
