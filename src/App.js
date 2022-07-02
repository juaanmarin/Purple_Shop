import {Route, Routes} from "react-router-dom"
import { Home } from "./components/pages/Home/Home";
import { Login } from "./components/pages/Login/Login";
import { Singup } from "./components/pages/Singup/Singup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/singup" element={<Singup/>} ></Route>
    </Routes>
  );
}

export default App;
