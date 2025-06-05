"use client";
import { motion } from "framer-motion";

export default function LoadingCircleSpinner() {
  return (
    <div className="flex justify-center items-center py-30 rounded-sm">
      <motion.div
        className="w-10 h-10 rounded-full border-2 border-t-transparent border-blue-700 will-change-transform"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
