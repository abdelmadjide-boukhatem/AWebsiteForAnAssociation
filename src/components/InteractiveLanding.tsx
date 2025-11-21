import { useState, useEffect, useRef } from "react";
import { RobotScene } from "./RobotScene";
import { CircularButton } from "./CircularButton";
import { Mail } from "lucide-react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function InteractiveLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="bg-white px-4 py-2">
            <span className="text-black tracking-wider">HEYY ALI</span>
          </div>
          
          <nav className="flex gap-8">
            <a href="#services" className="text-white hover:text-purple-400 transition-colors">
              Services
            </a>
            <a href="#about" className="text-white hover:text-purple-400 transition-colors">
              About Me
            </a>
            <a href="#portfolio" className="text-white hover:text-purple-400 transition-colors">
              Portfolio
            </a>
            <a href="#blog" className="text-white hover:text-purple-400 transition-colors">
              Blog
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            x: useSpring(useMotionValue(0), springConfig),
            y: useSpring(useMotionValue(0), springConfig),
          }}
        >
          <motion.h1
            className="text-[20vw] tracking-tight select-none"
            style={{
              fontWeight: 900,
              WebkitTextStroke: "2px rgba(255,255,255,0.1)",
              color: "transparent",
            }}
            animate={{
              x: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ROBOTICS
          </motion.h1>
        </motion.div>

        {/* 3D Robot Scene */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <RobotScene mousePosition={mousePosition} />
        </div>

        {/* Statistics */}
        <div className="absolute bottom-20 left-0 right-0 z-20 flex justify-center gap-16">
          {[
            { count: "100+", label: "Success Projects" },
            { count: "100+", label: "Success Projects" },
            { count: "109+", label: "Success Projects" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="text-4xl mb-2">{stat.count}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Right Side Text */}
        <motion.div
          className="absolute right-12 top-1/2 -translate-y-1/2 z-20 max-w-xs"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-right text-sm tracking-wider leading-relaxed mb-4">
            DESIGNER WITH A PASSION<br />
            FOR CREATING INTUITIVE<br />
            DIGITAL EXPERIENCES
          </p>
          <div className="flex justify-end">
            <button className="text-xs text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1">
              VIEW MORE
            </button>
          </div>
        </motion.div>

        {/* Floating Circular Button */}
        <motion.div
          className="fixed bottom-12 right-12 z-30"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
        >
          <CircularButton onClick={scrollToContact}>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center shadow-2xl shadow-purple-500/50">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </CircularButton>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-purple-950/20">
        <div className="text-center">
          <motion.h2
            className="text-6xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            className="text-white/60 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Get in touch to discuss your next project
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </div>
      </section>
    </div>
  );
}
