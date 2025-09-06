import React, { useMemo, useRef, useState } from "react";
import styles from "./HorizontalHero.module.scss";
import classNames from "classnames/bind";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";

const cx = classNames.bind(styles);

const TEXT = "Développement Web et Mobile — Frontend & Backend";

export const HorizontalHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const xOpp = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  const chunks = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => (
        <span className={cx("chunk")} aria-hidden="true" key={i}>
          {TEXT}
        </span>
      )),
    [],
  );

  const h3Text = "Vous voulez collaborer ?";
  const totalChars = h3Text.length;

  const [fillRatio, setFillRatio] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const clamped = Math.max(0, Math.min(1, v));
    setFillRatio(clamped);
  });

  const h3Chars = h3Text.split("").map((char, i) => {
    if (char === " ") {
      return (
        <span key={i} style={{ display: "inline-block", transform: "none" }}>
          {"\u00A0"}
        </span>
      );
    }
    const progressForIndex = 1 - i / totalChars;
    const band = 0.06;
    const delta = fillRatio - progressForIndex;
    const raw = 1 - Math.abs(delta) / band;
    const clamped = Math.max(0, Math.min(1, raw));
    const eased = clamped * clamped * (3 - 2 * clamped);
    const jumpPx = -8 * eased;
    const scale = 1 + 0.05 * eased;
    return (
      <span
        key={i}
        style={{
          display: "inline-block",
          transform: `translateY(${jumpPx}px) scale(${scale})`,
          transition: "transform 220ms cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform",
        }}
      >
        {char}
      </span>
    );
  });

  return (
    <section ref={containerRef} className={cx("horizontalHero")}>
      <div className={cx("trackWrap")}>
        <motion.div className={cx("track")} style={{ x }}>
          {chunks}
        </motion.div>
      </div>
      <h3>{h3Chars}</h3>
      <div className={cx("trackWrap")}>
        <motion.div className={cx("track")} style={{ x: xOpp }}>
          {chunks}
        </motion.div>
      </div>
    </section>
  );
};
