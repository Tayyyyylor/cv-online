import { ButtonContact } from "@/components/buttonContact/ButtonContact";
import React from "react";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
import { useTranslations } from "next-intl";

const cx = classNames.bind(styles);

export const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <footer className={cx("contact")} id="contact">
      <h2 className={cx("contact__title", "heavitasFont")}>Contact</h2>
      <p className={cx("contact__description")}>{t("desc")}</p>
      <ButtonContact className={cx("contact__buttons")} />
    </footer>
  );
};
