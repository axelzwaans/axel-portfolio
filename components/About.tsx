import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Axel Zwaans",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+44 7737 882 336",
  },
  {
    icon: <MailIcon size={20} />,
    text: "axelzwaans@hotmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born 27 Sep, 1988",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Front-End Developer",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Moray, Scotland",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Code Institute",
        qualification: "Diploma in Full-Stack Software Development",
        years: "2022 - 2023",
      },
      {
        university: "JSMastery",
        qualification: "Front-End Developer",
        years: "2023",
      },
      {
        university: "ThreeJS Journey",
        qualification: "Advanced Three.JS Development",
        years: "2023",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Sailing Yacht 'CHE'",
        role: "First Mate",
        years: "2014 - 2018",
      },
      {
        company: "Motor Yacht 'Alicia'",
        role: "Chase Boat Captain",
        years: "2018 - 2020",
      },
      {
        company: "Marcassie Farm Kitchen",
        role: "Co-Founder",
        years: "2021 - 2022",
      },
      {
        company: "Freelance",
        role: "Front-End Developer",
        years: "2022 - current",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-End Development",
      },
      {
        name: "JavaScript, NextJS",
      },
      {
        name: "Back-End Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/nextjs.svg",
      },
      {
        imgPath: "/about/prismic.svg",
      },
      {
        imgPath: "/about/react.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };

  return (
    <section className="xl:h[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>

        {/* Tabs */}
        <div className="flex justify-center">
          <Tabs defaultValue="personal">
            <TabsList className="w-[550px] mx-auto grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
              <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                Personal Info
              </TabsTrigger>
              <TabsTrigger
                className="w-[162px] xl:w-auto"
                value="qualifications"
              >
                Qualifications
              </TabsTrigger>
              <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                Skills
              </TabsTrigger>
            </TabsList>
            {/* Tabs content */}
            <div className="text-lg mt-12 xl:mt-8">
              {/* Personal */}
              <TabsContent value="personal">
                <div className="text-center">
                  <h3 className="h3 mb-4">Tailor-made websites</h3>
                  <p className="subtitle max-w-xl mx-auto">
                    I create great-looking websites using the latest
                    technologies, delivering dynamic and engaging user
                    experiences.
                  </p>
                  {/* icons */}
                  <div className="grid xl:grid-cols-2 gap-4 mb-12">
                    {infoData.map((item, index) => {
                      return (
                        <div
                          className="flex items-center gap-x-4 mx-auto"
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      );
                    })}
                  </div>
                  {/* languages */}
                  <div className="flex flex-col gap-y-2">
                    <div className="text-primary">Languages</div>
                    <div className="border-b border-brder"></div>
                    <div>English, Dutch</div>
                  </div>
                </div>
              </TabsContent>
              {/* Qualifications */}
              <TabsContent value="qualifications">
                <div>
                  <h3 className="h3 mb-8 text-center">My Journey</h3>
                  {/* experience & education wrapper */}
                  <div className="grid md:grid-cols-2 gap-y-8">
                    {/* experience */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationData, "experience").title}
                        </h4>
                      </div>
                      {/* list */}
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, "experience").data.map(
                          (item: any, index: any) => {
                            const { company, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {role}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* education */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <GraduationCap size={28} />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationData, "education").title}
                        </h4>
                      </div>
                      {/* list */}
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, "education").data.map(
                          (item: any, index: any) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {university}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {qualification}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              {/* Skills */}
              <TabsContent value="skills">
                <div className="text-center">
                  <h3 className="h3 mb-8">What I&apos;m Working With...</h3>
                  <div className="mb-16">
                    <h4 className="text-xl font-semibold mb-2">Tech Stack</h4>
                    <div className="border-b border-border mb-4"></div>
                    {/* skill list */}
                    <div>
                      {getData(skillData, "skills").data.map(
                        (item: any, index: any) => {
                          const { name } = item;
                          return (
                            <div
                              className="w-2/4 text-center mx-auto"
                              key={index}
                            >
                              <div className="font-medium">{name}</div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                  {/* tools */}
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Tools</h4>
                    <div className="border-b border-border mb-4"></div>
                    <div className="flex gap-x-8 justify-center">
                      {getData(skillData, "tools").data.map(
                        (item: any, index: any) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
