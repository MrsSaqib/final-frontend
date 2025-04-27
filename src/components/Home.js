// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskBoard from './TaskBoard';
import axios from 'axios';

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the backend
    axios.get('http://localhost:5000/api/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const onDragEnd = (result) => {
    // Handle the drag end functionality, e.g., update task status in backend
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="task-board">
        <TaskBoard tasks={tasks.filter(task => task.status === 'To Do')} columnName="To Do" columnId="to-do" />
        <TaskBoard tasks={tasks.filter(task => task.status === 'In Progress')} columnName="In Progress" columnId="in-progress" />
        <TaskBoard tasks={tasks.filter(task => task.status === 'Done')} columnName="Done" columnId="done" />
      </div>
    </DragDropContext>
  );
}

export default Home;
