"use client";

import React, { useState } from "react";
import styles from "./Nav.module.scss";
// import { LocaleSwitcher } from "../LocaleSwitcher/LocaleSwitcher";
// import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import classNames from "classnames/bind";
import { useTheme } from "next-themes";
import useMobile from "@/hooks/useMobile";
import { LocaleSwitcher } from "../localeSwitcher/LocaleSwitcher";
import { ThemeToggle } from "../themeToggle/ThemeToggle";
import { X } from "lucide-react";

const cx = classNames.bind(styles);

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();
  const { theme } = useTheme();
  const t = useTranslations("Navbar");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const dataNav = [
    {
      label: t("skills"),
      href: "/#skills",
    },

    {
      label: t("projects"),
      href: "/#projects",
    },

    {
      label: t("contact"),
      href: "/#contact",
    },
  ];
  return (
    <>
      {!isMobile ? (
        <>
          <nav className={cx("navbar")}>
            {dataNav.map((item, index) => (
              <div key={index}>
                <Link href={item.href} className={cx("navbar__link")}>
                  {item.label}
                </Link>
              </div>
            ))}
            <LocaleSwitcher />
            <ThemeToggle />
          </nav>
        </>
      ) : (
        <>
          <div className={cx("navMobile")}>
            <button
              className={cx("navMobile__burger-button", { active: isOpen })}
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <span className={cx("line", { active: theme === "dark" })} />
              <span className={cx("line", { active: theme === "dark" })} />
              <span className={cx("line", { active: theme === "dark" })} />
            </button>

            <div
              className={cx("navMobile__menu-overlay", { open: isOpen })}
              onClick={closeMenu}
            />

            <nav className={cx("navMobile__mobile-menu", { open: isOpen })}>
              <div className={cx("navMobile__menu-header")}>
                <button
                  className={cx("navMobile__close-button")}
                  onClick={closeMenu}
                  aria-label="Fermer le menu"
                >
                  <X />
                </button>
              </div>
              <div className={cx("navMobile__menu-links")}>
                {dataNav.map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.href}
                      className={cx("navMobile__mobile-nav-link")}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};
