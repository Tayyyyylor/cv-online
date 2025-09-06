/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Card.module.scss";
import classNames from "classnames/bind";
import { SiGithub, SiNpm } from "@icons-pack/react-simple-icons";
import { ExternalLink } from "lucide-react";

const cx = classNames.bind(styles);

interface CardProps {
  src: string;
  title: string;
  description: string;
  badges: string[];
  linkNpm?: string;
  linkGithub?: string;
  linkWebsite?: string;
}

export const Card = ({
  src,
  title,
  description,
  badges,
  linkNpm,
  linkGithub,
  linkWebsite,
}: CardProps) => {
  const defaultLogo = "/meee.png";

  return (
    <div className={cx("card")}>
      <div className={cx("card__header")}>
        <div className={cx("card__logo-container")}>
          <img
            src={src ?? defaultLogo}
            alt=""
            className={cx("card__logo", src ? "" : "card__logo--default")}
            sizes="96px"
          />
        </div>
        <div className={cx("card__buttons")}>
          {linkNpm && (
            <a href={linkNpm} className={cx("card__button")} target="_blank">
              <SiNpm width={20} height={20} />
            </a>
          )}
          {linkGithub && (
            <a href={linkGithub} className={cx("card__button")} target="_blank">
              <SiGithub width={20} height={20} />
            </a>
          )}
          {linkWebsite && (
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
