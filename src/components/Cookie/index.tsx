"use client"
  
//for client side rendering 
import React from 'react';
import { motion } from 'framer-motion';
import useCookieVisibility from "#/src/utils/CookieVisibility";
import { Button, Flex, Text, Link, Icon } from "@chakra-ui/react";
import { LuGithub } from 'react-icons/lu';

const Cookie = () => {
  const [showCookie, setShowCookie] = useCookieVisibility("stargate-cookie");

  if (!showCookie) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <Flex
        bg="rgba(255, 255, 255, 0.95)"
        backdropFilter="blur(10px)"
        shadow="0 8px 32px rgba(0, 0, 0, 0.08)"
        rounded="full"
        padding="16px 24px"
        position="fixed"
        left="50%"
        bottom={8}
        transform="translateX(-50%)"
        justify="center"
        align="center"
        gap={6}
        maxW="90%"
        w={{ base: "90%", md: "auto" }}
        zIndex={1000}
        className="group"
        border="1px solid rgba(255, 255, 255, 0.18)"
      >
        <Link 
          href="https://github.com/duggal1"
          target="_blank"
          rel="noopener noreferrer"
          display="flex"
          alignItems="center"
          _hover={{ textDecoration: 'none' }}
        >
          <Icon
            as={LuGithub}
            color="gray.600"
            fontSize="xl"
            mr={2}
            className="transition-transform duration-300 ease-in-out group-hover:rotate-12"
          />
        </Link>

        <Text 
          color="gray.600" 
          fontSize="sm"
          className="transition-all duration-300 ease-in-out group-hover:tracking-wide"
        >
          This website uses cookies to enhance your experience.
        </Text>

        <Flex gap={3}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => {
                localStorage.setItem("stargate-cookie", "true");
                setShowCookie(false);
              }}
              rounded="full"
              size="sm"
              px={6}
              bg="black"
              color="white"
              _hover={{
                bg: 'gray.800',
                transform: 'translateY(-2px)',
                shadow: 'lg',
              }}
              _active={{
                bg: 'gray.900',
                transform: 'translateY(0px)',
              }}
              transition="all 0.2s ease-in-out"
            >
              Accept
            </Button>
          </motion.div>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default Cookie;
