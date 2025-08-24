import React from "react";
import styles from "./ButtonContact.module.scss";
import classNames from "classnames/bind";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Linkedin, Mail } from "lucide-react";
const cx = classNames.bind(styles);

interface ButtonContactProps {
  className?: string;
}

export const ButtonContact = ({ className }: ButtonContactProps) => {
  const data = [
    {
      icon: <SiGithub size={15} />,
      link: "https://github.com/tayyyyylor",
      text: "Github",
    },
    {
      icon: <SiX size={15} />,
      link: "https://x.com/tayyyyylor",
      text: "Twitter",
    },
    {
      icon: <Linkedin size={15} />,
      link: "https://github.com/tayyyyylor",
      text: "LinkedIn",
    },
    {
      icon: <Mail size={15} />,
      link: "https://github.com/tayyyyylor",
      text: "bryan.houblon@gmail.com",
    },
  ];
  return (
    <section className={cx("buttonsContact", className)}>
      {data.map((item, index) => (
        <a
          key={index}
          className={cx("buttonsContact__button")}
          href={item.link}
        >
          {item.icon}
          <p className={cx("buttonsContact__button__text")}>{item.text}</p>
        </a>
      ))}
    </section>
  );
};
