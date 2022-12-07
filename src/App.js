import React from "react";
import NavTabs from "./components/NavTabs";
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
          <div style={styles.container}>
               {/* <NavTabs/>; */}
               <PortfolioContainer />
               <Footer/>
          </div> 
     )
}
export default App;
