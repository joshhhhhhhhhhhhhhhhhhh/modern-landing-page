"use client"
  
import useBannerVisibility from "#/src/utils/BannerVisibility";
import { StargateColors } from "#/src/utils/Colors";
import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { LuX, LuGithub } from "react-icons/lu";
import { motion } from "framer-motion";

const Banner = () => {
  const [showBanner, setShowBanner] = useBannerVisibility("stargate-banner");

  if (!showBanner) return null;

  return (
    <motion.div
      initial={{ y: -45 }}
      animate={{ y: 0 }}
      exit={{ y: -45 }}
    >
     <Flex
  justify="center"
  h="60px" // Increased height for a more spacious appearance
  w="100%"
  align="center"
  position="relative"
  overflow="hidden"
  px={6} // Increased padding for a spacious look
  css={{
    background: 'linear-gradient(270deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
    backgroundSize: '200% 200%',
    animation: 'gradientShift 10s ease infinite',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Added box shadow for depth
    borderRadius: '10px', // Rounded corners for a softer look
    transition: 'transform 0.3s ease', // Transition for hover effect
    '&:hover': {
      transform: 'translateY(-2px)', // Slight lift on hover
    },
    '@keyframes gradientShift': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' }
    }
  }}
>
  

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute h-8 w-8 rounded-full bg-white/10"
              style={{
                left: `${30 * i}%`,
                animation: `float ${3 + i}s ease-in-out infinite`,
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            />
          ))}
        </div>

        {/* Content */}
        <Flex 
          align="center" 
          justify="center"
          position="relative"
          className="group"
        >
          <a 
            href="https://github.com/duggal1" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              textDecoration: 'none'
            }}
          >
            <Icon
              as={LuGithub}
              color="white"
              fontSize="xl"
              className="mr-2 transition-transform duration-300 group-hover:rotate-12"
            />
            <Text
              fontSize={{
                base: "xs",
                md: "sm"
              }}
              color="white"
              fontWeight="600"
              mr={4}
              className="transition-all duration-300 group-hover:tracking-wider"
            >
              Star us on GitHub
            </Text>
          </a>

          <Text
            fontSize={{
              base: "xs",
              md: "sm"
            }}
            color="white"
            className="transition-opacity duration-300 group-hover:opacity-75"
          >
            •
          </Text>

          <Text
            fontSize={{
              base: "xs",
              md: "sm"
            }}
            color="white"
            mx={4}
            className="transition-all duration-300 group-hover:tracking-wide"
          >
            Register now and get 20% discount now
          </Text>

          <motion.div
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Icon
              as={LuX}
              color="white"
              fontSize="lg"
              cursor="pointer"
              opacity={0.8}
              className="transition-opacity duration-800 hover:opacity-300"
              onClick={() => {
                localStorage.setItem("stargate-banner", "true");
                setShowBanner(false);
              }}
            >
              Close
            </Icon>
          </motion.div>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default Banner;
