import React from 'react';
const styles = {
  footer: {
    background: '#004B8D',
    display:'flex',
//     padding:'20px',
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  li:{
     listStyle:'none',
     padding:'20px',
     color:'beige',
   },
   a:{
     textDecoration:'none',
     color:'beige',
   }
}
function Footer() {
     return (
       <ul style={styles.footer} className="nav nav-tabs">
         <li style={styles.li} className="nav-item">
           <a style={styles.a}
             href="https://github.com/Ajilakj?tab=repositories" target="_blank" rel="noreferrer"
           >
             GitHub
           </a>
         </li>
         <li style={styles.li} className="nav-item">
             &copy; Ajila K Johnkutty @ 2022
         </li>
         <li style={styles.li} className="nav-item">
           <a style={styles.a}
             href="https://www.linkedin.com/in/ajila-j-621445221/" target="_blank" rel="noreferrer"
           >
             LinkedIn
           </a>
         </li>
       </ul>
     );
   }
   
export default Footer;