import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar";

// Pages
import Home from "../src/pages/home";
import Who_teenages from "../src/pages/who-teenages";
import Team from "../src/pages/team";
import Services from "../src/pages/services";
import CaseStudies from "../src/pages/case-studies";
import Contact from "../src/pages/contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='who-teenages' element={<Who_teenages />} />
        <Route path='team' element={<Team />} />
        <Route path='services' element={<Services />} />
        <Route path='case-studies' element={<CaseStudies />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
