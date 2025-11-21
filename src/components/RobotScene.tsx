import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface RobotSceneProps {
  mousePosition: { x: number; y: number };
}

export function RobotScene({ mousePosition }: RobotSceneProps) {
  const robotX = useMotionValue(0);
  const robotY = useMotionValue(0);
  const robotRotateY = useMotionValue(0);
  const robotRotateX = useMotionValue(0);
  const headRotateY = useMotionValue(0);
  const headRotateX = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const x = useSpring(robotX, springConfig);
  const y = useSpring(robotY, springConfig);
  const rotateY = useSpring(robotRotateY, springConfig);
  const rotateX = useSpring(robotRotateX, springConfig);
  const headRotY = useSpring(headRotateY, { damping: 20, stiffness: 100 });
  const headRotX = useSpring(headRotateX, { damping: 20, stiffness: 100 });

  useEffect(() => {
    robotX.set(mousePosition.x * 40);
    robotY.set(mousePosition.y * 20);
    robotRotateY.set(mousePosition.x * 10);
    robotRotateX.set(-mousePosition.y * 5);
    headRotateY.set(mousePosition.x * 25);
    headRotateX.set(-mousePosition.y * 15);
  }, [mousePosition, robotX, robotY, robotRotateY, robotRotateX, headRotateY, headRotateX]);

  return (
    <div className="w-full h-full flex items-center justify-center" style={{ perspective: "2000px" }}>
      <motion.div
        className="relative"
        style={{
          x,
          y,
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Humanoid Robot - Tesla Optimus Style */}
        <div className="relative" style={{ transformStyle: "preserve-3d", scale: "1.2" }}>
          
          {/* Head */}
          <motion.div
            className="relative mx-auto mb-1"
            style={{
              width: "70px",
              height: "90px",
              transformStyle: "preserve-3d",
              rotateY: headRotY,
              rotateX: headRotX,
            }}
          >
            {/* Head Shell - Sleek Design */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700/50 shadow-2xl overflow-hidden"
                 style={{ 
                   transform: "translateZ(30px)",
                   boxShadow: "0 10px 50px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)"
                 }}>
              
              {/* Face Panel */}
              <div className="absolute inset-2 rounded-2xl bg-gradient-to-b from-gray-900/50 to-black/50 border border-purple-500/20">
                {/* Visor/Eyes Display */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-12 h-6 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 shadow-lg opacity-90"
                     style={{ 
                       boxShadow: "0 0 20px rgba(147, 51, 234, 0.8), inset 0 2px 4px rgba(255,255,255,0.2)",
                     }}>
                  {/* Scan Line Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent" style={{ height: "40%" }} />
                </div>

                {/* Sensor Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/60 shadow-sm shadow-purple-500/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/60 shadow-sm shadow-purple-500/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/60 shadow-sm shadow-purple-500/50" />
                </div>
              </div>

              {/* Head Detail Lines */}
              <div className="absolute top-1/2 left-2 right-2 h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent" />
            </div>

            {/* Head Side Panels */}
            <div className="absolute inset-y-2 -left-1 w-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-l-lg"
                 style={{ transform: "translateZ(15px) rotateY(-90deg)", transformOrigin: "right" }} />
            <div className="absolute inset-y-2 -right-1 w-3 bg-gradient-to-l from-gray-800 to-gray-900 rounded-r-lg"
                 style={{ transform: "translateZ(15px) rotateY(90deg)", transformOrigin: "left" }} />
          </motion.div>

          {/* Neck */}
          <div className="relative mx-auto w-12 h-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg"
               style={{ transform: "translateZ(25px)" }}>
            <div className="absolute inset-x-2 top-1 h-2 bg-gray-700/50 rounded" />
          </div>

          {/* Torso/Chest */}
          <div className="relative mx-auto mt-1" style={{ width: "140px", height: "180px", transformStyle: "preserve-3d" }}>
            {/* Main Chest Plate */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl border border-gray-700/50 shadow-2xl"
                 style={{ 
                   transform: "translateZ(35px)",
                   boxShadow: "0 20px 60px rgba(0,0,0,0.9), inset 0 2px 0 rgba(255,255,255,0.05)"
                 }}>
              
              {/* Central Power Core */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 shadow-2xl"
                   style={{ 
                     boxShadow: "0 0 40px rgba(147, 51, 234, 0.6), inset 0 2px 8px rgba(255,255,255,0.2), inset 0 -2px 8px rgba(0,0,0,0.5)"
                   }}>
                <div className="absolute inset-2 rounded-full border-2 border-purple-400/30" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-400/40 to-transparent" />
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full bg-purple-400/20 animate-pulse" />
              </div>

              {/* Chest Panels */}
              <div className="absolute top-28 left-4 right-4 h-20 rounded-2xl bg-gradient-to-b from-gray-800/50 to-black/80 border border-gray-700/30">
                <div className="absolute inset-x-3 top-3 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                <div className="absolute inset-x-3 bottom-3 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
              </div>

              {/* Vertical Division */}
              <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-gray-600/50 to-transparent" />

              {/* Side Vents */}
              <div className="absolute top-32 left-2 space-y-1">
                <div className="w-6 h-0.5 bg-gray-700/70 rounded" />
                <div className="w-6 h-0.5 bg-gray-700/70 rounded" />
                <div className="w-6 h-0.5 bg-gray-700/70 rounded" />
              </div>
              <div className="absolute top-32 right-2 space-y-1">
                <div className="w-6 h-0.5 bg-gray-700/70 rounded" />
                <div className="w-6 h-0.5 bg-gray-700/70 rounded" />
                <div className="w-6 h-0.5 bg-gray-700/70 rounded" />
              </div>
            </div>

            {/* Torso Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black rounded-3xl"
                 style={{ transform: "translateZ(20px)" }} />
          </div>

          {/* Shoulders & Arms */}
          {/* Left Shoulder */}
          <div className="absolute top-32 -left-20" style={{ transformStyle: "preserve-3d" }}>
            <div className="w-10 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-xl"
                 style={{ transform: "translateZ(30px)" }}>
              <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50" />
            </div>
            
            {/* Left Upper Arm */}
            <div className="absolute top-12 left-1 w-8 h-24 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700/30"
                 style={{ transform: "translateZ(25px)" }}>
              {/* Arm Segments */}
              <div className="absolute top-8 inset-x-1.5 h-1 bg-gray-700/50 rounded" />
              <div className="absolute top-16 inset-x-1.5 h-1 bg-gray-700/50 rounded" />
            </div>

            {/* Left Elbow Joint */}
            <div className="absolute top-36 left-2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 border border-purple-600/30 shadow-lg"
                 style={{ transform: "translateZ(25px)", boxShadow: "0 0 15px rgba(147, 51, 234, 0.4)" }} />

            {/* Left Forearm */}
            <div className="absolute top-40 left-1.5 w-7 h-20 rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-700/30"
                 style={{ transform: "translateZ(23px)" }}>
              <div className="absolute top-6 inset-x-1.5 h-0.5 bg-gray-700/50 rounded" />
              <div className="absolute top-12 inset-x-1.5 h-0.5 bg-gray-700/50 rounded" />
            </div>

            {/* Left Hand */}
            <div className="absolute top-60 left-1.5 w-7 h-8 rounded-b-xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700/30"
                 style={{ transform: "translateZ(23px)" }}>
              <div className="absolute bottom-1 left-1 right-1 flex gap-0.5">
                <div className="flex-1 h-3 bg-gray-700/50 rounded-b" />
                <div className="flex-1 h-4 bg-gray-700/50 rounded-b" />
                <div className="flex-1 h-3 bg-gray-700/50 rounded-b" />
              </div>
            </div>
          </div>

          {/* Right Shoulder */}
          <div className="absolute top-32 -right-20" style={{ transformStyle: "preserve-3d" }}>
            <div className="w-10 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-xl"
                 style={{ transform: "translateZ(30px)" }}>
              <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50" />
            </div>
            
            {/* Right Upper Arm */}
            <div className="absolute top-12 left-1 w-8 h-24 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700/30"
                 style={{ transform: "translateZ(25px)" }}>
              <div className="absolute top-8 inset-x-1.5 h-1 bg-gray-700/50 rounded" />
              <div className="absolute top-16 inset-x-1.5 h-1 bg-gray-700/50 rounded" />
            </div>

            {/* Right Elbow Joint */}
            <div className="absolute top-36 left-2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 border border-purple-600/30 shadow-lg"
                 style={{ transform: "translateZ(25px)", boxShadow: "0 0 15px rgba(147, 51, 234, 0.4)" }} />

            {/* Right Forearm */}
            <div className="absolute top-40 left-1.5 w-7 h-20 rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-700/30"
                 style={{ transform: "translateZ(23px)" }}>
              <div className="absolute top-6 inset-x-1.5 h-0.5 bg-gray-700/50 rounded" />
              <div className="absolute top-12 inset-x-1.5 h-0.5 bg-gray-700/50 rounded" />
            </div>

            {/* Right Hand */}
            <div className="absolute top-60 left-1.5 w-7 h-8 rounded-b-xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700/30"
                 style={{ transform: "translateZ(23px)" }}>
              <div className="absolute bottom-1 left-1 right-1 flex gap-0.5">
                <div className="flex-1 h-3 bg-gray-700/50 rounded-b" />
                <div className="flex-1 h-4 bg-gray-700/50 rounded-b" />
                <div className="flex-1 h-3 bg-gray-700/50 rounded-b" />
              </div>
            </div>
          </div>

          {/* Pelvis/Waist */}
          <div className="relative mx-auto mt-2 w-32 h-16 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700/30"
               style={{ transform: "translateZ(30px)" }}>
            <div className="absolute inset-3 rounded-xl bg-gradient-to-b from-gray-900/50 to-black/50 border border-gray-700/20" />
            <div className="absolute top-1/2 left-3 right-3 h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent" />
          </div>

          {/* Legs */}
          <div className="relative mx-auto flex gap-6 justify-center mt-1" style={{ transformStyle: "preserve-3d" }}>
            {/* Left Leg */}
            <div className="relative" style={{ transformStyle: "preserve-3d" }}>
              {/* Left Hip Joint */}
              <div className="mx-auto w-8 h-8 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 border border-purple-600/30 shadow-lg mb-1"
                   style={{ transform: "translateZ(28px)", boxShadow: "0 0 15px rgba(147, 51, 234, 0.4)" }} />
              
              {/* Left Thigh */}
              <div className="w-10 h-28 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700/30 mx-auto"
                   style={{ transform: "translateZ(25px)" }}>
                <div className="absolute top-10 inset-x-2 h-1 bg-gray-700/50 rounded" />
                <div className="absolute top-20 inset-x-2 h-1 bg-gray-700/50 rounded" />
              </div>

              {/* Left Knee */}
              <div className="mx-auto w-7 h-7 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 border border-purple-600/30 shadow-lg my-1"
                   style={{ transform: "translateZ(25px)", boxShadow: "0 0 15px rgba(147, 51, 234, 0.4)" }} />

              {/* Left Shin */}
              <div className="w-9 h-28 rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-700/30 mx-auto"
                   style={{ transform: "translateZ(23px)" }}>
                <div className="absolute top-8 inset-x-2 h-0.5 bg-gray-700/50 rounded" />
                <div className="absolute top-16 inset-x-2 h-0.5 bg-gray-700/50 rounded" />
              </div>

              {/* Left Foot */}
              <div className="w-12 h-6 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800 rounded-b-xl border border-purple-600/30 mx-auto shadow-lg"
                   style={{ transform: "translateZ(23px) translateY(2px)", boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}>
                <div className="absolute inset-1 rounded-b-lg bg-gradient-to-b from-purple-600/20 to-transparent" />
              </div>
            </div>

            {/* Right Leg */}
            <div className="relative" style={{ transformStyle: "preserve-3d" }}>
              {/* Right Hip Joint */}
              <div className="mx-auto w-8 h-8 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 border border-purple-600/30 shadow-lg mb-1"
                   style={{ transform: "translateZ(28px)", boxShadow: "0 0 15px rgba(147, 51, 234, 0.4)" }} />
              
              {/* Right Thigh */}
              <div className="w-10 h-28 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700/30 mx-auto"
                   style={{ transform: "translateZ(25px)" }}>
                <div className="absolute top-10 inset-x-2 h-1 bg-gray-700/50 rounded" />
                <div className="absolute top-20 inset-x-2 h-1 bg-gray-700/50 rounded" />
              </div>

              {/* Right Knee */}
              <div className="mx-auto w-7 h-7 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 border border-purple-600/30 shadow-lg my-1"
                   style={{ transform: "translateZ(25px)", boxShadow: "0 0 15px rgba(147, 51, 234, 0.4)" }} />

              {/* Right Shin */}
              <div className="w-9 h-28 rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-700/30 mx-auto"
                   style={{ transform: "translateZ(23px)" }}>
                <div className="absolute top-8 inset-x-2 h-0.5 bg-gray-700/50 rounded" />
                <div className="absolute top-16 inset-x-2 h-0.5 bg-gray-700/50 rounded" />
              </div>

              {/* Right Foot */}
              <div className="w-12 h-6 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800 rounded-b-xl border border-purple-600/30 mx-auto shadow-lg"
                   style={{ transform: "translateZ(23px) translateY(2px)", boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}>
                <div className="absolute inset-1 rounded-b-lg bg-gradient-to-b from-purple-600/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* Base Shadow - Only visible shadow effect */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-12 rounded-full bg-black/60 blur-2xl" 
               style={{ transform: "translateZ(0px)" }} />
        </div>
      </motion.div>
    </div>
  );
}
