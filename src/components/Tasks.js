import PropTypes from 'prop-types';

const Tasks = ({ tasks }) => (
  <div>
    {tasks.map((task) => <h4 key={task.id}>{task.text}</h4>)}
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
