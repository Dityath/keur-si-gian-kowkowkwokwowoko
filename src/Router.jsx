import { Routes, Route } from "react-router-dom";

import "./styles/App.css";
import Home from "./pages";
import Login from "./pages/login";

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default Router;
