"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import ElegantShape from "./elegantShape";
import { Dancing_Script } from "next/font/google";
import { PinContainer } from "./ui/3d-pin";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dancing-script",
});

const Connect = ({ id="connect" }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 60,
        damping: 14,
      },
    }),
  };

  return (
    <motion.section
      id={id}
      ref={sectionRef}
      style={{ opacity, scale }}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] text-white py-24 px-6"
    >
      {/* 🌈 Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e99b63]/[0.08] via-[#1a1a1a] to-[#e99b63]/[0.15] blur-3xl pointer-events-none" />

      {/* ✨ Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={500}
          height={140}
          rotate={12}
          gradient="from-[#e99b63]/80 to-[#ffcc8f]/60"
          className="left-[-10%] md:left-[-5%] top-[25%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={140}
          rotate={-15}
          gradient="from-[#ffb87a]/60 to-[#e99b63]/50"
          className="right-[-10%] md:right-[-5%] bottom-[25%]"
        />
      </div>

      {/* 🏷️ Badge */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 py-2 bg-white/5 border border-[#e99b63]/30 rounded-full mb-8 backdrop-blur-md"
      >
       <span className="text-[12px] tracking-[0.4em] font-bold text-[#e99b63] uppercase">
            Stay connected
          </span>
      </motion.div>

      {/* ✨ Heading */}
      <motion.h2
        custom={1}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className={cn(
          "text-8xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#e99b63] via-[#ffcc8f] to-[#e99b63]/80 z-10 text-center",
          dancingScript.className
        )}
      >
        Let’s Connect
      </motion.h2>

      {/* ✨ Paragraph */}
      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="text-base sm:text-lg md:text-xl text-white/50 leading-relaxed font-light tracking-wide max-w-xl text-center mb-16 z-10"
      >
        We’d love to hear from you! Whether it’s a project idea, a tech
        collaboration, or just a friendly hello — connect with{" "}
        <span className="text-[#e99b63] font-semibold">Tech Samarooh 2026</span>{" "}
        and let’s build the future together.
      </motion.p>

      {/* 🪩 Centered 3D Pin Element (Fixed Position + Visible Glow) */}
      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-[80] flex items-center justify-center mt-6 md:mt-10"
      >
        <PinContainer title="Tech Samarooh 2026" href="https://trinitydwarka.edu">
          <div className="flex flex-col items-center justify-center w-[12rem] h-[12rem] md:w-[14rem] md:h-[14rem] rounded-2xl bg-gradient-to-tr from-[#ffcc8f]/20 to-[#e99b63]/15 border border-[#ffcc8f]/40 shadow-[0_0_60px_#e99b63aa] backdrop-blur-xl">
            <motion.div
              animate={{
                rotateX: [0, 10, -10, 0],
                rotateY: [0, -10, 10, 0],
                y: [0, -8, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-[#ffcc8f] to-[#e99b63] shadow-[0_0_40px_#e99b63aa] flex items-center justify-center"
            >
              
            </motion.div>
          </div>
        </PinContainer>
      </motion.div>

      {/* 🌘 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/70 pointer-events-none" />
    </motion.section>
  );
};

export default Connect;
