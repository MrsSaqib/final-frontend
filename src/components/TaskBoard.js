// // import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Droppable } from 'react-beautiful-dnd';

// function TaskBoard({ columnName, columnId }) {
//   // State to hold the tasks in this column
//   const [tasks, setTasks] = useState([]);

//   // Fetch tasks for this column from the backend when the component mounts
//   useEffect(() => {
//     // Replace with your actual API URL for fetching tasks
//     axios.get(`https://your-backend.vercel.app/api/tasks/${columnId}`)
//       .then((response) => {
//         // Check the response structure to ensure it's an array
//         console.log(response.data);  // Log the response data to inspect it

//         if (Array.isArray(response.data)) {
//           // Set tasks fetched from the backend to state if it's an array
//           setTasks(response.data);
//         } else {
//           console.error('The response is not an array:', response.data);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching tasks:', error);
//       });
//   }, [columnId]); // Only fetch data when the columnId changes

//   return (
//     <div className="task-column">
//       <h3>{columnName}</h3>
//       <Droppable droppableId={columnId}>
//         {(provided) => (
//           <div
//             className="task-list"
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//           >
//             {tasks.length === 0 ? (
//               <p>No tasks available</p>
//             ) : (
//               tasks.map((task, index) => (
//                 <div key={task._id} className="task-card">
//                   <h4>{task.title}</h4>
//                   <p>{task.assignedTo}</p>
//                 </div>
//               ))
//             )}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </div>
//   );
// }

// export default TaskBoard;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Droppable } from 'react-beautiful-dnd';

function TaskBoard({ columnName, columnId }) {
  // State to hold the tasks in this column
  const [tasks, setTasks] = useState([]);

  // Fetch tasks for this column from the backend when the component mounts
  useEffect(() => {
    // Replace with your actual API URL for fetching tasks
    axios.get(`https://vercel.com/mrs-saqibs-projects/final/${columnId}`)
      .then((response) => {
        // Check the response structure to ensure it's an array
        console.log(response.data);  // Log the response data to inspect it

        if (Array.isArray(response.data)) {
          // Set tasks fetched from the backend to state if it's an array
          setTasks(response.data);
        } else {
          console.error('The response is not an array:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, [columnId]); // Only fetch data when the columnId changes

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
            {tasks.length === 0 ? (
              <p>No tasks available</p>
            ) : (
              tasks.map((task, index) => (
                <div key={task._id} className="task-card">
                  <h4>{task.title}</h4>
                  <p>{task.assignedTo}</p>
                </div>
              ))
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TaskBoard;
