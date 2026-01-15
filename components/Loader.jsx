"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Elegant Shape component (simplified version for the loader)
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -50,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 1.8,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

// Pulse Circle component
function PulseCircle({ delay = 0, scale = 1, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.5, 0],
        scale: [0, scale, scale * 1.2],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute rounded-full bg-gradient-to-r from-indigo-500/30 to-rose-500/30 backdrop-blur-sm",
        className
      )}
    />
  );
}

export default function Loader() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#030303] z-50">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.2}
          width={500}
          height={120}
          rotate={8}
          gradient="from-indigo-500/[0.12]"
          className="left-[-5%] top-[10%]"
        />

        <ElegantShape
          delay={0.4}
          width={400}
          height={100}
          rotate={-12}
          gradient="from-rose-500/[0.12]"
          className="right-[-2%] top-[60%]"
        />

        <ElegantShape
          delay={0.3}
          width={250}
          height={70}
          rotate={-5}
          gradient="from-amber-500/[0.12]"
          className="left-[10%] bottom-[15%]"
        />

        <ElegantShape
          delay={0.5}
          width={180}
          height={50}
          rotate={15}
          gradient="from-cyan-500/[0.12]"
          className="right-[20%] top-[20%]"
        />
      </div>

      {/* Central loader */}
      <div className="relative z-10">
        {/* Pulsing circles */}
        <PulseCircle delay={0} scale={3} className="w-32 h-32" />
        <PulseCircle delay={0.5} scale={2.5} className="w-32 h-32" />
        <PulseCircle delay={1} scale={2} className="w-32 h-32" />

        {/* Spinning gradient ring */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-full h-full rounded-full border-t-2 border-l-2 border-r-2 border-transparent border-t-indigo-500 border-r-rose-500 border-l-indigo-300"
          />

          <motion.div
            animate={{ rotate: -180 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-24 h-24 rounded-full border-b-2 border-l-2 border-r-2 border-transparent border-b-rose-500 border-l-rose-300 border-r-indigo-400"
          />

          {/* Central glowing dot */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-400 to-rose-400 shadow-[0_0_15px_rgba(167,139,250,0.5)]"
          />
        </div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 text-center"
        >
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
            Loading
          </h2>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-2 flex justify-center space-x-1"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
              className="w-2 h-2 rounded-full bg-indigo-400"
            />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
              className="w-2 h-2 rounded-full bg-indigo-300"
            />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
              className="w-2 h-2 rounded-full bg-rose-300"
            />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.6 }}
              className="w-2 h-2 rounded-full bg-rose-400"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}