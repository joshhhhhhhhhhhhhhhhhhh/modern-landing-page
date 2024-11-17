"use client"
  
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const words = [
  "AI Assistant",
  "Code Generator",
  "Content Creator",
  "Image Maker",
  "Chat Agent",
  "Smart Helper"
];

const Header = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentWord(words[index]);
  }, [index]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-500 to-purple-500">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-64 top-0 h-96 w-96 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-3xl" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-gradient-to-l from-fuchsia-400 to-violet-500 opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-32 h-96 w-96 rounded-full bg-gradient-to-t from-cyan-400 to-blue-500 opacity-20 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Glass effect badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 rounded-full bg-white/10 px-6 py-2 backdrop-blur-md"
        >
          <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            Next-Gen AI Platform
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
        >
          Your Advanced
        </motion.h1>

        {/* Animated word */}
        <motion.div
          key={currentWord}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          className="h-24 text-5xl font-bold md:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
            {currentWord}
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 mt-6 max-w-md text-lg text-white/80"
        >
          Experience the future of AI-powered solutions designed for modern professionals
        </motion.p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative mb-4 overflow-hidden rounded-full bg-white px-8 py-4 font-medium text-violet-600 shadow-lg transition-all hover:shadow-xl"
        >
          <span className="relative z-10 flex items-center gap-2">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 19L20 12L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Get Started Free
          </span>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-10" />
        </motion.button>

        {/* Secondary link */}
        <motion.a
          href="#features"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/70 hover:text-white"
        >
          Explore Features
        </motion.a>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-24 w-full fill-white/5">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
