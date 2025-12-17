import React from "react";
import styles from "./ButtonProject.module.scss";
import classNames from "classnames/bind";
import { motion } from "framer-motion";

interface ButtonProjectProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  isActive?: boolean;
}

const cx = classNames.bind(styles);

export const ButtonProject = ({
  onClick,
  label,
  isActive = false,
}: ButtonProjectProps) => {
  return (
    <button
      onClick={onClick}
      className={cx("buttonProject", { "buttonProject--active": isActive })}
    >
      <span className={cx("buttonProject__label")}>{label}</span>

      <motion.span
        className={cx("buttonProject__border", "buttonProject__border--top")}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className={cx("buttonProject__border", "buttonProject__border--right")}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isActive ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className={cx("buttonProject__border", "buttonProject__border--bottom")}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.6, ease: "easeInOut" }}
      />
      <motion.span
        className={cx("buttonProject__border", "buttonProject__border--left")}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isActive ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.9, ease: "easeInOut" }}
      />
    </button>
  );
};
