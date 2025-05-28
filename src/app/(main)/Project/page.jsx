import NavBar from "../navbar/page";
import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Link from "next/link";

const Project = () => {
  const items = [
    {
      id: 1,
      title: "ChatApp",
      image:
        "https://i.pinimg.com/736x/57/45/4a/57454a6bdeb5c0848557a4e52b17e192.jpg",
      className: "absolute top-20 left-[49%] rotate-[-15deg]",
      link: "https://chat-app-7wri.onrender.com/",
    },
    {
      id: 2,
      title: "NETFLIX",
      image:
        "https://i.pinimg.com/736x/40/95/a5/4095a573f75e2f84c3a05e567888ab12.jpg",
      className: "absolute top-20 left-[32%] rotate-[-20deg]",
      link: "https://netflix-za64.onrender.com",
    },
    {
      id: 3,
      title: "KFC",
      image:
        "https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2020/08/10/kfc.jpg?itok=PEqg_laa",
      className: "absolute top-20 left-[18%] rotate-[-25deg]",
      link: "https://charming-begonia-f50cae.netlify.app/",
    },
  ];

  function DraggableCardDemo() {
    return (
      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
        <p className="absolute mx-auto max-w-4xl -translate-y-40 text-center text-lg font-black text-neutral-400 md:text-2xl dark:text-neutral-800">
          👋 Welcome to my project showcase! Explore some of the exciting work
          I've built — feel free to click and dive in!
        </p>
        {items.map((item) => (
          <DraggableCardBody key={item.id} className={item.className}>
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none relative z-10 h-80 w-80 object-cover"
            />
            <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    );
  }

  return (
    <>
      <NavBar />
      <div className="mt-22">
        <DraggableCardDemo />
      </div>
    </>
  );
};

export default Project;
