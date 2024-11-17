import { Grid, Text, Box } from "@chakra-ui/react";
import React from "react";
import { LuBarChartBig, LuPodcast, LuTrendingUp } from "react-icons/lu";
import { ProductCard } from "../card";

const cardData = [
  {
    icon: LuPodcast,
    title: "Social Media Content Generator",
    description: "Create engaging content effortlessly with our Social Media Content Generator. Tailor posts to your audience and maintain a consistent online presence.",
  },
  {
    icon: LuTrendingUp,
    title: "Engagement Booster",
    description: "Boost your social media engagement with our Engagement Booster. Analyze trends and optimize your posts for maximum interaction.",
  },
  {
    icon: LuBarChartBig,
    title: "Audience Insight Analyzer",
    description: "Gain deeper insights into your audience with our Audience Insight Analyzer. Understand preferences and behaviors to enhance your social media strategy.",
  },
];

const SocialMedia = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      width="100%"
      mt={6}
      gap={6}
      px={6}
      aria-label="Social Media Tools"
    >
      {cardData.map((card, index) => (
        <ProductCard key={index} icon={card.icon} title={card.title}>
          <Text>{card.description}</Text>
        </ProductCard>
      ))}
    </Grid>
  );
};

export default SocialMedia;
