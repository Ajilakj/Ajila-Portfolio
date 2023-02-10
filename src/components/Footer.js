import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
     return (
      <footer>
        <ul className="inner-wrapper">
          <li>
            <a 
              href="https://github.com/Ajilakj" target="_blank" rel="noreferrer"
            >
               <FontAwesomeIcon icon={faGithub} />  GitHub
              
            </a>
          </li>
          <li>
              &copy; Ajila K Johnkutty @ 2022
          </li>
          <li>
          
            <a 
              href="https://www.linkedin.com/in/ajila-k-johnkutty/" target="_blank" rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
        </ul>
       </footer>
     );
   }
   
export default Footer;