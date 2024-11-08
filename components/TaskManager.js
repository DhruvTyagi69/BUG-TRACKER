// components/TaskManager.js
import { useState } from 'react';
import styles from '../styles/TaskManager.module.css';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if (taskInput.trim()) {
            setTasks([...tasks, taskInput]);
            setTaskInput('');
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className={styles.taskManager}>
            <h2>Task Manager</h2>
            <form onSubmit={addTask} className={styles.form}>
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="Add a new task"
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Add Task</button>
            </form>
            <ul className={styles.taskList}>
                {tasks.map((task, index) => (
                    <li key={index} className={styles.taskItem}>
                        {task}
                        <button onClick={() => deleteTask(index)} className={styles.deleteButton}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;