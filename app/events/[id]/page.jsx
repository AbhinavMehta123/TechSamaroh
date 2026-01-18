"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Users,
  Trophy,
  CheckCircle,
  AlertCircle,
  Phone,
  Calendar,
} from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import ElegantShape from "@/components/elegantShape";

// 🧩 Event data
const eventData = {
  "hack-a-thon-2026": {
    id: "hack-a-thon-2026",
    name: "HACK-A-THON 2026",
    tagline: "Code the future, one byte at a time.",
    timing: "March 15, 10:00 AM",
    location: "Main Tech Auditorium",
    teamSize: "2 - 4 Members",
    description: [
      "Join the ultimate coding challenge where innovation meets execution. You'll have 24 hours to build a solution to real-world problems.",
      "Work with mentors, network with peers, and compete for the top spot in the region's biggest tech fest.",
    ],
    prizes: [
      { rank: "1st Place", reward: "₹50,000 + Internship" },
      { rank: "2nd Place", reward: "₹25,000 + Tech Kit" },
    ],
    rules: [
      "Original code only (no pre-built projects).",
      "API usage is encouraged.",
      "Teams must present a working prototype.",
    ],
    organizers: [
      { name: "Alex Rivera", phone: "+91 98765 43210" },
      { name: "Sarah Chen", phone: "+91 87654 32109" },
    ],
    poster:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
  },
};

const EventSection = ({ title, children, icon }) => (
  <div className="mb-12 text-left relative z-10">
    <div className="flex items-center mb-6">
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mr-4 text-[#e99b63]">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-white tracking-widest uppercase">
        {title}
      </h3>
    </div>
    <div className="pl-0 md:pl-14">{children}</div>
  </div>
);

export default function EventPage() {
  const router = useRouter();
  const params = useParams();
  const eventId = params?.id?.toLowerCase?.();

  const [event, setEvent] = useState(undefined); // undefined = loading
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Fetch event safely
  useEffect(() => {
    if (!eventId) return;
    const data = eventData[eventId];
    if (data) setEvent(data);
    else setEvent(null);
  }, [eventId]);

  // ✅ Redirect only if definitely not found
  useEffect(() => {
    if (event === null) {
      router.replace("/events");
    }
  }, [event, router]);

  // ✅ Detect mobile
  useEffect(() => {
    const resizeHandler = () => setIsMobile(window.innerWidth < 1024);
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  if (event === undefined || event === null) return null;

  return (
    <div className="relative min-h-screen w-full text-white font-sans bg-[#0a0a0a] overflow-hidden">
      {/* ✨ Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={10}
          gradient="from-[#e99b63]/[0.8] to-[#ffcc8f]/[0.6]"
          className="left-[-15%] md:left-[-8%] top-[25%]"
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

      {/* 🔙 Back Button */}
      <div className="relative container mx-auto px-6 py-8 z-10">
        <button
          onClick={() => router.back()}
          className="flex items-center text-[10px] font-bold text-gray-500 hover:text-[#e99b63] transition-colors tracking-widest mt-20 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-2 " />
          BACK TO EVENTS
        </button>
      </div>

      {/* 🖼️ Hero Poster */}
      <div className="container mx-auto px-6 mb-12 relative z-10">
        <div className="relative w-full h-[300px] md:h-[500px] rounded-[40px] overflow-hidden border border-white/10 shadow-xl">
          <img
            src={event.poster}
            alt="Event Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-10 left-10 right-10">
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-2">
              {event.name}
            </h1>
            <p className="text-[#e99b63] text-lg md:text-xl font-light italic">
              {event.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* 📄 Main Content */}
      <div className="container mx-auto px-6 max-w-7xl pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">
            {/* Tags Row */}
            <div className="flex flex-wrap gap-3 mb-16">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase text-gray-400">
                <Calendar className="w-4 h-4 text-[#e99b63]" /> {event.timing}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase text-gray-400">
                <MapPin className="w-4 h-4 text-[#e99b63]" /> {event.location}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase text-gray-400">
                <Users className="w-4 h-4 text-[#e99b63]" /> {event.teamSize}
              </div>
            </div>

            {/* Description */}
            <EventSection
              title="Description"
              icon={<AlertCircle className="w-5 h-5" />}
            >
              <div className="text-gray-400 text-base md:text-lg leading-relaxed space-y-4 font-light">
                {event.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </EventSection>

            {/* Prizes */}
            <EventSection title="Prizes" icon={<Trophy className="w-5 h-5" />}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.prizes.map((prize, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-[24px] bg-white/[0.03] border border-white/5"
                  >
                    <h4 className="text-white font-bold text-lg uppercase">
                      {prize.rank}
                    </h4>
                    <p className="text-[#e99b63] text-sm font-medium mt-1">
                      {prize.reward}
                    </p>
                  </div>
                ))}
              </div>
            </EventSection>

            {/* Rules */}
            <EventSection
              title="Rules"
              icon={<CheckCircle className="w-5 h-5" />}
            >
              <ul className="space-y-4">
                {event.rules.map((rule, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-gray-400 text-sm md:text-base"
                  >
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#e99b63] shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </EventSection>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-12 space-y-6">
              {/* Entry Details (hidden on mobile) */}
              <div className="hidden md:block bg-white/[0.03] border border-white/10 rounded-[32px] p-8 shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-sm font-black mb-6 uppercase tracking-[0.2em] text-[#e99b63]">
                    Entry Details
                  </h3>
                  <div className="space-y-4 mb-8 text-[11px] uppercase tracking-widest font-bold">
                    <div className="flex justify-between pb-4 border-b border-white/5">
                      <span className="text-gray-500">Registration</span>
                      <span className="text-green-500">Live</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Access</span>
                      <span className="text-white">Public</span>
                    </div>
                  </div>
                  <button className="w-full py-4 rounded-xl bg-[#e99b63] text-black font-black text-[10px] tracking-[0.2em] hover:bg-white transition-all shadow-lg shadow-[#e99b63]/10">
                    JOIN EVENT NOW
                  </button>
                </div>
              </div>

              {/* Coordinators */}
              <div className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8">
                <h3 className="text-[10px] font-black text-[#e99b63] tracking-[0.3em] mb-6 uppercase flex items-center gap-2">
                  <Phone className="w-3 h-3" /> Coordinators
                </h3>
                <div className="space-y-6">
                  {event.organizers.map((org, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-white font-bold text-xs uppercase tracking-wider">
                        {org.name}
                      </span>
                      <span className="text-gray-600 text-[11px] mt-1">
                        {org.phone}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Poster below Coordinators */}
              <div className="mt-6 rounded-[24px] overflow-hidden border border-white/10 shadow-lg">
                <img
                  src={event.poster}
                  alt="Event Poster"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 📱 Mobile CTA */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 p-6 backdrop-blur-xl border-t border-white/10 z-50">
          <button className="w-full py-4 rounded-xl bg-[#e99b63] text-black font-black text-[10px] tracking-[0.2em]">
            REGISTER FOR EVENT
          </button>
        </div>
      )}
    </div>
  );
}
