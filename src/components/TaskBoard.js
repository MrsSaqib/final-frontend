// src/components/TaskBoard.js
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

function TaskBoard({ tasks, columnName, columnId }) {
  return (
    <div className="task-column">
      <h3>{columnName}</h3>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            className="task-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <div key={task._id} className="task-card">
                <h4>{task.title}</h4>
                <p>{task.assignedTo}</p>
              </div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TaskBoard;
