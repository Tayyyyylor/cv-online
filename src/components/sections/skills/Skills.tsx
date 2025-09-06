import {
  SiDocker,
  SiExpo,
  SiExpress,
  SiFigma,
  SiGithub,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiShadcnui,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import React from "react";
import styles from "./Skills.module.scss";
import classNames from "classnames/bind";
import { useTranslations } from "next-intl";

const cx = classNames.bind(styles);

export const Skills = () => {
  const t = useTranslations("Skills");
  const gradientSet = new Set([
    "React Native",
    "Expo",
    "Next.js",
    "Nest.js",
    "Strapi",
    "Docker",
    "AWS",
    "Tailwind",
    "Sass",
  ]);

  const skills = [
    {
      name: "Frontend",
      skills: [
        {
          icon: <SiReact size={20} />,
          name: "React.js",
        },
        {
          icon: <SiNextdotjs size={20} />,
          name: "Next.js",
        },
        {
          icon: <SiTypescript size={20} />,
          name: "TypeScript",
        },
      ],
    },
    {
      name: "Backend",
      skills: [
        {
          icon: <SiNodedotjs size={20} />,
          name: "Node.js",
        },
        {
          icon: <SiNestjs size={20} />,
          name: "Nest.js",
        },
        {
          icon: <SiExpress size={20} />,
          name: "Express.js",
        },
        {
          icon: <SiStrapi size={20} />,
          name: "Strapi",
        },
        {
          icon: <SiPostgresql size={20} />,
          name: "PostgreSQL",
        },
      ],
    },
    {
      name: "Mobile",
      skills: [
        {
          icon: <SiReact size={20} />,
          name: "React Native",
        },
        {
          icon: <SiExpo size={20} />,
          name: "Expo",
        },
        {
          icon: <SiTailwindcss size={20} />,
          name: "NativeWind",
        },
      ],
    },
    {
      name: t("others"),
      skills: [
        {
          icon: <SiDocker size={20} />,
          name: "Docker",
        },
        {
          icon: <SiGithub size={20} />,
          name: "Git & Github & CI/CD",
        },
        {
          icon: <SiReact size={20} />,
          name: "AWS",
        },
        {
          icon: <SiNginx size={20} />,
          name: "Nginx",
        },
      ],
    },
    {
      name: "Design",
      skills: [
        {
          icon: <SiTailwindcss size={20} />,
          name: "Tailwind",
        },
        {
          icon: <SiFigma size={20} />,
          name: "Figma",
        },
        {
          icon: <SiSass size={20} />,
          name: "Sass",
        },
        {
          icon: <SiShadcnui size={20} />,
          name: "Shadcn",
        },
      ],
    },
  ];
  return (
    <article className={cx("skills")} id="skills">
      <svg
        aria-hidden="true"
        width="0"
        height="0"
        style={{ position: "absolute" }}
      >
        <defs>
          <linearGradient id="skillsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d2ff" />
            <stop offset="50%" stopColor="#3a7bd5" />
            <stop offset="100%" stopColor="#1e3c72" />
          </linearGradient>
        </defs>
      </svg>
      <h2 className={cx("skills__title", "heavitasFont")}>{t("title")}</h2>
      <section className={cx("skills__section")}>
        {skills.map((skill, index) => (
          <div key={index} className={cx("skills__list-container")}>
            <h4 className={cx("skills__list-title")}>{skill.name}</h4>
            <ul className={cx("skills__list")}>
              {skill.skills.map((s, j) => {
                const isGradient = gradientSet.has(s.name);
                return (
                  <li
                    key={j}
                    className={cx("skills__list-item", {
                      gradient: isGradient,
                    })}
                  >
                    {s.icon} {s.name}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>
    </article>
  );
};
