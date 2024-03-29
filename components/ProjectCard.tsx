import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }: any) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[320px] md:h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={340}
            height={340}
            alt=""
            priority
          />
          {/* buttons */}
          <div className="flex gap-x-4">
            <Link
              target="_blank"
              href={project.link}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              target="_blank"
              href={project.github}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="px-4 py-3">
        <div className="flex flex-wrap items-center gap-2 absolute top-4 left-4">
          {project.category.map((cat: any, index: any) => (
            <Badge
              key={index}
              className="text-sm font-medium "
              style={{ left: `${5 + index * 110}px` }}
            >
              {cat}
            </Badge>
          ))}
        </div>

        <h4 className="mb-1">{project.name}</h4>
        <p className="text-muted-foreground leading-6">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
