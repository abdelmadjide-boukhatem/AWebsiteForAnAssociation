import { ReactNode } from "react";
import { motion } from "motion/react";

interface CircularButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export function CircularButton({ children, onClick }: CircularButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      
      {/* Rotating Text Circle */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          style={{ transform: "scale(1.8)" }}
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text className="text-[11px] fill-white tracking-[0.3em]" style={{ fontWeight: 500 }}>
            <textPath href="#circlePath" startOffset="0%">
              LET'S WORK TOGETHER • LET'S WORK TOGETHER •
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-full bg-purple-500/0 group-hover:bg-purple-500/20 blur-xl transition-all duration-300" />
    </motion.button>
  );
}
