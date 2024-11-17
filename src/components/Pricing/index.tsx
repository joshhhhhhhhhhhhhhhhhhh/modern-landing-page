"use client"; //for client side rendering
import { StargateColors } from "#/src/utils/Colors";
import {
  Badge,
  Button,
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";

const Pricing = () => {
  const [currentBilling, setCurrentBilling] = useState("monthly");

  const plans = [
  {
    name: "Basic",
    price: currentBilling === "monthly" ? "$9" : "$90",
    features: [
      "🔍 **AI Generator**: Optimize your content with advanced AI technology.",
      "📊 **Dashboard**: User-friendly interface for performance monitoring.",
      "🔒 **Secure Payments**: Safe and encrypted transactions.",
      "🌍 **Multilanguage Support**: Basic support for multiple languages.",
      "📑 **Ready-to-Use Templates**: Limited access to pre-designed templates.",
      "🛠️ **Support Centre**: Standard customer support.",
    ],
  },
  {
    name: "Pro",
    price: currentBilling === "monthly" ? "$19" : "$190",
    features: [
      "⚙️ **AI Generator**: Enhanced capabilities for more complex tasks.",
      "📈 **Dashboard**: Advanced analytics and insights for better decision-making.",
      "🔒 **Secure Payments**: Premium security for all transactions.",
      "🌍 **Extended Multilanguage Support**: Support for a wider range of languages.",
      "📑 **Comprehensive Template Library**: Access to a vast library of templates.",
      "🚀 **Support Centre**: Priority support for faster assistance.",
    ],
  },
  {
    name: "Enterprise",
    price: currentBilling === "monthly" ? "$99" : "$990",
    features: [
      "🛠️ **Customizable AI Solutions**: Tailored AI solutions to fit your business needs.",
      "📊 **Full-Featured Dashboard**: Command center with all necessary tools and insights.",
      "🔒 **Enterprise-Level Security**: Top-tier security measures for your transactions.",
      "🌍 **Full Multilanguage Support**: Comprehensive support for all languages.",
      "📑 **Exclusive Customizable Templates**: Access to unique templates tailored to your brand.",
      "⏰ **24/7 Premium Support**: Around-the-clock support for critical issues.",
    ],
  },
];

  return (
    <Flex
      id="pricing"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      pt={6}
      pb={{
        base: 6,
        md: 12,
      }}
      px={{
        base: 6,
        md: 10,
      }}
      maxW={1200}
      mx={{
        base: 2,
        xl: "auto",
      }}
      border={`1px solid ${StargateColors.lightBg}`}
      borderRadius={24}
    >
      <Heading textAlign={"center"} px={2}>
        Pricing
      </Heading>
      <Flex
        mt={6}
        gap={2}
        p={2}
        borderRadius={16}
        border={`1px solid ${StargateColors.lightBg}`}
      >
        <Flex
          key={"monthly"}
          cursor={"pointer"}
          onClick={() => setCurrentBilling("monthly")}
          px={4}
          py={2}
          borderRadius={12}
          transition={"all 0.25s ease"}
          {...(currentBilling === "monthly" && {
            bgColor: StargateColors.black,
          })}
        >
          <Text
            fontWeight={"bold"}
            fontSize={"sm"}
            color={
              currentBilling === "monthly"
                ? StargateColors.white
                : StargateColors.grey
            }
          >
            Monthly
          </Text>
        </Flex>
        <Flex
          key={"annual"}
          cursor={"pointer"}
          onClick={() => setCurrentBilling("annual")}
          gap={2}
          justify={"center"}
          align={"center"}
          px={4}
          py={2}
          borderRadius={12}
          transition={"all 0.25s ease"}
          {...(currentBilling === "annual" && {
            bgColor: StargateColors.black,
          })}
        >
          <Text
            fontWeight={"bold"}
            fontSize={"sm"}
            color={
              currentBilling === "annual"
                ? StargateColors.white
                : StargateColors.grey
            }
          >
            Annual
          </Text>
          <Badge
            borderRadius={"full"}
            px={2}
            bg={
              currentBilling === "annual"
                ? StargateColors.white
                : StargateColors.primary
            }
            color={
              currentBilling === "annual"
                ? StargateColors.black
                : StargateColors.white
            }
          >
            2 months free
          </Badge>
        </Flex>
      </Flex>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={6}
        w={"100%"}
        mt={6}
      >
        <AnimatePresence mode="wait">
          {plans.map((plan) => (
            <Flex
              as={motion.div}
              key={`${plan.name}-${currentBilling}`}
              p={4}
              direction={"column"}
              w={"100%"}
              border={`1px solid ${StargateColors.lightBg}`}
              borderRadius={18}
              color={StargateColors.black}
              layout
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.2 }}
              transition={"all 0.25s ease"}
            >
              <Text
                as="h3"
                fontSize="sm"
                textAlign="center"
                mb={4}
                color={StargateColors.grey}
              >
                {plan.name}
              </Text>
              <Stack mb={4}>
                <Heading
                  fontSize={{
                    base: "3xl",
                    md: "4xl",
                  }}
                  textAlign="center"
                  fontWeight={600}
                >
                  {plan.price}
                </Heading>
                <Text
                  textAlign="center"
                  fontSize="sm"
                  color={StargateColors.grey}
                >
                  {currentBilling}
                </Text>
              </Stack>
              <Stack spacing={3} mb={6}>
                {plan.features.map((feature) => (
                  <Flex
                    align={"flex-start"}
                    key={`${feature}-${currentBilling}`}
                  >
                    <Flex
                      bg={`${StargateColors.primary}25`}
                      mr={2}
                      borderRadius={"full"}
                      p={1}
                    >
                      <Icon as={LuCheck} color={StargateColors.primary} />
                    </Flex>
                    <Text key={feature}>{feature}</Text>
                  </Flex>
                ))}
              </Stack>
              <Button
                mt={"auto"}
                w="full"
                {...(plan.name === "Enterprise"
                  ? {
                      bg: StargateColors.primary,
                      color: StargateColors.white,
                      _hover: {
                        bg: StargateColors.primary,
                        color: StargateColors.white,
                        opacity: 0.8,
                      },
                    }
                  : {})}
              >
                Choose {plan.name}
              </Button>
            </Flex>
          ))}
        </AnimatePresence>
      </Stack>
    </Flex>
  );
};

export default Pricing;
