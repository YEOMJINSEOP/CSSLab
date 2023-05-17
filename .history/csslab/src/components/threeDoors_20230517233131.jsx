import React from 'react';
import styles from './ThreeDoors.module.css';

function ThreeDoors(props) {
  return (
    <div className={styles.stage}>
      <div className={styles.door}>
        <div className={styles.doorBack}></div>
        <div className={styles.ilbuni}></div>
        <div className={styles.doorBody}></div>
      </div>
      <div className={styles.door}>
        <div className={styles.doorBack}></div>
        <div className={styles.ilbuni}></div>
        <div className={styles.doorBody}></div>
      </div>
      <div className={styles.door}>
        <div className={styles.doorBack}></div>
        <div className={styles.ilbuni}></div>
        <div className={styles.doorBody}></div>
      </div>
    </div>
  );
}

export default ThreeDoors;