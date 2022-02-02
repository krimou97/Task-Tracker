import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Sport',
        day: 'Feb 5th 2:30pm',
        remider: true,
    },
    {
        id: 2,
        text: 'School',
        day: 'Feb 6th 1:30pm',
        remider: true,
    },
    {
        id: 3,
        text: 'Shopping',
        day: 'Feb 5th 4:30pm',
        remider: true,
    },
])

//Delete Task
const deleteTask = (id) => {
  console.log('task deletted', id)
}
  
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
