import { useState } from 'react';
import { useDrop } from 'react-dnd';
import Pic from '../Pic/Pic';
import Logo1 from '../../assets/img/productboard.png';
import styles from './DragDrop.module.scss';
const PictureList = [{ id: 1, url: Logo1 }];

const DragDrop = () => {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className={styles.Pictures}>
        {PictureList.map((picture) => {
          return <Pic url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className={styles.Board} ref={drop}>
        {board.map((picture) => {
          return <Pic url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
};

export default DragDrop;
