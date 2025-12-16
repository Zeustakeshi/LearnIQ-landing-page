"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4 space-y-4">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="font-serif text-xl font-semibold text-[var(--color-text)]">
              LearnIQ
            </span>
          </Link>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs">
            Xây dựng AI giáo dục có trách nhiệm và mang lại giá trị thực sự cho
            người học Việt Nam.
          </p>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="text-sm font-medium text-[var(--color-text)]">
            Nền tảng
          </h4>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li>
              <a
                href="#"
                className="hover:text-[var(--color-text)] transition-colors"
              >
                Về chúng tôi
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--color-text)] transition-colors"
              >
                Sự nghiệp
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--color-text)] transition-colors"
              >
                Tin tức
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="text-sm font-medium text-[var(--color-text)]">
            Sản phẩm
          </h4>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li>
              <Link
                href="/teachers"
                className="hover:text-[var(--color-text)] transition-colors"
              >
                Cho giáo viên
              </Link>
            </li>
            <li>
              <Link
                href="/students"
                className="hover:text-[var(--color-text)] transition-colors"
              >
                Cho học sinh
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--color-text)] transition-colors"
              >
                Cho phụ huynh
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="text-sm font-medium text-[var(--color-text)]">
            Hỗ trợ
          </h4>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li>
              <a
                href="#"
                className="hover:text-[var(--color-text)] transition-colors"
              >
                Trung tâm trợ giúp
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--color-text)] transition-colors"
              >
                Điều khoản
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--color-text)] transition-colors"
              >
                Chính sách
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="text-sm font-medium text-[var(--color-text)]">
            Kết nối
          </h4>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li>
              <a
                href="#"
                className="hover:text-[var(--color-text)] transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--color-text)] transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--color-text)] transition-colors"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-12 mt-12 border-t border-[var(--color-border)] text-sm text-[var(--color-text-muted)]">
        © 2024 LearnIQ. All rights reserved.
      </div>
    </footer>
  );
}
