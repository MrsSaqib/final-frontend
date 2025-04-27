import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import TaskBoard from './components/TaskBoard';
import axios from 'axios';

function App() {
  // State to store data fetched from the backend (for GET request)
  const [taskData, setTaskData] = useState([]);
  
  // State for the input data to send to the backend (for POST request)
  const [inputData, setInputData] = useState('');

  // Effect to make a GET request when the app loads
  useEffect(() => {
    axios.get('https://vercel.com/mrs-saqibs-projects/final')
      .then(response => {
        setTaskData(response.data); // Store the fetched data in state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty array ensures this runs only once when the component is mounted

  // Function to handle POST request
  const handlePostRequest = () => {
    axios.post('https://vercel.com/mrs-saqibs-projects/final', { data: inputData })
      .then(response => {
        console.log('Data posted successfully:', response.data);
        // Optionally reset input field or show success message
        setInputData('');
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/task-board" 
          element={<TaskBoard taskData={taskData} />} // Pass fetched taskData to TaskBoard
        />
      </Routes>

      {/* POST request example: */}
      <div>
        <h2>Send Data to Backend</h2>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)} // Update input state
        />
        <button onClick={handlePostRequest}>Submit</button>
      </div>
    </Router>
  );
}

export default App;



// // src/App.js
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';



// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/login" component={Login} />
//         <Route path="/register" component={Register} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
