import React, { useMemo, useRef } from "react";
import styles from "./HorizontalHero.module.scss";
import classNames from "classnames/bind";
import { motion, useScroll, useTransform } from "motion/react";
import { useTranslations } from "next-intl";

const cx = classNames.bind(styles);

export const HorizontalHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("HorizontalHero");

  const TEXT = t("text");
  const TEXT_OPP = t("textOpp");
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const xOpp = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  const chunks = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => (
        <span
          className={cx("chunk", "heavitasFont")}
          aria-hidden="true"
          key={i}
        >
          {TEXT}
        </span>
      )),
    [TEXT],
  );
  const chunksOpp = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => (
        <span
          className={cx("chunk", "heavitasFont")}
          aria-hidden="true"
          key={i}
        >
          {TEXT_OPP}
        </span>
      )),
    [TEXT_OPP],
  );

  return (
    <section ref={containerRef} className={cx("horizontalHero")}>
      <div className={cx("trackWrap")}>
        <motion.div className={cx("track")} style={{ x }}>
          {chunks}
        </motion.div>
      </div>
      <h3 className={cx("title", "heavitasFont")}>{t("title")}</h3>
      <div className={cx("trackWrap")}>
        <motion.div className={cx("track")} style={{ x: xOpp }}>
          {chunksOpp}
        </motion.div>
      </div>
    </section>
  );
};
