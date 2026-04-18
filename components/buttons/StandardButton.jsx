"use client";

import styles from "./standardbutton.module.scss";

export const StandardButton = ({ children, onClick, type = "button" }) => {
  return (
    <button type={type} onClick={onClick} className={styles.standardButton}>
      {children}
    </button>
  );
};
