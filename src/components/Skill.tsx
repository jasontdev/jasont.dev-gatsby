import React, {ReactElement, ReactNode} from "react";
import * as styles from "../styles/Skill.module.css";

type FeatureProps = {
  title: string;
  children: ReactNode;
  graphic?: ReactElement;
  light?: boolean;
};

export function Skill({children, title, graphic, light}: FeatureProps) {
  const container = light
    ? `${styles.container} ${styles.lightBackground}`
    : styles.container;
  return (
    <div className={container}>
      <div className={styles.text}>
        <div className={styles.textTitle}>{title}</div>
        <div className={styles.textBody}>{children}</div>
      </div>
      {graphic ? <div className={styles.animation}>{graphic}</div> : null}
    </div>
  );
}
