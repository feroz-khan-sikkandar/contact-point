import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginForm from './component/LoginForm';
import Home from './component/Home';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>


    </div>
  );
}

export default App;
