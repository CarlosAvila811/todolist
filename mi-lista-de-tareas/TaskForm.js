import React, { useState } from 'react';

function TaskForm({ addTask, taskToEdit, updateTask }) {
    const [title, setTitle] = useState(taskToEdit?.title || '');
    const [status, setStatus] = useState(taskToEdit?.status || 'Por hacer');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: taskToEdit?.id || Date.now(), //Genera ID único, si existe taskToEdit usa su ID
            title,
            status,
        };
        if(taskToEdit){
          updateTask(newTask);
        } else {
          addTask(newTask);
        }
        setTitle('');
        setStatus('Por hacer');
    };

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título de la tarea" required />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Por hacer">Por hacer</option>
          <option value="En progreso">En progreso</option>
          <option value="Finalizada">Finalizada</option>
        </select>
        <button type="submit">{taskToEdit ? 'Actualizar tarea' : 'Añadir tarea'}</button>
      </form>
    );
}
export default TaskForm