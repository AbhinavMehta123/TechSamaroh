"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    Target,
    Zap,
    Instagram,
    Linkedin,
    Calendar,
    ChevronRight,
    Users,
    Camera,
} from "lucide-react";
import ElegantShape from "@/components/elegantShape";
import { Dancing_Script } from "next/font/google";

// ✅ Font import at module scope
const dancingScript = Dancing_Script({
    weight: ["400"],
    subsets: ["latin"],
});

const ClubPage = () => {
    const router = useRouter();

    // 🎯 Full Club Data
    const club = {
        id: 1,
        name: "Tech Samaroh",
        tagline: "Innovate • Create • Transform",
        logo: "/WebAssets/tech-innovators-logo.png",
        coverImage: "/WebAssets/cover-tech-innovators.jpg",
        established: "2018",
        members: "120+",
        description:
            "Tech Innovators Club is a student-led organization dedicated to fostering innovation and technological advancement among students. We provide a platform for tech enthusiasts to collaborate, learn, and create cutting-edge solutions to real-world problems.",
        mission:
            "To cultivate a culture of innovation and technological excellence by providing students with resources, mentorship, and opportunities to develop their skills and bring their ideas to life.",
        vision:
            "To be the leading student tech community that empowers the next generation of innovators and contributes to technological advancement in society.",
        activities: [
            "Weekly coding workshops and hackathons",
            "Tech talks by industry professionals",
            "Project development and mentorship programs",
            "Networking events with tech companies",
            "Annual tech exhibition showcasing student projects",
        ],
        achievements: [
            {
                title: "National Hackathon Champions 2024",
                description:
                    "First place at the National College Hackathon, competing against 50+ teams from across the country.",
            },
            {
                title: "Best Student Innovation Award",
                description:
                    "Recognized by the Ministry of Education for developing an AI-based solution for rural healthcare.",
            },
            {
                title: "Google Developer Student Club Partner",
                description:
                    "Official partnership with Google Developer Student Clubs to host workshops and events.",
            },
        ],
        team: [
            {
                name: "Aryan Sharma",
                role: "President",
                image: "/WebAssets/team/aryan-sharma.jpg",
            },
            {
                name: "Priya Patel",
                role: "Vice President",
                image: "/WebAssets/team/priya-patel.jpg",
            },
            {
                name: "Rahul Verma",
                role: "Technical Lead",
                image: "/WebAssets/team/rahul-verma.jpg",
            },
            {
                name: "Neha Singh",
                role: "Event Coordinator",
                image: "/WebAssets/team/neha-singh.jpg",
            },
        ],
        gallery: [
            { src: "/WebAssets/gallery/hackathon-2024.jpg", alt: "Hackathon 2024" },
            { src: "/WebAssets/gallery/workshop.jpg", alt: "Workshop Session" },
            { src: "/WebAssets/gallery/exhibition.jpg", alt: "Project Exhibition" },
            { src: "/WebAssets/gallery/team-building.jpg", alt: "Team Building" },
            { src: "/WebAssets/gallery/award-ceremony.jpg", alt: "Award Ceremony" },
            { src: "/WebAssets/gallery/tech-talk.jpg", alt: "Tech Talk" },
        ],
        upcomingEvents: [
            {
                id: "web-dev-workshop",
                name: "Web Development Workshop",
                date: "March 20, 2025",
                description:
                    "Learn the latest web development technologies and frameworks in this hands-on workshop.",
            },
            {
                id: "hack-a-thon-2026",
                name: "AI Hackathon",
                date: "April 5–6, 2025",
                description:
                    "A 24-hour hackathon focused on developing AI solutions for everyday problems.",
            },
            {
                id: "tech-talk-series",
                name: "Tech Talk: Blockchain Revolution",
                date: "April 15, 2025",
                description:
                    "Industry experts discuss the future of blockchain technology and its applications.",
            },
        ],
    };

    // Reusable Section Layout
    const ClubSection = ({ title, children, icon }) => (
        <div className="mb-16 text-left relative z-10">
            <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mr-4 text-white">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
            </div>
            <div className="pl-0 md:pl-14">{children}</div>
        </div>
    );

    return (
        <div className="relative w-full text-white font-sans min-h-screen pb-20 overflow-hidden bg-[#0a0a0a]">
            {/* ✨ Themed Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={10}
                    gradient="from-[#e99b63]/[0.8] to-[#ffcc8f]/[0.6]"
                    className="left-[-15%] md:left-[-8%] top-[20%]"
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

            {/* 🔙 Back Button (Lowered) */}
            <div className="relative container mx-auto px-6 py-8 z-10">
                <button
                    onClick={() => router.back()}
                    className="flex items-center text-[10px] font-bold text-gray-100 hover:text-[#e99b63] transition-colors tracking-widest mt-20 cursor-pointer"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 " />
                    BACK TO CLUBS
                </button>
            </div>

            {/* 🏆 Hero Section */}
            <div className="relative container mx-auto px-6 mb-20 z-10 mt-20">
                <div className="w-full bg-[#0a0a0a]/80 border border-white/5 rounded-[40px] p-8 md:p-12 backdrop-blur-xl">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <img
                            src={club.logo}
                            className="w-32 h-32 rounded-3xl bg-[#111] border border-white/10 flex items-center justify-center text-3xl font-black italic tracking-tighter"
                            alt={club.name}
                        />
                        <div className="text-center md:text-left">
                            <span className="text-[10px] font-bold tracking-[0.4em] text-[#e99b63] uppercase mb-2 block">
                                {club.tagline}
                            </span>

                                <h1
                                    className={`text-4xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#e99b63] via-[#ffcc8f] to-[#e99b63]/80 ${dancingScript.className}`}
                                >
                                    {club.name}
                                </h1>

                        </div>
                    </div>
                </div>
            </div>

            {/* 📄 Main Content */}
            <div className="relative container mx-auto px-6 max-w-7xl z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* LEFT SECTION */}
                    <div className="lg:col-span-8">
                        <ClubSection title="The Mission" icon={<Target className="w-5 h-5" />}>
                            <h4 className="text-xl text-gray-100 italic font-light mb-6">
                                “{club.mission}”
                            </h4>
                            <p className="text-gray-100 leading-relaxed text-lg max-w-2xl">
                                {club.description}
                            </p>
                        </ClubSection>

                        <ClubSection title="What We Do" icon={<Zap className="w-5 h-5" />}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {club.activities.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 p-6 rounded-[24px] bg-[#0a0a0a] border border-white/5"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#e99b63]" />
                                        <span className="text-sm text-gray-100 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </ClubSection>

                        <ClubSection title="Gallery" icon={<Camera className="w-5 h-5" />}>
                            <div className="grid grid-cols-2 gap-4">
                                {club.gallery.map((img, i) => (
                                    <div
                                        key={i}
                                        className="relative aspect-video rounded-[24px] overflow-hidden border border-white/5 group"
                                    >
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                        />
                                    </div>
                                ))}
                            </div>
                        </ClubSection>

                        <ClubSection title="Our Team" icon={<Users className="w-5 h-5" />}>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {club.team.map((member, i) => (
                                    <div key={i} className="group flex flex-col items-center md:items-start">
                                        <div className="relative w-full aspect-square rounded-[32px] overflow-hidden bg-[#0a0a0a] border border-white/5 mb-4">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                        <h4 className="text-white font-bold text-sm tracking-wide">{member.name}</h4>
                                        <p className="text-[10px] text-[#e99b63] font-bold uppercase tracking-[0.2em] mt-1 italic">
                                            {member.role}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </ClubSection>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-[45px] p-10 flex flex-col items-center shadow-2xl">
                            <h3 className="text-[10px] font-bold text-gray-500 tracking-[0.5em] uppercase mb-10">
                                Upcoming Events
                            </h3>
                            <div className="w-full space-y-10">
                                {club.upcomingEvents.map((event, i) => (
                                    <div key={i} className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <Calendar className="w-4 h-4 text-[#e99b63] shrink-0 mt-1" />
                                            <div>
                                                <p className="text-[13px] text-gray-300 leading-tight font-bold">
                                                    {event.name}
                                                </p>
                                                <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">
                                                    {event.date}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => router.push(`/events/${event.id}`)}
                                            className="cursor-pointer w-full py-4 rounded-xl bg-[#e99b63] text-black font-black text-[10px] tracking-[0.2em] hover:bg-white transition-all shadow-lg shadow-[#e99b63]/10transition-all flex items-center justify-center gap-2"
                                        >
                                            View Event Detail <ChevronRight className="w-3 h-3" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SOCIALS */}
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-[30px] p-6 flex items-center justify-between">
                            <div
                                className="flex-1 flex flex-col items-center group cursor-pointer"
                                onClick={() => window.open("https://instagram.com", "_blank")}
                            >
                                <Instagram className="w-5 h-5 text-gray-600 group-hover:text-[#e99b63] transition-colors mb-2" />
                                <span className="text-[8px] font-bold text-gray-700 uppercase tracking-widest">
                                    Insta
                                </span>
                            </div>
                            <div className="w-[1px] h-8 bg-white/5" />
                            <div
                                className="flex-1 flex flex-col items-center group cursor-pointer"
                                onClick={() => window.open("https://linkedin.com", "_blank")}
                            >
                                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-[#e99b63] transition-colors mb-2" />
                                <span className="text-[8px] font-bold text-gray-700 uppercase tracking-widest">
                                    Linked
                                </span>
                            </div>
                        </div>

                        <p className="text-center text-[8px] text-gray-700 font-bold uppercase tracking-[0.3em] pt-4">
                            Established {club.established} • Guided by Excellence
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubPage;
