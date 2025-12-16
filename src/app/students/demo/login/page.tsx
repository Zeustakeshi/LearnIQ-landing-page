"use client";

import { SignIn } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

export default function DemoLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-accent)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Branding */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)] flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-[var(--color-text)]">
              LearnIQ
            </span>
          </motion.div>
          
          <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-text)] mb-2">
            Bạn học ảo
          </h1>
          <p className="text-[var(--color-text-muted)] flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
            Trợ lý AI cá nhân của bạn
          </p>
        </div>

        {/* Clerk Sign In */}
        <div className="flex justify-center">
          <SignIn 
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-[var(--color-card-bg)] shadow-lg border border-[var(--color-border)] rounded-2xl",
                headerTitle: "text-[var(--color-text)]",
                headerSubtitle: "text-[var(--color-text-muted)]",
                socialButtonsBlockButton: "bg-white hover:bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-text)]",
                formFieldLabel: "text-[var(--color-text)]",
                formFieldInput: "bg-white border-[var(--color-border)] text-[var(--color-text)]",
                formButtonPrimary: "bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]",
                footerActionLink: "text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]",
              },
            }}
            routing="hash"
            forceRedirectUrl="/students/demo/chat"
          />
        </div>

        {/* Demo notice */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-[var(--color-text-muted)] mt-6"
        >
          Đây là bản demo. Đăng nhập để trải nghiệm bạn học ảo AI.
        </motion.p>
      </motion.div>
    </main>
  );
}
