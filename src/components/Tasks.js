import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({ tasks }) => (
  <div>
    {tasks.map((task) => <Task key={task.id} task={task} />)}
  </div>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      reminder: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Tasks;
