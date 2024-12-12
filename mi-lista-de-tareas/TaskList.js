import React, {useState} from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

const TaskList = ({ tasks, updateTask, deleteTask, deleteSelectedTasks }) => {
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleEdit = (task) => {
    setTaskToEdit(task);
  }

  const handleCheckboxChange = (taskId) => {
    if (selectedTasks.includes(taskId)) {
      setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
    } else {
      setSelectedTasks([...selectedTasks, taskId]);
    }
  };

  return (
    <div>
       {taskToEdit && <TaskForm taskToEdit={taskToEdit} updateTask={updateTask}/>}
       {tasks.length === 0 ? (<p>No hay tareas</p>) : (
           <ul>
               {tasks.map((task) => (
                   <Task key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} handleEdit={handleEdit} handleCheckboxChange={handleCheckboxChange} isSelected={selectedTasks.includes(task.id)}/>
               ))}
           </ul>
       )}
        {tasks.length > 1 && <button onClick={() => deleteSelectedTasks(selectedTasks)} disabled={selectedTasks.length === 0}>Eliminar seleccionadas</button>}
    </div>
)
}

export default TaskList;