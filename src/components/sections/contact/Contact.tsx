import { ButtonContact } from "@/components/buttonContact/ButtonContact";
import React from "react";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Contact = () => {
  return (
    <article className={cx("contact")}>
      <h2 className={cx("contact__title")}>Contact</h2>
      <p className={cx("contact__description")}>
        Contactez moi par mail ou téléphone
      </p>
      <ButtonContact className={cx("contact__buttons")} />
    </article>
  );
};
