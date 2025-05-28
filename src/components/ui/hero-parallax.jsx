"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import Link from "next/link";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.1, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 100]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="py-22 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-10 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const words = ` I’m Vignesh Kumar S 👋 A Full Stack Web Developer with a goal : to build efficient, scalable, and impactful web applications.`;

  function TextGenerateEffectDemo() {
    return (
      <TextGenerateEffect
        words={words}
        className="max-w-2xl text-base md:text-xl dark:text-neutral-200"
      />
    );
  }

  function TypewriterEffectSmoothDemo() {
    const words = [
      {
        text: "My",
        className: "text-3xl mr-1",
      },
      {
        text: "Self ",
        className: "text-3xl mr-1",
      },
      {
        text: "VIGNESH KUMAR.S",
        className: "text-blue-500 dark:text-blue-500 ml-2 text-5xl",
      },
    ];
    return (
      <div>
        <TypewriterEffectSmooth words={words} />
      </div>
    );
  }

  function ContainerTextFlipDemo() {
    return (
      <ContainerTextFlip
        words={[
          "Full Stack Web Developer",
          "MERN Stack Developer",
          "Frontend Developer",
          "Backend Developer",
          "React Developer",
        ]}
      />
    );
  }

  return (
    <>
      <div className="max-w-7xl relative mx-auto py-20 md:py-25 px-10 w-full  left-0 top-0 bottom-0">
        <span className="font-semibold text-2xl">Hi, There!</span>
        <TypewriterEffectSmoothDemo />
        <ContainerTextFlipDemo />
        <TextGenerateEffectDemo />
        <Link href={'/About'}>
          <button className="bg-blue-500 border-none text-white relative z-10 transition duration-300 ease-in-out mt-4 border px-3 py-1.5 rounded-tl-xl rounded-br-xl font-semibold cursor-pointer hover:bg-blue-800  hover:text-white hover:border-none">
            More About Me
          </button>
        </Link>
      </div>
    </>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-60 w-[24rem] relative shrink-0"
    >
      <div className="block group-hover/product:shadow-2xl ">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
