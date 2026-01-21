import React from 'react'
import styles from "./Badge.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Badge = ({ badge }: { badge: string }) => {
  return (
          <div className={cx("badge")}>
            {badge}
          </div>
      
  )
}
