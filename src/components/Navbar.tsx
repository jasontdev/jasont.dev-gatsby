import React from "react";
import * as styles from "../styles/Navbar.module.css";

export function Navbar() {
  return (<div className={styles.navbar}>
    <div className={styles.inactive}>BLOG</div>
    <div className={styles.inactive}>PORTFOLIO</div>
    <div className={styles.inactive}>CONTACT</div>
  </div>);
}
