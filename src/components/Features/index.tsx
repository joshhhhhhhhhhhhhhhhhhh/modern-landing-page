"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
  LuBot,
  LuGauge,
  LuCreditCard,
  LuLanguages,
  LuLayoutTemplate,
  LuLifeBuoy,
  LuGithub
} from "react-icons/lu";
import { Flex, Grid, Heading, Icon, Text, Link } from "@chakra-ui/react";

const Features = () => {
  return (
    <Flex
      id="features"
      direction="column"
      justify="center"
      align="center"
      py={24}
      px={4}
      maxW="7xl"
      mx="auto"
      position="relative"
      overflow="hidden"
    >
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-48 top-0 h-96 w-96 rounded-full bg-gradient-to-r from-purple-300 to-blue-300 mix-blend-multiply blur-3xl" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-gradient-to-l from-pink-300 to-indigo-300 mix-blend-multiply blur-3xl" />
      </div>

      {/* Header with GitHub Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link
          href="https://github.com/duggal1"
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ textDecoration: 'none' }}
        >
          <Flex
            align="center"
            gap={2}
            mb={6}
            className="group"
            justify="center"
          >
            <Icon
              as={LuGithub}
              className="transition-transform duration-300 group-hover:rotate-12"
              fontSize="xl"
            />
            <Text
              fontSize="sm"
              className="transition-all duration-300 group-hover:tracking-wider"
            >
              Star us on GitHub
            </Text>
          </Flex>
        </Link>
        
        <Heading
          fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
          bgGradient="linear(to-r, gray.700, gray.900)"
          bgClip="text"
          className="tracking-tight"
        >
          Next-Gen AI Features
        </Heading>
      </motion.div>

      {/* Features Grid */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)"
        }}
        gap={10}
        mt={16}
      >
        {Cards.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </Grid>
    </Flex>
  );
};

const Card = ({ icon, title, text, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Flex
        maxW="400px"
        p={6}
        rounded="xl"
        className="group"
        position="relative"
        transition="all 0.3s ease"
        _hover={{ transform: "translateY(-8px)" }}
      >
        {/* Card Background */}
        <div className="absolute inset-0 rounded-xl bg-white/50 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:bg-white/80" />

        {/* Icon */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon
            as={icon}
            fontSize={48}
            mr={5}
            p={3}
            color="gray.700"
            rounded="lg"
            className="relative bg-gradient-to-br from-white to-gray-100 transition-all duration-300 group-hover:shadow-xl"
            strokeWidth={1.5}
          />
        </motion.div>

        {/* Content */}
        <Flex direction="column" gap={3} className="relative">
          <Heading
            fontSize="2xl"
            className="transition-all duration-300 group-hover:tracking-wide"
          >
            {title}
          </Heading>
          <Text
            fontSize="sm"
            color="gray.600"
            className="transition-all duration-300 group-hover:text-gray-800"
          >
            {text}
          </Text>
        </Flex>
      </Flex>
    </motion.div>
  );
};

const Cards = [
  {
    icon: LuBot,
    title: "AI Powerhouse",
    text: "Transform your workflow with cutting-edge AI that adapts and learns, delivering intelligent solutions tailored to your needs.",
  },
  {
    icon: LuGauge,
    title: "Smart Analytics",
    text: "Dive deep into real-time insights with our intuitive analytics dashboard, turning complex data into actionable strategies.",
  },
  {
    icon: LuCreditCard,
    title: "Fortress Security",
    text: "Bank-grade encryption and advanced security protocols ensure your transactions and data remain completely protected.",
  },
  {
    icon: LuLanguages,
    title: "Global Reach",
    text: "Break language barriers with AI-powered translation and localization, connecting you with audiences worldwide.",
  },
  {
    icon: LuLayoutTemplate,
    title: "Pro Templates",
    text: "Launch faster with our collection of premium, AI-optimized templates designed for maximum impact and conversion.",
  },
  {
    icon: LuLifeBuoy,
    title: "24/7 Care",
    text: "Access round-the-clock expert support powered by AI and human specialists, ensuring you're never left waiting.",
  },
];

export default Features;
