"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

// Draw animation
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay, duration: 0.01 }
    }
  })
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6 }
  })
};

export default function HeroSection() {
  const mainColor = "#d97706"; // Warm orange - color accent

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 pt-32 pb-20 overflow-hidden">
      
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[var(--color-border)] text-[var(--color-text-muted)] text-sm font-medium mx-auto lg:mx-0"
          >
            <Sparkles size={16} className="text-amber-500" />
            <span>Giải pháp AI cá nhân hóa dành riêng cho giáo dục</span>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl heading-editorial text-[var(--color-text)] leading-[1.15]">
              Mỗi người một{" "}
              <span className="text-[#d97706] italic">bộ não AI</span>{" "}
              <br className="hidden sm:block" />
              được sinh ra cho riêng bạn
            </h1>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            LearnIQ không áp đặt lộ trình chung. Chúng tôi tạo ra một 
            <span className="font-medium text-[var(--color-text)]"> AI cá nhân hóa </span>
            hiểu phong cách, nhu cầu và hành trình riêng của 
            <span className="italic"> từng người dùng</span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <button className="btn-primary flex items-center justify-center gap-2">
              Bắt đầu ngay <ArrowRight size={18} />
            </button>
            <button className="btn-secondary">
              Tìm hiểu thêm
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-6 justify-center lg:justify-start pt-4 text-sm text-[var(--color-text-muted)]"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Giáo viên
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Học sinh
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Phụ huynh
            </span>
          </motion.div>
        </div>

        {/* Right Visual - 3 Personalized AI Brains */}
        <div className="relative flex justify-center items-center h-[400px] sm:h-[500px] order-1 lg:order-2">
          <motion.svg
            viewBox="0 0 400 350"
            className="w-full max-w-md h-auto"
            initial="hidden"
            animate="visible"
          >
            {/* Person 1 - Teacher (Left) */}
            <g>
              {/* Head silhouette */}
              <motion.path
                d="M80 280 
                   C80 280 60 260 60 230
                   C60 200 75 180 95 180
                   C115 180 130 200 130 230
                   C130 260 110 280 110 280"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="2.5"
                strokeLinecap="round"
                variants={draw as any}
                custom={0}
              />
              {/* Shoulders hint */}
              <motion.path
                d="M55 290 Q95 285 135 290"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="2"
                strokeLinecap="round"
                variants={draw as any}
                custom={0.2}
              />
              
              {/* Brain pattern - Structured/Linear (Teacher style) */}
              <motion.path
                d="M95 175 L95 130"
                fill="none"
                stroke={mainColor}
                strokeWidth="3"
                strokeLinecap="round"
                variants={draw as any}
                custom={0.5}
              />
              <motion.path
                d="M95 150 L70 120"
                fill="none"
                stroke={mainColor}
                strokeWidth="2"
                strokeLinecap="round"
                variants={draw as any   }
                custom={0.7}
              />
              <motion.path
                d="M95 150 L120 120"
                fill="none"
                stroke={mainColor}
                strokeWidth="2"
                strokeLinecap="round"
                variants={draw as any}
                custom={0.7}
              />
              <motion.path
                d="M95 130 L75 100"
                fill="none"
                stroke={mainColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                variants={draw as any}
                custom={0.9}
              />
              <motion.path
                d="M95 130 L115 100"
                fill="none"
                stroke={mainColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                variants={draw as any}
                custom={0.9}
              />
              {/* Nodes */}
              <motion.circle cx="95" cy="125" r="6" fill={mainColor} variants={fadeIn} custom={1.1} />
              <motion.circle cx="70" cy="115" r="4" fill={mainColor} variants={fadeIn} custom={1.2} />
              <motion.circle cx="120" cy="115" r="4" fill={mainColor} variants={fadeIn} custom={1.2} />
              <motion.circle cx="75" cy="95" r="3" fill={mainColor} variants={fadeIn} custom={1.3} />
              <motion.circle cx="115" cy="95" r="3" fill={mainColor} variants={fadeIn} custom={1.3} />
            </g>

            {/* Person 2 - Student (Center, Larger) */}
            <g>
              {/* Head silhouette */}
              <motion.path
                d="M175 260 
                   C175 260 150 235 150 195
                   C150 155 175 130 200 130
                   C225 130 250 155 250 195
                   C250 235 225 260 225 260"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="3"
                strokeLinecap="round"
                variants={draw as  any}
                custom={0.3}
              />
              {/* Shoulders */}
              <motion.path
                d="M145 275 Q200 265 255 275"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="2.5"
                strokeLinecap="round"
                variants={draw as  any}
                custom={0.5}
              />
              
              {/* Brain pattern - Organic/Creative (Student style) */}
              <motion.path
                d="M200 125 Q200 90 200 60"
                fill="none"
                stroke={mainColor}
                strokeWidth="4"
                strokeLinecap="round"
                variants={draw as  any}
                custom={0.8}
              />
              <motion.path
                d="M200 100 Q165 80 150 50"
                fill="none"
                stroke={mainColor}
                strokeWidth="3"
                strokeLinecap="round"
                variants={draw as  any}
                custom={1}
              />
              <motion.path
                d="M200 100 Q235 80 250 50"
                fill="none"
                stroke={mainColor}
                strokeWidth="3"
                strokeLinecap="round"
                variants={draw as  any}
                custom={1}
              />
              <motion.path
                d="M200 80 Q175 55 165 35"
                fill="none"
                stroke={mainColor}
                strokeWidth="2"
                strokeLinecap="round"
                variants={draw as  any}
                custom={1.2}
              />
              <motion.path
                d="M200 80 Q225 55 235 35"
                fill="none"
                stroke={mainColor}
                strokeWidth="2"
                strokeLinecap="round"
                variants={draw as  any}
                custom={1.2}
              />
              {/* Extra branches for richness */}
              <motion.path
                d="M170 70 Q155 55 140 60"
                fill="none"
                stroke={mainColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                variants={draw as  any}
                custom={1.3}
              />
              <motion.path
                d="M230 70 Q245 55 260 60"
                fill="none"
                stroke={mainColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                variants={draw as  any}
                custom={1.3}
              />
              {/* Nodes - More for student (lots of knowledge) */}
              <motion.circle cx="200" cy="55" r="8" fill={mainColor} variants={fadeIn} custom={1.4} />
              <motion.circle cx="150" cy="45" r="6" fill={mainColor} variants={fadeIn} custom={1.5} />
              <motion.circle cx="250" cy="45" r="6" fill={mainColor} variants={fadeIn} custom={1.5} />
              <motion.circle cx="165" cy="30" r="5" fill={mainColor} variants={fadeIn} custom={1.6} />
              <motion.circle cx="235" cy="30" r="5" fill={mainColor} variants={fadeIn} custom={1.6} />
              <motion.circle cx="140" cy="55" r="4" fill={mainColor} variants={fadeIn} custom={1.7} />
              <motion.circle cx="260" cy="55" r="4" fill={mainColor} variants={fadeIn} custom={1.7} />
            </g>

            {/* Person 3 - Parent (Right) */}
            <g>
              {/* Head silhouette */}
              <motion.path
                d="M290 280 
                   C290 280 270 260 270 230
                   C270 200 285 180 305 180
                   C325 180 340 200 340 230
                   C340 260 320 280 320 280"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="2.5"
                strokeLinecap="round"
                variants={draw as  any}
                custom={0.1}
              />
              {/* Shoulders */}
              <motion.path
                d="M265 290 Q305 285 345 290"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="2"
                strokeLinecap="round"
                variants={draw as  any}
                custom={0.3}
              />
              
              {/* Brain pattern - Embracing/Protective (Parent style) */}
              <motion.path
                d="M305 175 L305 140"
                fill="none"
                stroke={mainColor}
                strokeWidth="3"
                strokeLinecap="round"
                variants={draw as  any}
                custom={0.6}
              />
              <motion.path
                d="M305 155 Q275 135 270 110"
                fill="none"
                stroke={mainColor}
                strokeWidth="2"
                strokeLinecap="round"
                variants={draw as  any}
                custom={0.8}
              />
              <motion.path
                d="M305 155 Q335 135 340 110"
                fill="none"
                stroke={mainColor}
                strokeWidth="2"
                strokeLinecap="round"
                variants={draw as  any}
                custom={0.8}
              />
              {/* Connecting arc (embracing) */}
              <motion.path
                d="M270 110 Q305 90 340 110"
                fill="none"
                stroke={mainColor}
                strokeWidth="2"
                strokeLinecap="round"
                variants={draw as  any}
                custom={1}
              />
              {/* Nodes */}
              <motion.circle cx="305" cy="135" r="6" fill={mainColor} variants={fadeIn} custom={1.1} />
              <motion.circle cx="270" cy="105" r="5" fill={mainColor} variants={fadeIn} custom={1.2} />
              <motion.circle cx="340" cy="105" r="5" fill={mainColor} variants={fadeIn} custom={1.2} />
              <motion.circle cx="305" cy="90" r="4" fill={mainColor} variants={fadeIn} custom={1.3} />
            </g>

            {/* Connecting dots between people (ecosystem) */}
            <motion.circle 
              cx="135" cy="200" r="3" 
              fill={mainColor} 
              opacity={0.4}
              variants={fadeIn} 
              custom={1.8} 
            />
            <motion.circle 
              cx="155" cy="180" r="2" 
              fill={mainColor} 
              opacity={0.3}
              variants={fadeIn} 
              custom={1.9} 
            />
            <motion.circle 
              cx="255" cy="200" r="3" 
              fill={mainColor} 
              opacity={0.4}
              variants={fadeIn} 
              custom={1.8} 
            />
            <motion.circle 
              cx="275" cy="180" r="2" 
              fill={mainColor} 
              opacity={0.3}
              variants={fadeIn} 
              custom={1.9} 
            />

          </motion.svg>

        
        </div>

      </div>
    </section>
  );
}
