"use client";

import styles from "./standardbutton.module.scss";

export const StandardButton = ({ children, onClick, type = "button", disabled = false, className = "", variant = "primary" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.standardButton} ${variant === "outline" ? styles.outline : ""} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
