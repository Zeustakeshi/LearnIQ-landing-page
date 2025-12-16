"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  currentPage?: "home" | "teachers" | "students";
}

export default function Header({ currentPage = "home" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/teachers", label: "Giáo viên", key: "teachers" },
    { href: "/students", label: "Học sinh", key: "students" },
    { href: "/#parents", label: "Phụ huynh", key: "parents" },
    { href: "/#blog", label: "Blog", key: "blog" },
    { href: "/research", label: "Nghiên cứu", key: "research" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1.5">
          <span className="font-serif text-xl font-semibold text-[var(--color-text)]">
            LearnIQ
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-[var(--color-text-muted)]">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={
                currentPage === link.key
                  ? "text-[var(--color-accent)]"
                  : "hover:text-[var(--color-text)] transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className="btn-primary flex items-center gap-2">
            Bắt đầu ngay
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--color-text)]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`block ${
                    currentPage === link.key
                      ? "text-[var(--color-accent)] font-medium"
                      : "text-[var(--color-text-muted)]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="btn-primary w-full mt-4">Bắt đầu ngay</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
