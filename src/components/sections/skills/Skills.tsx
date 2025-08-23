import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
} from "@icons-pack/react-simple-icons";
import React from "react";
import styles from "./Skills.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Skills = () => {
  const skills = [
    {
      name: "Frontend",
      skills: [
        {
          icon: <SiReact size={15} />,
          name: "React.js",
        },
        {
          icon: <SiNextdotjs size={15} />,
          name: "Next.js",
        },
        {
          icon: <SiJavascript size={15} />,
          name: "JavaScript",
        },
      ],
    },
    {
      name: "Backend",
      skills: [
        {
          icon: <SiNodedotjs size={15} />,
          name: "Node.js",
        },
      ],
    },
    {
      name: "Mobile",
      skills: [
        {
          icon: <SiReact size={15} />,
          name: "React Native",
        },
      ],
    },
    {
      name: "Devops",
      skills: [
        {
          icon: <SiReact size={15} />,
          name: "Node.js",
        },
      ],
    },
    {
      name: "Design",
      skills: [
        {
          icon: <SiReact size={15} />,
          name: "Node.js",
        },
      ],
    },
    {
      name: "Autres",
      skills: [
        {
          icon: <SiReact size={15} />,
          name: "Node.js",
        },
      ],
    },
  ];
  return (
    <article className={cx("skills")}>
      <h2 className={cx("skills__title")}>Skills</h2>
      <section className={cx("skills__section")}>
        {skills.map((skill, index) => (
          <div key={index}>
            <h4 className={cx("skills__list-title")}>{skill.name}</h4>
            <ul className={cx("skills__list")}>
              {skill.skills.map((skill, index) => (
                <li key={index} className={cx("skills__list-item")}>
                  {skill.icon} {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </article>
  );
};
