import { useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import styles from './LoadZone.module.scss';

const LoadZone = () => {
  const [drag, setDrag] = useState(false);

  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }

  function dralLeaveHandler(e) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandler(e) {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    console.log(files);
    //Для загрузки на сервер:
    // const formData = new FormData();
    // formData.append('file', files[0]);
    // axios.post('url', formData);

    setDrag(false);
  }

  return (
    <div className={styles.loadZone}>
      {drag ? (
        <div
          className={classNames(styles.area, styles.dropArea)}
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dralLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          onDrop={(e) => onDropHandler(e)}
        >
          Отпустить файл для загрузки
        </div>
      ) : (
        <div
          className={styles.area}
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dralLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
        >
          Перенести файл для загрузки
        </div>
      )}
    </div>
  );
};

export default LoadZone;
