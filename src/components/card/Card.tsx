import React from "react";
import styles from "./Card.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import { SiGithub, SiNpm } from "@icons-pack/react-simple-icons";
import { ExternalLink } from "lucide-react";

const cx = classNames.bind(styles);

interface CardProps {
  src: string;
  isNpm?: boolean;
  isGithub?: boolean;
  isWebsite?: boolean;
  title: string;
  description: string;
  badges: string[];
  linkNpm?: string;
  linkGithub?: string;
  linkWebsite?: string;
}

export const Card = ({
  src,
  isNpm,
  isGithub,
  isWebsite,
  title,
  description,
  badges,
  linkNpm,
  linkGithub,
  linkWebsite,
}: CardProps) => {
  return (
    <div className={cx("card")}>
      <div className={cx("card__header")}>
        <Image
          src={src}
          alt=""
          className={cx("card__logo")}
          width={30}
          height={30}
        />
        <div className={cx("card__buttons")}>
          {isNpm && (
            <a href={linkNpm} className={cx("card__button")} target="_blank">
              <SiNpm width={20} height={20} />
            </a>
          )}
          {isGithub && (
            <a href={linkGithub} className={cx("card__button")} target="_blank">
              <SiGithub width={20} height={20} />
            </a>
          )}
          {isWebsite && (
            <a
              href={linkWebsite}
              className={cx("card__button")}
              target="_blank"
            >
              <ExternalLink width={20} height={20} />
            </a>
          )}
        </div>
      </div>
      <div className={cx("card__body")}>
        <h3 className={cx("card__title")}>{title}</h3>
        <p className={cx("card__description")}>{description}</p>
      </div>
      <div className={cx("card__badges")}>
        {badges.map((badge) => (
          <div className={cx("card__badge")} key={badge}>
            {badge}
          </div>
        ))}
      </div>
    </div>
  );
};
