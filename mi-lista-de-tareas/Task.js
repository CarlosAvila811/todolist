import React from 'react';

const Task = ({ task, deleteTask, handleEdit, handleCheckboxChange, isSelected}) => {
    return (
        <li>
            <input type="checkbox" checked={isSelected} onChange={() => handleCheckboxChange(task.id)}/>
            <span>{task.title} - {task.status}</span>
            <button onClick={() => handleEdit(task)}>Editar</button>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </li>
    )
}

export default Task