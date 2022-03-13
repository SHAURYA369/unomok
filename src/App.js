
import Button from "@mui/material/Button";
import Home from "./components/Home";
import Table from "./components/Table";
import Form from "./components/Form";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/create" element={<Form />} />
      <Route path="/view" element={<Table />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
