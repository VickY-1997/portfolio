"use client";

import NavBar from "../navbar/page";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { LinkPreview } from "@/components/ui/link-preview.";

const About = () => {
  // link certificate function

  function LinkPreviewDemo() {
    return (
      <div className="h-[23rem] flex-col px-4">
        <div className="text-white dark:text-neutral-400 text-xl md:text-3xl max-w-6xl mx-auto mb-10 ">
          <h2 className="max-w-sm md:max-w-lg  text-left pt-12 text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Certifications & Internships
          </h2>
          <p className="mt-4 text-left  text-lg text-neutral-200">Full Stack Web Development | Edureka (6 Months Internship Course)</p>
          <ul className="list-disc list-inside mt-3">
            <LinkPreview url="https://www.edureka.co/certificates/mycertificate/220e036833b6a0352b6b0b11c29cadd5" className="font-bold">
            <li className="text-white text-lg">Full Stack Web Development</li>
          </LinkPreview>
            <LinkPreview url="https://www.edureka.co/certificates/mycertificate/4ee449d06af0b91cfc46cca3bc3bb836" className="font-bold">
            <li className="text-white text-lg">HTML, CSS & Bootstrap</li>
          </LinkPreview>
            <LinkPreview url="https://www.edureka.co/certificates/mycertificate/4c5721647eddbbe3dadf8e31941372b9" className="font-bold">
            <li className="text-white text-lg">Javascript</li>
          </LinkPreview>
            <LinkPreview url="https://www.edureka.co/certificates/mycertificate/42bb1685d3efd3bac35274db4afde1ca" className="font-bold">
            <li className="text-white text-lg">Node.js, Express.js & MongoDB</li>
          </LinkPreview>
            <LinkPreview url="https://www.edureka.co/certificates/mycertificate/10d5c56529df175c6641809adcc60321" className="font-bold">
            <li className="text-white text-lg">React.js</li>
          </LinkPreview>
          </ul>
         
        </div>
      </div>
    );
  }

  function WobbleCardDemo() {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mb-4">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2  bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xl">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              About Me
            </h2>
            <p className="mt-4 text-left  text-lg text-neutral-200">
              Hey there! I'm Vignesh Kumar, a full stack web developer
              passionate about creating awesome web applications.
            </p>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Educational Background
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-lg text-neutral-200">
            I have completed B Com Computer Applications @ KG College of Arts
            and Science in 2018
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="pl-4">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Skills
            </h2>
            <ul className="list-disc list-inside mt-4  text-left  text-lg text-neutral-200">
              <li>
                <b>Programming Language :</b> JavaScript
              </li>
              <li>
                <b>Markup & Styling :</b> HTML5, CSS3
              </li>
              <li>
                <b>Frontend Frameworks & Libraries :</b> React.js, Next.js,
                Redux, React Query, Bootstrap, Tailwind CSS, Aceternity UI,
                shadcn/ui
              </li>
              <li>
                <b>Backend Frameworks :</b> Node.js, Express.js
              </li>
              <li>
                <b>Database & ODM :</b> MongoDB, Mongoose
              </li>
              <li>
                <b>Testing :</b> Jest
              </li>
              <li>
                <b>Authentication :</b> JWT (JSON Web Token)
              </li>
              <li>
                <b>API Development :</b> RESTful API design and integration
              </li>
              <li>
                <b>Tools & Platforms :</b> Git, GitHub, Postman, Render, Netlify
              </li>
            </ul>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-2 bg-green-800 min-h-[300px]">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Work Experience
          </h2>
          <ul className="mt-4  text-left  text-lg text-neutral-200">
            <li className="before:content-['➜'] before:mr-2 before:text-white mt-4">
              <b>
                L.G.Balakrishnan & Bros Ltd | PPC Department | Jun 2018 - Jul
                2019
              </b>
              <br /> PPC Department Production Planning & Control <br />
              (Handled daily reporting using MS Excel and data entry systems)
            </li>
            <li className="before:content-['➜'] before:mr-2 before:text-white mt-4">
              <b>
                C.R.I. Nark Steel Castings | Lab Department | Oct 2019 - Jan
                2021
              </b>
              <br />
              Production & Documentation <br /> (Entered daily casting
              production details in system and logbook. Worked with Excel and
              Word for basic reports and documentation.)
            </li>
            <li className="before:content-['➜'] before:mr-2 before:text-white mt-4">
              <b>Aruvi Business Solutions | Dec 2021 - Nov 2024</b>
              <br />
              Accounts Assistant <br />
              (Updated client data in Excel and edited documents in Word,
              Applied for and updated PF details for clients, Filed GST returns
              (GSTR-1 and 3B))
            </li>
          </ul>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-sm md:max-w-lg  text-left pt-12 text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
            Projects and Contributions
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-lg pt-5 text-neutral-200">
            ➺ Although I'm a fresher, I've already begun working on projects and
            contributing to open-source initiatives. Through these experiences,
            I've honed my skills and gained valuable insights into real-world
            coding practices and collaborative development.
          </p>
        </WobbleCard>
        
        <div className="h-80 bg-pink-700 col-span-3 rounded-xl">
            <LinkPreviewDemo />
          </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="mt-30">
        {/* about me */}
        <div>
          <WobbleCardDemo />
        </div>
      </div>
    </div>
  );
};

export default About;
