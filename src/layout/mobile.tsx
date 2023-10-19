import React from "react";
import styles from "./mobile.module.css";

export const MobileLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.app}>
      <div className={styles.body}>{children}</div>
    </div>
  );
};
