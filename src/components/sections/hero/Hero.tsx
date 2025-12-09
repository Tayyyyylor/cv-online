import React from "react";
import styles from "./Hero.module.scss";
import classNames from "classnames/bind";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ButtonContact } from "@/components/buttonContact/ButtonContact";
import SvgAnimated from "@/components/svgAnimated/SvgAnimated";
import { motion } from "motion/react";

const cx = classNames.bind(styles);

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <article className={cx("hero")}>
      <SvgAnimated />
      <section className={cx("hero__content")}>
        <div>
          <motion.h4
            className={cx("hero__subtitle")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            {t("subtitle")}
          </motion.h4>
          <motion.h1
            className={cx("hero__title")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            {t.rich("title", { br: () => <br /> })}
          </motion.h1>
          <motion.p
            className={cx("hero__description")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            {t("description")}
          </motion.p>
        </div>
        <motion.div
          className={cx("hero__contact")}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <ButtonContact />
          <motion.a
            href="/CVBryan.pdf"
            target="_blank"
            download
            className={cx("hero__buttonDownload")}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            Télécharger CV PDF
          </motion.a>
        </motion.div>
      </section>
      <motion.section
        className={cx("hero__imgContainer")}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ rotate: 360 }}
      >
        <Image
          className={cx("hero__img")}
          src="/meee.png"
          alt="Moi"
          width={200}
          height={200}
        />
      </motion.section>
    </article>
  );
};
