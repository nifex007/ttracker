/* eslint-disable arrow-body-style */
const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>{task.text}</h3>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
