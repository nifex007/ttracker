import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Call Bae',
      date: 'Feb 27th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Check on Nikky',
      date: 'March 1st at 2:30pm',
      reminder: true,

    },
    {
      id: 3,
      text: 'Call Mom',
      date: 'March 27th at 2:30pm',
      reminder: false,
    },
    {
      id: 4,
      text: 'Check if sister is coming home',
      date: 'Everyday',
      reminder: true,
    },

  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header title="ttracker" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
