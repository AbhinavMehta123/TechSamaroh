"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import "boxicons/css/boxicons.min.css";
import ElegantShape from "./elegantShape";

const Footer = () => {
  const navItems = ["HOME", "EVENTS", "CLUBS", "CONNECT"];
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (id) => {
    const sectionId = id.toLowerCase();

    // 🧠 If user clicks "HOME"
    if (sectionId === "home") {
      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 300);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // 🔁 For other sections
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const yOffset = -100;
          const y =
            section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 500);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -100;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-10 px-6 border-t border-white/5 overflow-hidden">
      {/* ✨ Gradient & Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={15}
          gradient="from-[#e99b63]/70 to-[#ffcc8f]/40"
          className="left-[-10%] top-[10%]"
        />
        <ElegantShape
          delay={0.5}
          width={400}
          height={120}
          rotate={-15}
          gradient="from-[#ffb87a]/60 to-[#e99b63]/40"
          className="right-[-5%] bottom-[10%]"
        />
      </div>

      {/* Top Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#e99b63]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1 */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/WebAssets/logo.png"
              className="w-10 h-10 bg-[#e99b63] rounded-lg flex items-center justify-center font-bold text-black text-xl"
              alt="logo"
            />
            <span className="text-2xl font-bold tracking-tighter uppercase">
              Tech Samaroh<span className="text-[#e99b63]"> 2026</span>
            </span>
          </div>
          <p className="text-gray-100 text-sm leading-relaxed mb-6 text-left">
            Tech Samaaroh 2026 – Trinity Dwarka's premier tech fest, showcasing innovation, competitions, and creativity in the digital era!
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-[#e99b63] hover:text-black transition-all duration-300"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-[#e99b63]">Navigation</h4>
          <ul className="space-y-4 text-sm text-gray-100">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavigation(item)}
                  className="hover:text-[#e99b63] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <i className="bx bx-chevron-right text-[#e99b63]"></i> {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Event Details */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-[#e99b63]">
            Event Timeline
          </h4>
          <div className="space-y-5">
            <div className="flex items-start gap-4 text-left hover:text-[#e99b63] transition-all duration-300">
              <i className="bx bx-calendar text-2xl text-[#e99b63]"></i>
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-wider">
                  February 20, 2026
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Trinity Dwarka Main Campus
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 text-left hover:text-[#e99b63] transition-all duration-300">
              <i className="bx bx-map-pin text-2xl text-[#e99b63]"></i>
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-wider">
                  Trinty Dwarka
                </p>
                <p className="text-xs text-gray-100 mt-1">
                Trinity Dwarka, Sector-9, New Delhi, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-[#e99b63]">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-100">
            <li className="flex items-center gap-3 hover:text-[#e99b63] transition-colors duration-300">
              <i className="bx bx-envelope text-lg text-[#e99b63]"></i>
              <a href="mailto:tips@tips.edu.in">tips@tips.edu.in</a>
            </li>
            <li className="flex items-center gap-3 hover:text-[#e99b63] transition-colors duration-300">
              <i className="bx bx-phone text-lg text-[#e99b63]"></i>
              <a href="tel:+919315911715 +919315911714">9315911715 , 9315911714</a>
            </li>
            <li className="flex items-start gap-3 text-left hover:text-[#e99b63] transition-colors duration-300">
              <i className="bx bx-current-location text-lg text-[#e99b63]"></i>
              <span>
                Trinity Dwarka, Sector-9, New Delhi, India
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Credits */}
     {/* Credits */}
<div className="relative z-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
  <p className="text-[12px] md:text-[20px] lg:text-[20px] text-white uppercase tracking-widest">
    © {new Date().getFullYear()} Tech samarooh. All Rights Reserved.
  </p>

  <div className="flex items-center gap-4 group cursor-default">
    <div className="text-right">
      <p className="text-[12px] text-white uppercase tracking-tighter">
        Developed by
      </p>
      <p className="text-sm font-black group-hover:text-[#e99b63] transition-colors">
        ALFA CODING CLUB
      </p>
    </div>
    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-all duration-500 group-hover:border-[#e99b63]/50 group-hover:shadow-[0_0_15px_rgba(233,155,99,0.2)]">
      <img
        src="/WebAssets/WhatsApp Image 2025-12-28 at 9.03.33 PM.jpeg"
        className="text-[#e99b63] font-black text-xl rounded-full"
        alt="logo"
      />
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
