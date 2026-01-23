"use client";
import React, { useRef, useState } from "react";
import { color, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
import ElegantShape from "./elegantShape";
import { UserCheck, Clock, MapPin, Users, CalendarClock, Wallet  } from "lucide-react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dancing-script",
});

const Events = ({ id = "events" }) => {
  const containerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], [0, 1, 1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.98]);

  const eventList = [
    {
      id: "hack-a-thon-2026",
      name: "CODEX Build",
      desc: "",
      Eligibility: "",
      time: "",
      Venue: "",
      Participation: "",
      RegistrationDeadline: "",
      fees:"",
      img: "/WebAssets/WhatsApp Image 2026-01-18 at 5.51.57 PM.jpeg",
      color: "from-blue-600",
      link: "/events/hack-a-thon-2026",
    },
    {
      id: "Fire-bound",
      name: "Fire Bound",
      desc: "",
      Eligibility: "",
      time: "",
      Venue: "",
      Participation: "",
      RegistrationDeadline: "",
      fees:"",
      img: "",
      color: "from-red-600",
      link: "/events/hack-a-thon-2026",
    },
    {
      id: "cyber-tok",
      name: "Cyber TOK",
      desc: "Think Fast. Create Smart. Solve Sharp.",
      Eligibility: "Open to all departments (technical & non-technical)",
      time: "TBA",
      Venue: "ROOM NO. 402",
      Participation: "2 members per team",
      RegistrationDeadline: "TBA",
      fees:"₹80",
      img: "/WebAssets/Cyber Knight logo.jpg",
      color: "from-red-600",
      link: "/events/cyber-tok",

    },
    {
      id: "shadow-trace",
      name: "Shadow Trace",
      desc: "Uncover the system behind the data",
      Eligibility: "knowledge of technical analysis ",
      time: "12:00- 1:30",
      Venue: "305 at tips dwarka",
      Participation: "3 members in each team ",
      RegistrationDeadline: "TBA",
      fees:"₹150",
      img: "",
      color: "from-purple-600",
      link: "/events/shadow-trace",
    },
    {
      id: "the-scholar-stage",
      name: "The Scholar’s Stage",
      desc: "Presenting Perspectives, Defining Possibilities!",
      Eligibility: "Open to all departments",
      time: "TBA",
      Venue: "Conference Room ",
      Participation: "Maximum 2 members",
      RegistrationDeadline: "TBA",
      fees:"₹100",
      img: "",
      color: "from-pink-600",
      link: "/events/the-scholar-stage",
    },
    {
      id: "pich-perfect",
      name: "Pich Perfect",
      desc: "Innovate. Pitch. Inspire.",
      Eligibility: "Open to all departments",
      time: "TBA",
      Venue: "Room 204 (Tentative)",
      Participation: "1 – 2 members",
      RegistrationDeadline: "TBA",
      fees:"TBA",
      img: "",
      color: "from-cyan-600",
      link: "/events/pich-perfect",
    },
    {
      id: "brand-bot",
      name: "Brand Bot",
      desc: "Prompt the Future. Pitch the Vision.",
      Eligibility: "Basic knowledge of AI tools",
      time: "TBA",
      Venue: " Room 407",
      Participation: " Minimum 2 and Maximum 4 participants",
      RegistrationDeadline: "18 February 2026",
      fees:"TBA",
      img: "/WebAssets/researchclub.jpg",
      color: "from-cyan-600",
      link: "/events/brand-bot",
    },
    {
      id: "pixcel-pulse",
      name: "Pixcel Pulse",
      desc: "Freeze the Frame. Master the Edit.",
      Eligibility: "Open to all registered Tech Samaaroh participants",
      time: "60 Minutes",
      Venue: "Room 407 (Campus Photo Hunt Area)",
      Participation: "Team Event (Team of 2)",
      RegistrationDeadline: "TBA",
      fees:"₹60 per team",
      img: "",
      color: "from-cyan-600",
      link: "/events/pixcel-pulse",
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
            Tech Samaaroh 2026
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
          Events
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
            Tech Samarooh’s exclusive events
          </span>{" "}
          — Discover the exciting lineup of events at Tech Samaaroh 2026. From coding competitions to workshops, there's something for everyone!
        </motion.p>
      </div>

      {/* ✨ Clubs Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        {eventList.map((club, index) => (
          <motion.div
            key={club.id}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index * 0.3}
            onClick={() => setActiveCard(activeCard === club.id ? null : club.id)} // 👈 added toggle
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
                <p className="flex items-center gap-2 text-gray-400 text-base leading-relaxed group-hover:text-gray-200 transition-colors mr-12">
                  <UserCheck className="w-4 h-4 text-gray-400 shrink-0" />
                  {club.Eligibility}
                </p>
                 <p className="flex items-center gap-2 text-gray-400 text-base leading-relaxed group-hover:text-gray-200 transition-colors mr-12">
                  <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                  {club.time}
                </p>
                   <p className="flex items-center gap-2 text-gray-400 text-base leading-relaxed group-hover:text-gray-200 transition-colors mr-12">
                  <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                  {club.Venue}
                </p>
                <p className="flex items-center gap-2 text-gray-400 text-base leading-relaxed group-hover:text-gray-200 transition-colors mr-12">
                  <Users className="w-4 h-4 text-gray-400 shrink-0" />
                  {club.Participation}
                </p>
                <p className="flex items-center gap-2 text-gray-400 text-base leading-relaxed group-hover:text-gray-200 transition-colors mr-12">
                  <CalendarClock className="w-4 h-4 text-gray-400 shrink-0" />
                  {club.RegistrationDeadline}
                </p>
                <p className="flex items-center gap-2 text-gray-400 text-base leading-relaxed group-hover:text-gray-200 transition-colors mr-12">
                  <Wallet className="w-4 h-4 text-gray-400 shrink-0" />
                  {club.fees}
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
                  VIEW EVENT DETAILS
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

export default Events;
