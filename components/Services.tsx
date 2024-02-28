"use client";

import { GanttChartSquare, Blocks } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Front-End Development",
    description:
      "Boost your front-end team with a dedicated developer, focused on crafting responsive and engaging digital experiences. Known for being an exceptional team player with a strong appetite for learning, I continuously seek to expand my skills and contribute to collaborative success.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Elevate your brand with custom, high-performance websites that blend personalized designs, from sleek landing pages to powerful e-commerce platforms, with functionality and creativity for a standout online presence that adapts to your evolving needs.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="section-title mb-12 xl:mb-24 text-center mx-auto"
        >
          My Services
        </motion.h2>
        {/* grid items */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="grid xl:grid-flow-col justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8"
        >
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-fit flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
