import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar";
import Home from "../src/pages/home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
