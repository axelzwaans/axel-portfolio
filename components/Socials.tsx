"use client";

import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/axelzwaans/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/axelzwaans",
    name: <RiGithubFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }: any) => {
  return (
    <div className={containerStyles}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
