import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuFilm, LuSpeaker, LuVideotape } from "react-icons/lu";

// Define an array of products for easier management
const products = [
  {
    icon: LuVideotape,
    title: "AI Video Editor",
    description: "Revolutionize your editing workflow with our Video Editor. Automate time-consuming tasks and enhance your videos with advanced AI tools.",
  },
  {
    icon: LuFilm,
    title: "Cinematic Effect Generator",
    description: "Add a professional touch to your videos with our Cinematic Effect Generator. Create stunning visual effects effortlessly.",
  },
  {
    icon: LuSpeaker,
    title: "Audio Enhancement Tool",
    description: "Improve your video's audio quality with our Audio Enhancement Tool. Achieve crystal-clear sound and perfect audio-visual synchronization.",
  },
];

const Video = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      w={"100%"}
      mt={6}
      gap={6}
      px={6}
    >
      {products.map((product, index) => (
        <ProductCard key={index} icon={product.icon} title={product.title}>
          {product.description}
        </ProductCard>
      ))}
    </Grid>
  );
};

export default Video;
