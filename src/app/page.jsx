import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import NavBar from "./(main)/navbar/page";
import { HeroParallaxDemo } from "./(main)/Home/page";

function HomePage() {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <NavBar />
        <HeroParallaxDemo />
      </BackgroundBeamsWithCollision>
    </>
  );
}

export default HomePage;
