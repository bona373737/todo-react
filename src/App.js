import { Routes,Route, Navigate } from "react-router-dom";
//components
import Singup from "./Singup";
import Singin from './Singin';
import Todo from "./Todo";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/signin"/>}/>
        <Route path="/signin" element={<Singin/>}/>
        <Route path="/signup" element={<Singup/>}/>
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
    </div>
  );  
}

export default App;
