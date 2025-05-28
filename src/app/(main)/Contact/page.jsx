"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../navbar/page";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin
} from "@tabler/icons-react";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_el4bupv",
        "template_749xpey",
        form.current,
        "D2v5fLIgFfffZ5fYH"
      )
      .then(() => {
        setIsSent(true);
        form.current.reset();
        setTimeout(() => setIsSent(false), 3000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
      });
  };

  const links = [
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/vigneshsmart15",
    },
    {
      title: "Gmail",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 
      0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.333-8-5.333V6h16zM4 
      18V8.489l8 5.333 8-5.333V18H4z"
          />
        </svg>
      ),
      href: "mailto:vigneshkumar3497@gmail.com", // ✅ Make sure this is correct
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/vignesh-kumar97/",
    },

    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/VickY-1997",
    },
  ];

  return (
    <>
      <NavBar />

      {isSent && (
        <div
          onClick={() => setIsSent(false)}
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
        >
          <div className="bg-green-500 text-white px-5 py-3 rounded-xl shadow-xl text-base font-medium cursor-pointer">
            ✅ Message sent successfully!
          </div>
        </div>
      )}

      <div className="pt-35 pb-17 px-4 bg-gray-100 min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-start justify-center gap-10">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Contact Me
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-3 text-sm">
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="2"
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 text-sm"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex mt-20 pl-3 items-center justify-center w-full max-w-md">
          <FloatingDock mobileClassName="translate-y-20" items={links} />
        </div>
      </div>
    </>
  );
};

export default Contact;
