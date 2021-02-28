import { FaTimes } from 'react-icons/fa';
/* eslint-disable arrow-body-style */

const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>
        {task.text}
        <FaTimes style={{ color: 'red', cursor: 'pointer' }} />
      </h3>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
