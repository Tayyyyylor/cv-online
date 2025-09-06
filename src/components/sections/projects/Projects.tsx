import { Card } from "@/components/card/Card";
import React from "react";
import styles from "./Projects.module.scss";
import classNames from "classnames/bind";
import { useTranslations } from "next-intl";

const cx = classNames.bind(styles);

export const Projects = () => {
  const t = useTranslations("Projects");
  const projects = [
    {
      title: "Dependant.tv",
      description: t("dependantDesc"),
      logo: "/logoDpdBlack.png",
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
      linkWebsite: "https://dependant.tv",
      linkGithub: "https://github.com/Tayyyyylor/dependant.tv",
    },
    {
      title: "Ali Bensaali Production",
      description: t("aliDesc"),
      logo: "/ALIBENIRIS.png",
      badges: ["React", "JavaScript", "Sass", "Contentful", "Mux", "Vercel"],
      linkWebsite: "https://alibensaali.com/",
      linkGithub: "https://github.com/Tayyyyylor/Aliv3",
    },
    {
      title: "Labcom Optimaa",
      description: t("labcomDesc"),
      logo: "/logobleu_optimaa.png",
      badges: ["Next.js", "TypeScript", "Sass", "Strapi", "Vercel", "Nginx"],
      linkWebsite: "https://www.labcom-optimaa.com/",
    },
    {
      title: "Cocoa Bio",
      description: t("cocoaDesc"),
      logo: "/meee.png",
      badges: ["Next.js", "TypeScript", "Sass", "Vercel"],
      linkWebsite: "https://cocoa-bio.fr",
      linkGithub: "https://github.com/Tayyyyylor/cocoa-bio",
    },
    {
      title: "Interludes Decors",
      description: t("interludesDesc"),
      logo: "/logoagathe.png",
      badges: ["Next.js", "TypeScript", "Sass", "Vercel", "Contentful"],
      linkWebsite: "https://www.agatheroger.com/",
      linkGithub: "https://github.com/Tayyyyylor/agathe-website",
    },
    {
      title: "Boilerplate Next.js",
      description: t("boilerplateDesc"),
      logo: "/meee.png",
      badges: ["React", "Next.js", "Tailwind", "TypeScript"],
      linkGithub: "https://github.com/Tayyyyylor/boilerplate-front",
      linkNpm: "https://www.npmjs.com/package/dependant-tv",
    },
  ];
  return (
    <article className={cx("projects")} id="projects">
      <h2 className={cx("projects__title", "heavitasFont")}>{t("title")}</h2>
      <section className={cx("projects__grid")}>
        {projects.map((project) => (
          <div key={project.title} className={cx("projects__card")}>
            <Card
              src={project.logo}
              title={project.title}
              description={project.description}
              badges={project.badges}
              linkWebsite={project.linkWebsite}
              linkGithub={project.linkGithub}
              linkNpm={project.linkNpm}
            />
          </div>
        ))}
      </section>
    </article>
  );
};
