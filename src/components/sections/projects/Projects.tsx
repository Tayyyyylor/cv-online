import { Card } from "@/components/card/Card";
import React, { useState } from "react";
import styles from "./Projects.module.scss";
import classNames from "classnames/bind";
import { useTranslations } from "next-intl";
import { ButtonProject } from "@/components/butttonProject/ButtonProject";
import { ProjectModal } from "@/components/projectModal/ProjectModal";

type Category = "client" | "freelance" | "experimental";

const cx = classNames.bind(styles);

const TABS = [
  { id: "client" as Category, label: "Projets clients" },
  { id: "freelance" as Category, label: "Projets freelance" },
  { id: "experimental" as Category, label: "For fun & experimental" },
];

export const Projects = () => {
  const t = useTranslations("Projects");
  const [activeTab, setActiveTab] = useState<Category>("client");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = [
    {
      category: "client",
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
      category: "client",
      title: "Ali Bensaali Production",
      description: t("aliDesc"),
      logo: "/ALIBENIRIS.png",
      badges: ["React", "JavaScript", "Sass", "Contentful", "Mux", "Vercel"],
      linkWebsite: "https://alibensaali.com/",
      linkGithub: "https://github.com/Tayyyyylor/Aliv3",
    },
    {
      category: "client",
      title: "Labcom Optimaa",
      description: t("labcomDesc"),
      logo: "/logobleu_optimaa.png",
      badges: ["Next.js", "TypeScript", "Sass", "Strapi", "Vercel", "Nginx"],
      linkWebsite: "https://www.labcom-optimaa.com/",
    },
    {
      category: "client",
      title: "Cocoa Bio",
      description: t("cocoaDesc"),
      logo: "/logo_cocoa_black.png",
      badges: ["Next.js", "TypeScript", "Sass", "Vercel"],
      linkWebsite: "https://cocoa-bio.fr",
      linkGithub: "https://github.com/Tayyyyylor/cocoa-bio",
    },
    {
      category: "client",
      title: "Interludes Decors",
      description: t("interludesDesc"),
      logo: "/logoagathe.png",
      badges: ["Next.js", "TypeScript", "Sass", "Vercel", "Contentful"],
      linkWebsite: "https://www.agatheroger.com/",
      linkGithub: "https://github.com/Tayyyyylor/agathe-website",
    },
    {
      category: "freelance",
      title: "Boilerplate Next.js",
      description: t("boilerplateDesc"),
      badges: ["React", "Next.js", "Sass", "TypeScript"],
      linkGithub: "https://github.com/Tayyyyylor/boilerplate-front",
      linkNpm: "https://www.npmjs.com/package/fast-boilerplate-next-app",
    },
    {
      category: "client",
      title: "HbStudio",
      description: t("hbstudioDesc"),
      badges: ["React", "Next.js", "Sass", "TypeScript", "Motion"],
      linkWebsite: "https://www.hashbstudio.com",
    },
    {
      category: "freelance",
      title: "EasInvoice",
      description: t("easinvoiceDesc"),
      badges: ["React", "Next.js", "Sass", "TypeScript", "Supabase"],
      linkWebsite: "https://www.easinvoice.fr",
      linkGithub: "https://github.com/Tayyyyylor/easinvoiceV2",
    },
    {
      category: "freelance",
      title: "Templates Saas",
      description: t("templatesSaasDesc"),
      badges: ["React", "Next.js", "Sass", "TypeScript"],
      linkWebsite:
        "https://taylor000.gumroad.com/l/bnysx?_gl=1*1fgydwf*_ga*MzQxODU5NzY3LjE3NjIyNDA2ODU.*_ga_6LJN6D94N6*czE3NjQ4NDAxMzMkbzE1JGcwJHQxNzY0ODQwMTMzJGo2MCRsMCRoMA..",
    },
  ];
  const filteredProjects = projects.filter(
    (project) => project.category === activeTab,
  );
  return (
    <article className={cx("projects")} id="projects">
      <h2 className={cx("projects__title", "heavitasFont")}>{t("title")}</h2>
      <section className={cx("projects__tabs")}>
        {TABS.map((tab) => (
          <div key={tab.id} className={cx("projects__containerTabs")}>
            <ButtonProject
              onClick={() => setActiveTab(tab.id)}
              label={tab.label}
              isActive={activeTab === tab.id}
            />
          </div>
        ))}
      </section>
      <section className={cx("projects__grid")}>
        {filteredProjects.map((project) => (
          <div key={project.title} className={cx("projects__card")}>
            <Card
              src={project.logo as string}
              title={project.title}
              description={project.description}
              badges={project.badges}
              linkWebsite={project.linkWebsite}
              linkGithub={project.linkGithub}
              linkNpm={project.linkNpm}
              onViewMore={() => setSelectedProject(project as Project)}
            />
          </div>
        ))}
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </article>
  );
};
