// src/components/CreateTask.js
import React, { useState } from 'react';
import axios from 'axios';

function CreateTask() {
  const [task, setTask] = useState({ title: '', description: '', assignedTo: '' });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/tasks', task)
      .then((response) => {
        console.log('Task created:', response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Task Title" onChange={handleChange} />
      <textarea name="description" placeholder="Task Description" onChange={handleChange} />
      <input type="text" name="assignedTo" placeholder="Assigned To" onChange={handleChange} />
      <button type="submit">Create Task</button>
    </form>
  );
}

export default CreateTask;
