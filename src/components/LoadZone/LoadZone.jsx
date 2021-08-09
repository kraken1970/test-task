import { useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import styles from './LoadZone.module.scss';
import LoadArea from '../LoadArea/LoadArea';

const LoadZone = () => {
  const [drag, setDrag] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  function dragStartHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    setDrag(true);
  }

  function dralLeaveHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
    setLoading(true);
  }

  function onDropHandler(e) {
    e.preventDefault();
    e.stopPropagation();

    let files = [...e.dataTransfer.files];
    console.log(files);
    //Для загрузки на сервер:
    // const formData = new FormData();
    // formData.append('file', files[0]);
    // axios.post('url', formData);

    setDrag(false);
    setLoaded(true);
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
          <LoadArea loading={loading} loaded={loaded} />
        </div>
      ) : (
        <div
          className={styles.area}
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dralLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
        >
          <LoadArea loading={loading} loaded={loaded} />
        </div>
      )}
    </div>
  );
};

export default LoadZone;
