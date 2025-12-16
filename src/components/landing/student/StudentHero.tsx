"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Neural network particle animation
const NeuralNetwork = () => {
  const [nodes] = useState(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2
    }))
  );

  return (
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
      {/* Connections */}
      {nodes.map((node, i) => 
        nodes.slice(i + 1).map((target, j) => {
          const distance = Math.hypot(node.x - target.x, node.y - target.y);
          if (distance < 30) {
            return (
              <motion.line
                key={`${i}-${j}`}
                x1={node.x}
                y1={node.y}
                x2={target.x}
                y2={target.y}
                stroke="var(--color-accent)"
                strokeWidth="0.2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1
                }}
              />
            );
          }
          return null;
        })
      )}
      
      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r={node.size}
          fill="var(--color-accent)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2
          }}
        />
      ))}
    </svg>
  );
};

export default function StudentHero() {
  const router = useRouter();
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-[100px]" />
        
        {/* Neural Network Animation */}
        <NeuralNetwork />
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
            <span>Dành riêng cho học sinh Việt Nam</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl heading-editorial text-[var(--color-text)] leading-[1.1] mb-6">
            <span className="link-underline">Bạn học ảo</span> — Học theo{" "}
            <span className="text-[var(--color-accent)] italic">cách của bạn</span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-2xl mx-auto mb-8">
            Không còn lộ trình học chuẩn hóa. LearnIQ tạo ra{" "}
            <span className="font-medium text-[var(--color-text)]">nội dung học tập cá nhân hóa</span>{" "}
            dựa trên cách hiểu riêng của bạn — một AI bạn học thực sự đồng hành, 
            lắng nghe và cảnh báo sớm những bất ổn tâm lý.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=> router.push("/students/demo/chat")} className="btn-primary flex items-center justify-center gap-2">
              Trải nghiệm ngay<ArrowRight size={18} />
            </button>
            <button className="btn-secondary">
              Xem bảng giá
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
