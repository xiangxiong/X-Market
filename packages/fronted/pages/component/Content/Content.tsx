import React from "react";
import styles from './Content.module.css';

export function Content() {
  return (
    <>
      <div className={styles.workspace}>
        <div className={styles.content_model}>Left</div>
        <div className={styles.sidebar}>Right</div>
      </div>
    </>
  );
}