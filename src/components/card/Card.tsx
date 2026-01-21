/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Card.module.scss";
import classNames from "classnames/bind";
import { SiGithub, SiNpm } from "@icons-pack/react-simple-icons";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "../atoms/badges/Badge";

const cx = classNames.bind(styles);

interface CardProps {
  src: string;
  title: string;
  description: string;
  badges: string[];
  linkNpm?: string;
  linkGithub?: string;
  linkWebsite?: string;
  onViewMore: () => void;
}

export const Card = ({
  src,
  title,
  description,
  badges,
  linkNpm,
  linkGithub,
  linkWebsite,
  onViewMore,
}: CardProps) => {
  const defaultLogo = "/meee.png";

  return (
    <motion.div
      className={cx("card")}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      viewport={{ once: false, amount: 0.4 }}
    >
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
         <Badge key={badge} badge={badge}/>
        ))}
      </div>
      <button onClick={onViewMore} className={cx("card__viewmore")}>
        Voir plus
      </button>
    </motion.div>
  );
};
