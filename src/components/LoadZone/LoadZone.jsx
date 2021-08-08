import React, { useState } from 'react';
import styles from './LoadZone.module.scss';

const LoadZone = () => {
  const [drag, setDrag] = useState(false);

  return (
    <div className={styles.loadZone}>
      {drag ? (
        <div className={styles.dropArea}>Отпустить файл для загрузки</div>
      ) : (
        <div className={styles.dragArea}>Перенести файл для загрузки</div>
      )}
    </div>
  );
};

export default LoadZone;
