import Navbar from './components/Navbar';
import Forms from './components/Forms';
import About from './components/About';

import './App.css';

function App() {
  return (
    <>
    <Navbar title="Project Gyanesh"/>
    <div className="container my-3">
    <Forms heading = "Enter the text to analyze"/>
    </div>
    <div className="container">
    <About/>
    </div>
      
    </>
  );
}

export default App;

