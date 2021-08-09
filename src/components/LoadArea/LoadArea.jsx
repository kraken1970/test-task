import React from 'react';
import { ReactComponent as LoadIcon } from '../../assets/img/loadIcon.svg';
import styles from './LoadArea.module.scss';

const LoadArea = ({ loading, loaded, areaTextHead, control }) => {
  return (
    <div className={styles.loadArea}>
      <div className={styles.iconArea}>
        <LoadIcon />
      </div>

      <span className={styles.areaText}>
        <p className={styles.areaTextHead}>Drag & drop here</p>
        <p className={styles.areaTextMiddle}>- or -</p>
        <p className={styles.areaTextControl}>Select file to upload</p>
      </span>
    </div>
  );
};

export default LoadArea;
