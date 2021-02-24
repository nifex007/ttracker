import { useState } from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Call Bae',
            date: 'Feb 27th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Check on Chinwe',
            date: 'March 1st at 2:30pm',
            reminder: true
            
        },
        {
            id: 3,
            text: 'Call Mom',
            date: 'March 27th at 2:30pm',
            reminder: false
        },
        {
            id: 4,
            text: 'Check if sister is coming home',
            date: 'Everyday',
            reminder: true
        }
    
    ])
    return (
        <div>
            { tasks.map((task) => (
                <h4 key={task.id}> {task.text} </h4>
            ))}

        </div>
    )
}


export default Tasks;