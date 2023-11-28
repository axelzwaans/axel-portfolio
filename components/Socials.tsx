"use client";

import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }: any) => {
  return (
    <div className={containerStyles}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
