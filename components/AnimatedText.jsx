import { useState, useEffect } from "react";
import { X, Zap } from "lucide-react";
import { motion } from "framer-motion";

const rotatingTexts = [
  "Free Shipping Worldwide",
  "Best Deals Every Day",
  "Join 2M+ Happy Winners",
  "Win Your Dream Car Today",
  "Limited Tickets – Act Fast!",
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full bg-linear-to-r from-amber-500 via-orange-500 to-red-600 text-white overflow-hidden rounded-xl shadow-2xl"
    >
      {/* Animated Shining Background Effect */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{ x: [-100, 1000] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="h-full w-48 bg-linear-to-r from-transparent via-white to-transparent -skew-x-12"
        />
      </div>

      <div className="relative flex items-center justify-center py-3.5 px-6 gap-3">
        {/* Zap Icon with Pulse */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Zap size={20} className="text-yellow-300 drop-shadow-md" fill="currentColor" />
        </motion.div>

        {/* Rotating Text with Smooth Fade + Slide */}
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-sm md:text-base font-bold tracking-wide drop-shadow-md"
        >
          {rotatingTexts[index]}
        </motion.span>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all duration-300"
      >
        <X size={16} className="text-white drop-shadow" />
      </button>
    </motion.div>
  );
}