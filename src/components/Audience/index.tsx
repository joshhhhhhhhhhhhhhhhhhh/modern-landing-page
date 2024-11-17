"use client"
  
import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  { title: "Digital Agencies", color: "#E6990B", icon: "🏢" },
  { title: "Designers", color: "#A431C7", icon: "🎨" },
  { title: "Entrepreneurs", color: "#42C9B2", icon: "💡" },
  { title: "Developers", color: "#348FDA", icon: "👩‍💻" },
  { title: "Students", color: "#41B668", icon: "📚" },
  { title: "Startups", color: "#DA4D8F", icon: "🚀" }
];

const Audience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-64 top-0 h-96 w-96 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-gradient-to-l from-blue-400/10 to-cyan-400/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            We recommend AI Platform for
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl">
            and many others.
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

const Card = ({ title, color, icon }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative"
    >
      <div
        className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:blur-xl"
        style={{ backgroundColor: `${color}15` }}
      />
      
      <div
        className="relative flex items-center gap-4 rounded-2xl p-6 transition-all duration-300"
        style={{ 
          backgroundColor: `${color}10`,
          boxShadow: `0 0 0 1px ${color}15`
        }}
      >
        {/* Animated dot */}
        <div className="relative flex h-12 w-12 items-center justify-center">
          <div
            className="absolute inset-0 animate-pulse rounded-full opacity-25"
            style={{ backgroundColor: color }}
          />
          <div
            className="absolute inset-2 rounded-full"
            style={{ backgroundColor: color }}
          />
          <span className="relative text-xl">{icon}</span>
        </div>

        {/* Title with gradient */}
        <div className="flex flex-col">
          <h3
            className="text-lg font-semibold md:text-xl"
            style={{ color }}
          >
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Audience;
