import React from "react";
import styles from "./Hero.module.scss";
import classNames from "classnames/bind";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ButtonContact } from "@/components/buttonContact/ButtonContact";

const cx = classNames.bind(styles);

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <article className={cx("hero")}>
      <section className={cx("hero__content")}>
        <div>
          <h4 className={cx("hero__subtitle")}>{t("subtitle")}</h4>
          <h1 className={cx("hero__title")}>
            {t.rich("title", { br: () => <br /> })}
          </h1>
          <p className={cx("hero__description")}>{t("description")}</p>
        </div>
        <div className={cx("hero__contact")}>
          <ButtonContact />
        </div>
      </section>
      <section className={cx("hero__imgContainer")}>
        <Image
          className={cx("hero__img")}
          src="/meee.png"
          alt="Moi"
          width={200}
          height={200}
        />
      </section>
    </article>
  );
};
