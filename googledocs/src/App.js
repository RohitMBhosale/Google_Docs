import logo from './logo.svg';
import './App.css';
import Navbar from './Component/navbar/navbar';
import TextEditor from './Component/TextEditor/textEditor';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <TextEditor/>
    </div>
    
  );
}

export default App;
