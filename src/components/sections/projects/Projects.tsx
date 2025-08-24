import { Card } from "@/components/card/Card";
import React from "react";
import styles from "./Projects.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Projects = () => {
  const projects = [
    {
      title: "Dependant.tv",
      description:
        "Site portfolio pour une boite de production audiovisuelle nommé Dependant",
      logo: "/meee.png",
      badges: [
        "Next.js",
        "TypeScript",
        "Sass",
        "Strapi",
        "Nginx",
        "Docker",
        "AWS",
        "Vercel",
        "Mux",
      ],
      isWebsite: true,
      isGithub: true,
      isNpm: true,
    },
    {
      title: "Ali Bensaali Production",
      description:
        "Site portfolio pour une boite de production audiovisuelle nommé Ali Bensaali Production",
      logo: "/meee.png",
      badges: ["React", "TypeScript", "Sass", "Contentful", "Mux", "Vercel"],
      isWebsite: true,
      isGithub: true,
      isNpm: true,
    },
    {
      title: "Labcom Optimaa",
      description:
        "Site portfolio pour une boite de production audiovisuelle nommé Ali Bensaali Productiona",
      logo: "/meee.png",
      badges: ["Next.js", "TypeScript", "Sass", "Strapi", "Vercel", "Nginx"],
      isWebsite: true,
      isGithub: true,
      isNpm: true,
    },
    {
      title: "Cocoa Bio",
      description:
        "Site portfolio pour une boite de production audiovisuelle nommé Ali Bensaali Production",
      logo: "/meee.png",
      badges: ["Next.js", "TypeScript", "Sass", "Vercel"],
      isWebsite: true,
      isGithub: true,
      isNpm: true,
    },
    {
      title: "Boilerplate Next.js",
      description:
        "Site portfolio pour une boite de production audiovisuelle nommé Ali Bensaali Production",
      logo: "/meee.png",
      badges: ["React", "Next.js", "Tailwind", "TypeScript"],
      isWebsite: true,
      isGithub: true,
      isNpm: true,
    },
    {
      title: "Interludes Decors",
      description:
        "Interludes Decors est une entreprise de décoration et de décoration de scène",
      logo: "/meee.png",
      badges: ["Next.js", "TypeScript", "Sass", "Vercel", "Contentful"],
      isWebsite: true,
      isGithub: true,
      isNpm: true,
    },
  ];
  return (
    <article className={cx("projects")}>
      <h2 className={cx("projects__title")}>Projects</h2>
      <section className={cx("projects__grid")}>
        {projects.map((project) => (
          <div key={project.title} className={cx("projects__card")}>
            <Card
              src={project.logo}
              title={project.title}
              description={project.description}
              badges={project.badges}
              isWebsite={project.isWebsite}
              isGithub={project.isGithub}
              isNpm={project.isNpm}
            />
          </div>
        ))}
      </section>
    </article>
  );
};
