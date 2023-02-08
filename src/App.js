import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
   
const App = () =>{
return(

<Routes>
      <Route path="/Ajila-Portfolio" element={<Layout />} >
          <Route index element={<About />} />
          <Route path="about-me" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact-me" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
     </Route>

    </Routes>

     )
}
export default App;
