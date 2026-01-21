import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Nav } from "../nav/Nav";
import useMobile from "@/hooks/useMobile";
import { ThemeToggle } from "../atoms/themeToggle/ThemeToggle";

const cx = classNames.bind(styles);

export const Header = () => {
  const isMobile = useMobile();
  return (
    <header className={cx("header")}>
      <Nav />
      {isMobile && <ThemeToggle />}
    </header>
  );
};
