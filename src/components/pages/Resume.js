import React from 'react';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
// import resume from '../../images/Resume-Portfolio (1).pdf'

const styles = {
  container: {
    margin:'10%',
  },
  document:{
    display:'flex',
    width:'20px',
    flexDirection:'row',
    justifyContent: 'space-between',
  }
  }
export default function Resume() {
  return (
    <div style={styles.container}>
      <h1>Resume</h1>
      <h2>Technical Skill</h2>
      <table>
        <tr>
          <td>
          Web Technologies
          </td>
          <td>
          HTML5, CSS3, JavaScript, Bootstrap, SASS, HandleBars (MVC framework)
          </td>
        </tr>
        <tr>
          <td>
          JavaScript Libraries
          </td>
          <td>
          JQuery,  JQueryUI, Node.js and React v.18
          </td>
        </tr>
        <tr>
          <td>
          Testing framework
          </td>
          <td>
          jest
          </td>
        </tr>
        <tr>
          <td>
          Web Standards
          </td>
          <td>
          Accessibility, SEO, Progressive Web App, Responsive design
          </td>
        </tr>
        <tr>
          <td>
          Development Tools
          </td>
          <td>
          VS code
          </td>
        </tr>
        <tr>
          <td>
          Version Control
          </td>
          <td>
          GitHub
          </td>
        </tr>
        <tr>
          <td>
          Methodologies
          </td>
          <td>
          Agile, Waterfall
          </td>
        </tr>
        <tr>
          <td>
          Web Servers
          </td>
          <td>
          Express 
          </td>
        </tr>
        <tr>
          <td>
          Database
          </td>
          <td>
          MongoDB, MySQL
          </td>
        </tr>
        <tr>
          <td>
          Operating Systems
          </td>
          <td>
          Windows
          </td>
        </tr>
      </table>
    <ul>
      <li>
      Experience with full software development life-cycle (SDLC) (design, development and deployment) and agile software methodologies (scrum).  
      </li>
      <li>
      Familiar in developing User Interface (UI) applications and using React , Node, Express, MongoDB,  JavaScript, JQuery, HTML5,  CSS3
      </li>
      <li>
      Knowledge in using Bootstrap, Bulma and CSS3 media queries for developing Responsive web design to support various screen sizes.  
      </li>
      <li>
      Experience with analyzing the Document Object Model (DOM) Layout, DOM Functions and JavaScript functions. 
      </li>
      <li>
      Familiar in web Accessibility standard implementation to make websites accessible and inclusive for all audiences.
      </li>
      <li>

      Knowledge in implementing SEO practices to make the websites pages rank high and searchable for various  Search Engines 
      </li>
      <li>
      Familiar in optimizing websites for better performance using tools like Lighthouse, Chrome Developer tool etc.
      </li>
      <li>

      Knowledge in working in AGILE based development environment 
      </li>
    </ul>





   <h2>Experience</h2> 

CTC group of institutions / Computer Science Teacher
June 2004 - May 2005,  Calicut, Kerala, India


<h2>Education</h2>
<table>
  <tr>
    <th>
    Course
    </th>
    <th>
    Details
    </th>
  </tr>
  <tr>
    <td>
    Masters in Computer Science
    </td>
    <td>
    Maharshi Dayanand University (2005- 2007,  Rohtak, India)
(Software Engineering, Software testing, Artificial intelligence, c++, etc )
A Level 
Computer Science
    </td>
  </tr>
  <tr>
    <td>
    Department of Electronics and Accreditation of Computer Courses (DOEACC Mar 2003,  Kerala, India)
    </td>
    <td>
    (VB, C, Foxpro, Computer Graphics, DBMS, OOP, etc)
    </td>
  </tr>
  <tr>
    <td>
    IBM Web Programming    
IBM center Calicut, Kerala, India
    </td>
    <td>
    (HTML, XML, VBscript, JavaScript, ASP)
    </td>
  </tr>
  <tr>
    <td>
      
APGDCA (Advance Post Graduate Diploma in Computer Applications)
St. Joseph’s College, Devagiri
Mar 2002,  Calicut, Kerala, India
    </td>
    <td>
    (Java, Oracle, VB, C, Foxpro, Computer Graphics, DBMS, OOP, etc)

    </td>
  </tr>
  <tr>
    <td>
    Bachelor of Science (Mathematics)
    Providence Women’s College  Mar 2000,  Calicut, India 
    </td>
    <td>
      
 It is a 3 year bachelor degree course
    </td>
  </tr>
</table>


































      {/* <Document style={styles.document} file={resume}>
      <Page pageNumber={1}/>
      </Document> */}
    </div>
  );
}
