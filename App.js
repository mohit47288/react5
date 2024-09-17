import React from 'react';
import './App.css';  // Import the global CSS file if needed




import DragDropTask from './components/DragDropTask';

function App() {
  return (
    <div className="App">
      <h1>Task 5</h1>
      <p>Drag and Drop Task</p>
      <DragDropTask /> 
    </div>
  );
}

export default App;
