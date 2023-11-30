"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

const projectData = [
  {
    image: "/work/hotely.png",
    category: "nextjs",
    name: "Hotely",
    description:
      "A fully responsive hotel landing page built with Next.js and Tailwind CSS.",
    link: "https://hotely-smoky.vercel.app/",
    github: "https://github.com/axelzwaans/hotely",
  },
  {
    image: "/work/life-and-sole.png",
    category: "nextjs",
    name: "Life & Sole",
    description: "A cool website I create for my local gym.",
    link: "https://lifeandsole.vercel.app/",
    github: "https://github.com/axelzwaans/life-and-sole",
  },
  {
    image: "/work/dev-overflow.png",
    category: "nextjs",
    name: "Dev Overflow",
    description:
      "A Q&A app for developers with voting, popularity and AI features.",
    link: "https://stack-overflow-nextjs13-axelzwaans-projects.vercel.app/",
    github: "https://github.com/axelzwaans/dev-flow",
  },
  {
    image: "/work/flowrise.png",
    category: "prismic",
    name: "Flowrise",
    description:
      "A website for a productivity app using Prismic as a Headless Website Builder.",
    link: "https://flowrise-prismic-xi.vercel.app",
    github: "https://github.com/axelzwaans/flowrise-prismic",
  },
  {
    image: "/work/house-party.png",
    category: "django",
    name: "House-Party",
    description:
      "A web application that allows users to create a room for playing music together.",
    link: "/",
    github: "https://github.com/axelzwaans/music_controller",
  },
  {
    image: "/work/ai-summarizer.png",
    category: "ai",
    name: "AI Summarizer",
    description:
      "An article summarization tool that allows users to paste a link to an article and receive a summary of its content.",
    link: "https://ai-summarizer-rho-eight.vercel.app/",
    github: "https://github.com/axelzwaans/ai-summarizer",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start"
        >
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8 xl:max-w-[350px]">
            Check out some of the projects I&apos;ve been working on.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </motion.div>
        {/* slider */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="xl:max-w-[1000px] xl:absolute right-0 top-0 xl:px-8"
        >
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
