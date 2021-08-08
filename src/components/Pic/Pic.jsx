import { useDrag } from 'react-dnd';

const Pic = ({ id, url }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      alt="draggabel - logo"
      ref={drag}
      src={url}
      width="102px"
      style={{ border: isDragging ? '1px solid red' : '0px' }}
    />
  );
};

export default Pic;
