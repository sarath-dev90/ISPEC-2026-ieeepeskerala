import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, FileText, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import backgroundImage from '../assets/image.jpeg';
import mountainImage from '../assets/mountain.png';

const Hero = () => {
  const backgrounds = [backgroundImage, mountainImage];
  const [currentBg, setCurrentBg] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  const nextBg = () => setCurrentBg((prev) => (prev + 1) % backgrounds.length);
  const prevBg = () => setCurrentBg((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextBg();
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [backgrounds.length]);

  const conferenceInfo = {
    title: 'iSPEC 2026',
    subtitle: 'IEEE PES Kerala Chapter',
    theme: 'Integrated Pathways in Sustainable Power and Energy for Carbon Neutrality',
    date: 'Dec 4 – 6, 2026',
    venue: 'Thiruvananthapuram, Kerala'
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* ── BACKGROUND LAYER (SLIDER) ── */}
      <div className="absolute inset-0 z-0">
        {/* Static image behind slider to prevent black flash during initial load */}
        <img src={backgrounds[0]} className="absolute inset-0 w-full h-full object-cover" alt="Background Placeholder" />
        <AnimatePresence initial={false}>
          <motion.img
            key={currentBg}
            src={backgrounds[currentBg]}
            initial={{ opacity: isFirstRender ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            alt="Conference Background bg-slate-950/70"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Deep Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-slate-950/70 z-10"></div>
      </div>
        
      {/* ── Slider Navigation Buttons (Top Level) ── */}
      <button 
        onClick={prevBg}
        className="hero-slider-btn z-50 cursor-pointer"
        style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)' }}
        aria-label="Previous background"
      >
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </button>
      
      <button 
        onClick={nextBg}
        className="hero-slider-btn z-50 cursor-pointer"
        style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)' }}
        aria-label="Next background"
      >
        <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </button>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Visionary Branding */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="hero-label text-emerald-500 mb-4 block">{conferenceInfo.subtitle}</span>
              <motion.h1
                className="text-white text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none tracking-tighter"
                animate={{
                  scale: [1, 1.02, 1],
                  filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                iSPEC <span className="text-emerald-500">2026</span>
              </motion.h1>
              <p className="text-emerald-50/70 text-xl md:text-2xl lg:text-3xl font-medium max-w-2xl leading-tight">
                {conferenceInfo.theme}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Structured Information Box (Technical Modernism) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-900/40 backdrop-blur-md border-l-8 border-emerald-500 p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Event Details Section */}
              <div className="space-y-8">
                <div>
                  <span className="hero-label">Conference Dates</span>
                  <div className="flex items-center gap-4 mt-2">
                    <Calendar className="w-8 h-8 text-emerald-500 shrink-0" />
                    <span className="text-white text-2xl md:text-3xl font-bold">{conferenceInfo.date}</span>
                  </div>
                </div>

                <div className="hero-divider opacity-20"></div>

                <div>
                  <span className="hero-label">Location / Venue</span>
                  <div className="flex items-center gap-4 mt-2">
                    <MapPin className="w-8 h-8 text-emerald-500 shrink-0" />
                    <span className="text-white text-2xl md:text-3xl font-bold leading-tight">{conferenceInfo.venue}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Group (No Hover Effects as requested) */}
              <div className="mt-12 flex flex-col gap-4">
                <Link to="/call-for-papers" className="w-full">
                  <button className="hero-btn-primary w-full flex items-center justify-center gap-3">
                    <FileText className="w-6 h-6" />
                    CALL FOR PAPERS
                  </button>
                </Link>

                <Link to="/about" className="w-full">
                  <button className="hero-btn-secondary w-full">
                    DISCOVER MORE
                  </button>
                </Link>
              </div>

              {/* Technical Branding Detail */}
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <FileText className="w-32 h-32 -mr-8 -mt-8 rotate-12" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Technical Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500/30"></div>
    </section>
  );
};

export default Hero;
