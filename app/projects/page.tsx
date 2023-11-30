"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

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
    description: "A cool website I created for my local gym.",
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

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            defaultValue={category}
            className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none"
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
