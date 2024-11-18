import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>
  <Navbar title="TextUtils" aboutext="About TextUtils"/>
  <div className="container my-3">
  <Textform heading="Enter text to anaylize"/>
  </div>
    </>
  );
}

export default App;
