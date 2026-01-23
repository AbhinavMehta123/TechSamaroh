"use client";
import React, { useRef, useState } from "react"; 
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
import ElegantShape from "./elegantShape";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dancing-script",
});

const Clubs = ({ id="clubs" }) => {
  const containerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null); 

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], [0, 1, 1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.98]);

  const clubList = [
    {
      id: 1,
      name: "ALFA Coding Club",
      desc: "ALFA Coding Club is the official coding club of the CS & IT Department at Trinity Institute of Professional Studies.It serves as a hub for tech enthusiasts,fostering a collaborative learning environement throught workshop, hackckathons,and coding competitions.The club empower students with hands on experience in emerging technologies.",
      img: "/WebAssets/WhatsApp Image 2025-12-28 at 9.03.33 PM.jpeg",
      color: "from-blue-600",
      link: "/clubs/alfa",
    },
    {
      id: 2,
      name: "Cyber Knight",
      desc: "Cyber Knight is the Networking and Security club of Trinty Institute of Professional Studies.Cyber knight focuses on spreading awareness on cyber security and gives opportunities to the students who are enthusiastic about cyber security world and wanted to explore about Ethical hacking,Security and Networking by taking various seminars and sessions.",
      img: "/WebAssets/Cyber Knight logo.jpg",
      color: "from-red-600",
      link: "/clubs/cyberknight",
    },
    {
      id: 3,
      name: "APEX",
      desc: "APEX- Designing Society of Trinity,Dwarka, is the college's creative arts hub, promoting innovation and collaboration in design, video production, photography and more.The Society offers students a platform to develop their skills through workshops, competitions, and hands-on projects across various creative fields.",
      img: "/WebAssets/WhatsApp Image 2026-01-15 at 2.14.11 PM.jpeg",
      color: "from-purple-600",
      link: "/clubs/apex",
    },
    {
      id: 4,
      name: "FactSmith",
      desc: "FactSmith is a student-driven research club under the CS & IT Department at Trinity Institute of Professional Studies our motto is to Innovating for the better future. The club is dedicated to fostering analytical thinking,innovation,and knowledge sharing among students.It provides a platform for aspiring researchers to explore emerging technologies, conduct research, and participate in the academic discussions.",
      img: "/WebAssets/bloggingclub.jpg",
      color: "from-pink-600",
      link: "/clubs/bloggingclub",
    },
    {
      id: 5,
      name: "Arclight Blogging Club",
      desc: "Arclight is the official blogging club of the CS & IT department at Trinity Institute of Professional Studies. The clubs encourages creativity, collaboration, and communication, serving as a platform for the students to share ideas, experiences, and showcase their literary talents in various forms technical writing to storytelling.",
      img: "/WebAssets/researchclub.jpg",
      color: "from-cyan-600",
      link: "/clubs/researchclub",
    },
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 60,
        damping: 14,
        mass: 0.8,
      },
    }),
  };

  return (
    <motion.section
      id={id}
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative py-24 px-6 text-center text-white overflow-hidden w-full min-h-screen"
    >
      {/* 🌈 Full-screen background */}
      <div className="absolute inset-0 w-screen h-full left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#e99b63]/[0.08] via-[#1a1a1a] to-[#e99b63]/[0.15] blur-3xl pointer-events-none" />

      {/* ✨ Glow Shapes (Left & Right only) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={500}
          height={140}
          rotate={10}
          gradient="from-[#e99b63]/[0.8] to-[#ffcc8f]/[0.6]"
          className="left-[-10%] md:left-[-5%] top-[25%]"
        />
        <ElegantShape
          delay={0.5}
          width={480}
          height={140}
          rotate={-15}
          gradient="from-[#ffb87a]/[0.6] to-[#e99b63]/[0.5]"
          className="right-[-10%] md:right-[-5%] bottom-[25%]"
        />
      </div>

      {/* ✨ Header */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center mb-20">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="px-6 py-2 bg-white/5 border border-[#e99b63]/30 rounded-full mb-8 backdrop-blur-md"
        >
          <span className="text-[12px] tracking-[0.4em] font-bold text-[#e99b63] uppercase">
            Join Our Community
          </span>
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className={cn(
            "text-8xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#e99b63] via-[#ffcc8f] to-[#e99b63]/80",
            dancingScript.className
          )}
        >
          Clubs
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-white/50 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4"
        >
          Join{" "}
          <span className="text-[#e99b63] font-semibold">
            Our exclusive Communities
          </span>{" "}
          — where innovation meets collaboration. Shape the future of
          technology with creativity, teamwork, and passion!
        </motion.p>
      </div>

      {/* ✨ Clubs Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        {clubList.map((club, index) => (
          <motion.div
            key={club.id}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index * 0.3}
            onClick={() => setActiveCard(activeCard === club.id ? null : club.id)} 
            className="group relative h-auto"
          >
            {/* Glow border */}
            <motion.div
              layout
              transition={{ layout: { duration: 0.8, type: "spring" } }}
              className="absolute -inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-[30px] transition-all duration-700 group-hover:from-[#e99b63] group-hover:to-transparent opacity-50 group-hover:opacity-100"
            />

            {/* Card */}
            <motion.div
              layout
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="relative h-full bg-[#0d0d0d]/95 rounded-[29px] p-8 border border-white/5 flex flex-col justify-start overflow-hidden"
            >
              {/* Glow */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br ${club.color} opacity-0 blur-[70px] group-hover:opacity-40 transition-all duration-700`}
              />

              {/* Image, Name, Description */}
              <div className="flex flex-col items-left text-left gap-4 mt-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="w-19 h-19 rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center group-hover:border-[#e99b63]/50 group-hover:bg-[#e99b63]/10 transition-all duration-500"
                >
                  <img
                    src={club.img}
                    alt={club.name}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </motion.div>

                <h3 className="text-2xl font-bold group-hover:text-white transition-colors">
                  {club.name}
                </h3>

                <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-200 transition-colors">
                  {club.desc}
                </p>
              </div>

              {/* Button */}
              <Link href={club.link}>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className={cn(
                    "cursor-pointer absolute bottom-0 left-0 w-full py-4 bg-[#e99b63] text-black font-bold text-xs tracking-widest transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    activeCard === club.id
                      ? "translate-y-0"
                      : "translate-y-full md:group-hover:translate-y-0" 
                  )}
                >
                  EXPLORE THE COMMUNITY
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-screen h-full bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/70 pointer-events-none" />
    </motion.section>
  );
};

export default Clubs;
