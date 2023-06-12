import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { AddNote } from './Components/AddNote';
import { Notes } from './Components/Notes';

function App() {
  return (
    <div className="App">
      <h1>Notes Taking Application</h1>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/addnote" element={<AddNote />}/>
        <Route path="/notes" element={<Notes />}/>
      </Routes>
    </div>
  );
}

export default App;
