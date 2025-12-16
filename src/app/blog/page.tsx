"use client";

import { ArrowLeft, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] font-sans">
       <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-stone-100 h-20 flex items-center px-6">
          <div className="max-w-7xl mx-auto w-full">
             <Link href="/" className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors">
                <ArrowLeft size={20} /> Quay lại trang chủ
             </Link>
          </div>
       </nav>

       <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
             <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                Góc chia sẻ
             </div>
             <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-tight">
                Kiến thức & Kinh nghiệm
             </h1>
             <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Cập nhật những xu hướng giáo dục mới nhất, phương pháp học tập hiệu quả và bí quyết nuôi dạy con từ các chueyen gia.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                 <article key={item} className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-stone-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="relative aspect-[16/10] bg-stone-200 overflow-hidden">
                       <Image 
                          src={`https://images.unsplash.com/photo-${item % 2 === 0 ? '1427504743086-dadc740e4d8a' : '1503676260728-1c00da094a0b'}?auto=format&fit=crop&w=800&q=80`} 
                          alt="Blog thumbnail" 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                       />
                       <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-stone-800">
                          {item % 2 === 0 ? 'Phương pháp' : 'Công nghệ'}
                       </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1 gap-4">
                       <h3 className="font-serif font-bold text-xl text-stone-800 group-hover:text-orange-500 transition-colors line-clamp-2">
                          {item % 2 === 0 ? 'Làm sao để duy trì động lực học tập mỗi ngày?' : 'Ứng dụng AI vào giảng dạy: Cơ hội và thách thức'}
                       </h3>
                       <p className="text-stone-500 text-sm line-clamp-3 leading-relaxed">
                          Trong thời đại số hóa, việc giữ vững sự tập trung là một thách thức lớn. Bài viết này sẽ chia sẻ 5 chiến lược đã được kiểm chứng...
                       </p>
                       <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-400">
                          <div className="flex items-center gap-2">
                             <User size={14} />
                             <span>Admin</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <Calendar size={14} />
                             <span>17 Th12, 2024</span>
                          </div>
                       </div>
                    </div>
                 </article>
              ))}
           </div>
       </div>
    </main>
  );
}
