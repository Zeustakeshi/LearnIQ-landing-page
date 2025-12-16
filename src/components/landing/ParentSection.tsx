"use client";
import { motion } from "framer-motion";
import { Activity, ArrowRight, Bell, Heart, MessageSquare, ShieldCheck } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

export default function ParentSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#1A1A1A] text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          {...fadeInUp}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#D97706]"></div>
            <span className="text-sm font-medium text-white/60 uppercase tracking-wide">
              Dành cho Phụ huynh
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl heading-editorial text-white mb-6">
            <span className="underline decoration-[#D97706] underline-offset-4 decoration-2">Thấu hiểu</span>{" "}
            để đồng hành cùng con
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            LearnIQ tạo ra một vòng tay bảo vệ — giúp gia đình và nhà trường can thiệp sớm, đúng lúc 
            khi con gặp khó khăn. Không chỉ theo dõi điểm số, mà còn thấu hiểu áp lực và cảm xúc của con mỗi ngày.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Column - Feature List */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#D97706]/20 flex items-center justify-center text-[#D97706] shrink-0">
                <Bell size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Thông báo real-time</h4>
                <p className="text-sm text-white/60 leading-relaxed">
                  Nhận thông báo khi con đến lớp, kết quả bài kiểm tra, nhận xét từ giáo viên — 
                  mọi thứ trong một ứng dụng.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#D97706]/20 flex items-center justify-center text-[#D97706] shrink-0">
                <Activity size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Phân tích tâm lý & học lực</h4>
                <p className="text-sm text-white/60 leading-relaxed">
                  Biểu đồ trực quan về tiến bộ học tập và nhận diện sớm dấu hiệu căng thẳng, 
                  chán nản của con.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#D97706]/20 flex items-center justify-center text-[#D97706] shrink-0">
                <MessageSquare size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Kết nối trực tiếp với giáo viên</h4>
                <p className="text-sm text-white/60 leading-relaxed">
                  Trao đổi với giáo viên bộ môn chỉ trong 1 chạm — không cần Zalo, không cần hẹn lịch.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#D97706]/20 border border-[#D97706]/30">
              <div className="w-12 h-12 rounded-xl bg-[#D97706] flex items-center justify-center text-white shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Cảnh báo sớm bất ổn tâm lý</h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  Khi "Bạn học ảo" nhận thấy dấu hiệu bất ổn từ con, hệ thống sẽ thận trọng thông báo 
                  để bạn can thiệp kịp thời.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a href="#" className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all">
                Tìm hiểu thêm <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Quote & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Main Quote Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#D97706] mb-6">
                <Heart size={28} />
              </div>
              
              <blockquote className="font-serif text-2xl md:text-3xl text-white leading-relaxed mb-6">
                "Chúng tôi giúp bạn trở thành người bạn đồng hành tâm lý của con — 
                hiểu rõ điểm mạnh và áp lực của con mỗi ngày."
              </blockquote>
              
              <p className="text-white/60">
                — Triết lý của LearnIQ dành cho phụ huynh
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/5 p-5 rounded-xl border border-white/10 text-center"
              >
                <div className="text-3xl md:text-4xl font-serif text-white mb-2">98%</div>
                <p className="text-xs text-white/50">Phụ huynh an tâm hơn</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-[#D97706] p-5 rounded-xl text-center"
              >
                <div className="text-3xl md:text-4xl font-serif text-white mb-2">2x</div>
                <p className="text-xs text-white/80">Tăng kết nối với con</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white/5 p-5 rounded-xl border border-white/10 text-center"
              >
                <div className="text-3xl md:text-4xl font-serif text-white mb-2">24/7</div>
                <p className="text-xs text-white/50">Cập nhật liên tục</p>
              </motion.div>
            </div>

            {/* Safety Note */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-sm text-white/70 leading-relaxed">
                <strong className="text-white">Bảo mật & Riêng tư:</strong> Mọi dữ liệu về tâm lý và học tập 
                của con được bảo vệ nghiêm ngặt. Chỉ phụ huynh và nhà trường được ủy quyền mới có thể 
                truy cập các cảnh báo quan trọng.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
