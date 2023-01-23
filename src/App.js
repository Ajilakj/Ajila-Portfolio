import React from "react";
import Footer from "./components/Footer";
import PortfolioContainer from "./components/PortfolioContainer";

const styles = {
     container: {
       margin:'0px',
       background: '#EDF1FF',
       fontFamily:'Arial, Helvetica, sans-serif',
       maxWidth:'1200px'
     }
   }
   
const App = () =>{
return(
          <>
               <PortfolioContainer />
               <Footer/>
          </> 
     )
}
export default App;
