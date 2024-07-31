// App.js
import React from 'react';
import Navbar from './components/Navbar/navbar'; // Adjust path as needed
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'; // Import your custom styles if needed

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Other components */}
    </div>
  );
}

export default App;
