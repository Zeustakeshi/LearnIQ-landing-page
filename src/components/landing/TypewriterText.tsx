"use client";
import { motion } from 'framer-motion';

export default function TypewriterText({ text }: { text: string }) {
   const letters = Array.from(text);
   return (
      <span className="italic text-green-400">
         {letters.map((char, i) => (
            <motion.span
               key={i}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: i * 0.05, duration: 0 }}
            >
               {char}
            </motion.span>
         ))}
      </span>
   )
}
